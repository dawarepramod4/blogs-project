import { Quote } from "../components/Quote";
import SignUpForm from "../components/SignUpForm";
export default function SignUp() {
    return (
        <div className="">
            <div className="grid grid-cols-2 w-screen h-screen items-center">
                <SignUpForm />
                <Quote />
            </div>
        </div>
    );
}
