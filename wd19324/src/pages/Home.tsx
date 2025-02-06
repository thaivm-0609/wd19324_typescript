import axios from "axios" //để call api
import { Product } from "../types/Product"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Home() {
    //lấy accessToken từ trong localStorage
    const token = localStorage.getItem('token');

    const nav = useNavigate();

    if (!token) { //nếu như không có token thì đẩy ng dùng về trang login
        nav('/login');
    } 
    
    //nếu có token thì cho vào trang danh sách
    //products: biến chứa dữ liệu
    //hàm setProducts: gán giá trị cho biến products
    const [products, setProducts] = useState<Product[]>([]);
    //khai báo hàm lấy dữ liệu
    const getList = async () => {
        try {
            //B1: call api để lấy dữ liệu từ json-server
            const { data } = await axios.get('http://localhost:3000/products');
            //B2: gọi hàm setProducts để 
            //gán dữ liệu cho biến products
            setProducts(data);
        } catch (error) {
            console.log(error)
        }
    }

    //khai báo hàm xóa dữ liệu
    const delPro = async (id:number) => {
        try {
            if (window.confirm('Are you sure?')) { //popup confirm
                const response = await axios.delete(`http://localhost:3000/products/${id}`);
                if (response.status == 200) { //kiểm tra mã phản hồi (http response status code)
                    alert('Xóa thành công');
                    getList(); //gọi hàm getList để cập nhật danh sách sản phẩm
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    //thực thi hàm ngay khi load trang
    useEffect(() => {
        getList();
    }, [])

    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p,index) => (
                        <tr key={index}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>
                                <img src={p.image} alt="" />
                            </td>
                            <td>
                                <a className="btn btn-info" href={"/detail/"+p.id}>Detail</a>
                                <a className="btn btn-warning" href="">Edit</a>
                                <a className="btn btn-danger" onClick={() => delPro(p.id)}>Delete</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home