import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

type LoginInput = {
    email: string,
    password: string,
}

function Login() {
    const {
        register,
        handleSubmit
    } = useForm<LoginInput>({});

    const onSubmit: SubmitHandler<LoginInput> = async (data) => {
        try {
            //B1: gửi dữ liệu lên json_server thông qua API
            const response = await axios.post('http://localhost:3000/login', data);
            if (response.status == 200) { //request xử lý thành công
                //B2: lưu accessToken vào localStorage
                localStorage.setItem('token', response.data.accessToken);
                alert('Đăng nhập thành công');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Login</h1>
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
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login