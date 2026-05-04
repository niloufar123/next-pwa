"use client";

import { createPost } from "@/app/actions/posts";
import { useActionState } from "react";


const initialState={error:null as string|null};

async function createPostWithStatus(_prevState:typeof initialState,formData:FormData){

    try{
        await createPost(formData);
        return {error:null};
    }catch(error:any){
        return {error:(error as Error).message || "An error occurred"};
    }

}

export default function CreatePostForm(){
    const [state, action,isPending]=useActionState(createPostWithStatus,initialState);
    
    return (
        <form action={action} className="space-y-4">
            
            {/* Error message */}
            {state.error && <div className="text-red-500">{state.error}</div>}
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="title">Title</label>
                <input name="title" type="text" required className="w-full border border-gray-300 rounded-md p-2" placeholder="Post title..." />
            </div>

            <div>   
                <label className="block text-sm font-medium mb-1" htmlFor="body">Body</label>
                <textarea name="body" required className="w-full border border-gray-300 rounded-md p-2" placeholder="Post content..." />    

            </div>
            <button type="submit"  className={`px-4 py-2 rounded-md  ${isPending ? "bg-gray-900 cursor-not-allowed" : "text-white bg-blue-600 hover:bg-blue-700"}`}>
                {isPending ? "Publishing..." : "Publish Post"}
                
            </button>
        </form>
       );
}