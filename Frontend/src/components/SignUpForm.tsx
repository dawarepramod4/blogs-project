import { useState } from "react";
import { PrimaryBtn } from "./Buttons";
import { Link } from "react-router-dom";
import { FieldWithLabel } from "./InputFields";
import { SignUpInput } from "@dawarepramod4/medium-common";

export default function SignUpForm() {
    const [signUpInputs, setSignUpInputs] = useState<SignUpInput>({
        name: "",
        email: "",
        password: "",
    });

    return (
        <form>
            <div className="basis-1/2 flex justify-center justify-items-center">
                <div className="w-3/4 max-w-md block">
                    <div className="text-center font-bold text-xl">Create an Account</div>
                    <div className="text-center text-sm">
                        Alreay have an account? <Link to={"/signin"}>SignIn</Link>{" "}
                    </div>
                    <FieldWithLabel
                        label="Name"
                        type="text"
                        placeholder="Name"
                        onChange={(e) => {
                            setSignUpInputs({ ...signUpInputs, name: e.target.value });
                        }}
                    />
                    <FieldWithLabel
                        label="Email"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => {
                            setSignUpInputs({ ...signUpInputs, email: e.target.value });
                        }}
                    />
                    <FieldWithLabel
                        label="Password"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {
                            setSignUpInputs({ ...signUpInputs, password: e.target.value });
                        }}
                    />
                    <div className="pt-5 justify-center w-full">
                        <PrimaryBtn onClick={() => {}} label="Sign Up"></PrimaryBtn>
                    </div>
                </div>
            </div>
        </form>
    );
}
