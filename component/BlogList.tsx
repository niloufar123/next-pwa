async function getBlogs() {


 console.log("⏳ starting delay...");         // log 1
    await new Promise(r => setTimeout(r, 2000));
    console.log("✅ delay done, fetching...");   // log 2


    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=51");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
}
async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return res.json();
}

export default async function BlogList() {
    const [blogs,users] =await Promise.all([getBlogs(),getUser()])         
    
    
    // ← suspends HERE, Suspense catches it

    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {blogs.map((feature: any) => (
                <li key={feature.id} className="p-4 border rounded-lg">
                    <a href={`/blog/${feature.id}`} className="font-semibold hover:underline">
                        {feature.title}
                    </a>
                </li>
            ))}
        </ul>
    );
}