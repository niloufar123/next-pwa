export async function generateStaticParams() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const posts = await res.json();
    return posts.map((post: { id: number }) => ({ slug: post.id.toString() }))

}


export default async function BlogPostPage({
    params
}:{
    params:Promise<{slug:string}>
}) {
    const {slug}=await params;
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`,{
        next:{revalidate:60,tags:[`post-${slug}`]}
    });
    const post=await res.json();
    return (
       <main className="p-8 max-w-2xl mx-auto">
      <a href="/blogs" className="text-blue-500 hover:underline text-sm">
        ← Back to Blog
      </a>
      <h1 className="text-3xl font-bold mt-4 mb-2">{post.title}</h1>
      <p className="text-gray-600 leading-relaxed">{post.body}</p>
    </main>
    )
}