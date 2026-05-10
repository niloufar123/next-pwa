import Counter from "@/component/counter";
import Link from "next/link";





export default async function Accounts() {

    return (
        <div className="flex min-h-screen flex-col p-6  bg-gradient-to-b from-slate-50 to-slate-100">
            <h1>Accounts</h1>
            The account page with it's features


            <br />

            <Counter />
            <div>

            <p>

                <button>
                    <Link href="/accounts/transfer" >Item1</Link>

                </button>
            </p>
            <p>
                <button>

                    <Link href="/accounts/log" >Item2</Link>
                </button>

            </p>
            </div>

        </div>
    )
}