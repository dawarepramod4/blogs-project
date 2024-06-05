import { useState } from "react";
import { FieldWithLabel } from "../components/InputFields";
import { Link, useNavigate } from "react-router-dom";
import { PrimaryBtn } from "../components/Buttons";
import { SignInInput } from "@dawarepramod4/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function SignInForm() {
    const navigate = useNavigate();
    const [signInInputs, setSiginInputs] = useState<SignInInput>({
        email: "",
        password: "",
    });
    async function signIn() {
        try {
            // navigate("/blog");
            console.log("before request");
            // alert("Error");
            const response = await axios.post(`${BACKEND_URL}/user/signin`, signInInputs);
            const jwt = response.data.jwt;
            console.log("Signed In");
            alert("Sined In");
            localStorage.setItem("token", jwt);
            navigate("/blog");
        } catch (e) {
            console.log(e);
            alert("Error");
        }
    }
    return (
        <form>
            <div className="basis-1/2 flex justify-center justify-items-center">
                <div className="w-3/4 max-w-md block ">
                    <div className="text-center font-bold text-xl">Sign Into Your Account</div>
                    <div className="text-center text-sm">
                        Don't have an account? <Link to={"/signup"}>Register</Link>{" "}
                    </div>
                    <FieldWithLabel
                        label="Email"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => {
                            setSiginInputs({ ...signInInputs, email: e.target.value });
                        }}
                    />
                    <FieldWithLabel
                        label="Password"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {
                            setSiginInputs({ ...signInInputs, password: e.target.value });
                        }}
                    />
                    <div className="pt-5 justify-center w-full">
                        <PrimaryBtn onClick={signIn} label="Sign In"></PrimaryBtn>
                    </div>
                </div>
            </div>
        </form>
    );
}
