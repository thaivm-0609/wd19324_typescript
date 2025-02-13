import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type ProductInput = {
    name: string,
    price: number,
    image: string,
}

function Create() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ProductInput>();
    const nav = useNavigate();

    const onCreate: SubmitHandler<ProductInput> = async (data) => {
        try {
            //B1: gửi dữ liệu lên server
            const response = await axios.post('http://localhost:3000/products', data);
            if (response.status == 201) {
                alert('Thêm mới thành công');
                nav('/');
            }
            //B2: phản hồi về cho ng dùng
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Create</h1>
            <form onSubmit={handleSubmit(onCreate)}>
                <div>
                    <label htmlFor="">Name</label>
                    <input 
                        type="text"
                        {
                            ...register('name', {
                                required: true,
                                minLength: 3,
                            })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input 
                        type="number"
                        {
                            ...register('price', {
                                required: true,
                                min: 0,
                            })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="">Image</label>
                    <input 
                        type="text"
                        {
                            ...register('image')
                        }
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default Create