import axios from "axios"
import { Product } from "../types/Product"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom" //lấy giá trị tham số truyền qua url

function Detail() {
    //B1: lấy giá trị id truyền qua url
    const { id } = useParams();
    //B2: khai báo biến product, hàm setProduct
    const [product, setProduct] = useState<Product|undefined>();
    //B3: khai báo hàm getDetail
    const getDetail = async (id:string) => {
        try {
            //call api 
            const { data } = await axios.get(`http://localhost:3000/products/${id}`);
            //dùng hàm setProduct để gán data cho biến product
            setProduct(data);
        } catch (error) {
            console.log(error)
        }
    }

    //gọi hàm getDetail trong useEffect
    useEffect(() => {
        if (!id) return; //nếu không tồn tại id trên url thì dừng luôn
        getDetail(id); //nếu có id thì gọi hàm getDetail
    }, [id])

    return (
        <div>
            <h1>Màn hình chi tiết</h1>
            <p>{product?.id}</p>
            <p>{product?.name}</p>
            <p>{product?.price}</p>
            <p>
                <img src={product?.image} alt="" />
            </p>
        </div>
    )
}

export default Detail