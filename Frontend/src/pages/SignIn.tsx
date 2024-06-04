import SignInForm from "../components/SignInForm";
import { Quote } from "../components/Quote";

export default function SignIn() {
    return (
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:self-center pt-24 sm:pt-0  w-screen h-screen items-center">
                <SignInForm />
                <div className="invisible sm:visible">
                    <Quote />

                </div>
            
            </div>
        </div>
    );
}
