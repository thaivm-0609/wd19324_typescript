import axios from "axios"
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"; //điều hướng/chuyển trang

//khai báo trường dữ liệu khi đăng ký
type RegisterInput = {
    email: string,
    password: string,
}

function Register() {
    const {
        register,
        handleSubmit
    } = useForm<RegisterInput>();

    const nav = useNavigate(); //dùng useNavigate để điều hướng

    //khai báo hàm onSubmit
    const onSubmit: SubmitHandler<RegisterInput> = async (data) => {
        try {
            //call api đăng ký
            await axios.post(`http://localhost:3000/register`, data);
            alert('Register success');
            nav("/"); //đẩy ng dùng về trang chủ
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Email</label>
                    <input 
                        type="text"
                        id="email"
                        {
                            ...register('email')
                        }
                    />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input 
                        type="text"
                        id="password"
                        {
                            ...register('password')
                        }
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register