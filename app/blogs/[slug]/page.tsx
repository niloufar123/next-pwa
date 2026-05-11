import Link from "next/link";


export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
        next: { revalidate: 60, tags: [`post-${slug}`] }
    });

    if (!res.ok) {
        throw new Error(`Post not found: ${res.status}`);
    }


    const post = await res.json();
    return (
        <main className="p-8 max-w-2xl mx-auto">
            <Link href="/blogs" className="text-blue-500 hover:underline text-sm">
                ← Back to Blogs
            </Link>
            <h1 className="text-3xl font-bold mt-4 mb-2">{post.title}</h1>
            <p className="text-gray-600 leading-relaxed">{post.body}</p>
        </main>
    );
}
