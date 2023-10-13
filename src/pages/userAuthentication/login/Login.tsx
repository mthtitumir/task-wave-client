import { Controls, Player } from "@lottiefiles/react-lottie-player";
import "./login.css";
import { FaUser } from "react-icons/fa";

const Login = () => {
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
                    <div className="cards flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                               <div className="">
                               <button className="btn-primary w-full flex items-center text-center justify-center"><FaUser className="mr-4"/> login</button>
                               </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;