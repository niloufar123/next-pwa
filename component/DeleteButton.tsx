import { deletePost } from "@/app/blogs/actions/posts";
import {  useTransition } from "react";

export async function DeleteButton({id}:{id:number}){
    const [isPending, startTransition]=useTransition();
    return (
        <button onClick={()=>startTransition(()=>deletePost(id))}
        disabled={isPending}
        className="text-red-500 text-sm hover:underline disabled:opacity-50"
        >
            {isPending ? "Deleting..." : "Delete"}
        </button>
 
    )
}