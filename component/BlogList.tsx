import Link from "next/link";


async function getBlogs() {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=51",
        {
            next:{revalidate:10}
        }

    );
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
}
async function getUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return res.json();
}

export default async function BlogList() {
    const [blogs, users] = await Promise.all([getBlogs(), getUser()])


    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {blogs.map((feature: any) => (
                <li key={feature.id} className="p-4 border rounded-lg">
                    <Link href={`/blogs/${encodeURIComponent(feature.id)}`} className="font-semibold hover:underline">
                        {feature.title}
                    </Link>
                    {/* <p className="text-sm text-gray-500">By {users.name}</p>    
                    <a href={`/blogs/${feature.id}`} className="font-semibold hover:underline">
                        {feature.title}
                    </a> */}
                </li>
            ))}
        </ul>
    );
}