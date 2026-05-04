import BlogList from "@/component/BlogList";
import Skeleton from "@/component/skeleton";
import { Suspense } from "react";

// export const dynamic="force-dynamic";
// export const dynamic="force-static";
export const revalidate=60;


export default async function Blogs() {

    return (
        <div className="flex min-h-screen flex-col p-6  bg-gradient-to-b from-slate-50 to-slate-100">
            <h1>Blogs</h1>
            The blog page with it's features
            <br />
            
            {/* <Suspense fallback={<Skeleton className="m-5" lines={5}  />}> */}
                    <BlogList />
            {/* </Suspense> */}
        </div>
    )
}


