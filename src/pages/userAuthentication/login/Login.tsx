import { Controls, Player } from "@lottiefiles/react-lottie-player";
import "./login.css";
import { FaEye, FaEyeSlash, FaSignInAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const onSubmit = (data: SomeType )=>{
        
        console.log(data)
    }
    const handleGooglesinin = () =>{}
    return (
        <div className="bg-black">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div  className=" ">
                        <Player
                            autoplay
                            speed={1.5}
                            loop
                            src="https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json"
                            style={{ height: "full", width: "full" }}
                        >
                            <Controls

                                buttons={[
                                    "play",
                                    "repeat",
                                    "frame",
                                    "debug",
                                    "snapshot",
                                    "background"
                                ]}
                            />
                        </Player>
                    </div>
                    <div  className="cards flex-shrink-0 w-full max-w-sm ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Email</span>
                                </label>
                                <input type="email" {...register("email",{ required: true })} placeholder="email" className="input input-bordered" />

                            </div>
                            {errors.email?.type === 'required' && <p className="text-red-500">email is required</p>}
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Password</span>
                                </label>

                                <div className="relative">
                                    <input type={showPassword ? 'text' : 'password'} {...register("password",{ required: true })} placeholder="password" className="input input-bordered  w-full" />
                                    <button
                                        type="button"
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                {errors.password?.type === 'required' && <p className="text-red-500">password is required</p>}
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login<FaSignInAlt /> </button>
                            </div>
                        </form>
                        <p className="mx-4">new there please <Link to={'/sinup'} ><button className="btn btn-link card-text-secondary">sinup</button></Link>   </p>
                        <div className="divider">OR</div>
                        <button onClick={handleGooglesinin} className="btn btn-primary mb-4  w-full"><img src="data:image/png;base64,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" className="h-4 w-4" alt="" /> Login with google</button>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;