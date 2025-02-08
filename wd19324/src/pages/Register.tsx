import axios from "axios"
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"; //điều hướng/chuyển trang
//import joi de validate form
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

//khai báo trường dữ liệu khi đăng ký
type RegisterInput = {
    email: string,
    password: string,
}

function Register() {
    //khai báo rule validate
    const validateForm = Joi.object({
        email: Joi.string().required().email({tlds:false}),
        password: Joi.string().required().min(6),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterInput>({
        resolver: joiResolver(validateForm)
    });

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
                    {
                        errors?.email && (
                            <p>{ errors?.email?.message }</p>
                        )
                    }
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
                    {
                        errors?.password && (
                            <p>{ errors?.password?.message }</p>
                        )
                    }
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register