"use client"
import Counter from "@/component/counter";
import Link from "next/link";



async function getAccountFeatures() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Fetch failed:", error);
        return [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
        ];
    }
}

export default async function Accounts() {
    const features = await getAccountFeatures();

    return (
        <div className="flex min-h-screen flex-col p-6  bg-gradient-to-b from-slate-50 to-slate-100">
            <h1>Accounts</h1>
            The account page with it's features


            <div>
                {features.map(feature => (
                    <li key={feature.id} className="p-4 border rounded-lg">
                        <a href={`/blog/${feature.id}`} className="font-semibold hover:underline">
                            {feature.title}
                        </a>
                    </li>
                ))}
            </div>
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