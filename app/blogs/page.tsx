import BlogList from "@/component/BlogList";
import Skeleton from "@/component/skeleton";
import { Suspense } from "react";
import blog from '@/component/ui/blog.module.css'

export const revalidate = 60;

export default async function BlogsPage() {
    return (
        <div className="flex min-h-screen flex-col p-6 bg-gradient-to-b from-slate-50 to-slate-100">
            <h1 className="text-3xl font-bold mb-4">Blogs</h1>
            <p className={blog.shape}>The blog page with its features.</p>
            <div className="mt-6">
                <Suspense fallback={<Skeleton className="m-5" lines={5} />}>
                    <BlogList />
                </Suspense>
            </div>
        </div>
    );
}
