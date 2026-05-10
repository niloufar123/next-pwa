"use server"

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const posts: { id: number, title: string, content: string }[] = [];
let nextId = 1;


export async function createPost(formData: FormData) {
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;

    //Validation
    if (!title || !body) {
        throw new Error("Title and body are required");
    }
    await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({ title, body }),
        headers: { "Content-Type": "application/json" },
        // cache:"no-cache"
        next:{
            revalidate:300,
            tags:["posts"]}
    })
    revalidatePath("/posts");// --> revalidate a specific path
    revalidateTag("posts");// --> revalidate all fetches with this tag
    redirect("/blogs");
}

export async function getPosts() {
    await new Promise(r => setTimeout(r, 2000));
    return posts;
}


export async function deletePost(id: number) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
    })
    revalidatePath("/blogs");
}