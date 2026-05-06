import {signIn} from "@/auth";
import { Sign } from "crypto";
export default function GoogleSignInButton() {
    return (
        <form action={async()=>{

            "use server";
            await signIn("google",{redirectTo:"/dashboard"});   
        }}>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
                Sign in with Google
            </button>
        </form>

    );
}