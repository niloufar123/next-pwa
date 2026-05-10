import type { ReactNode } from "react";

interface BlogLayoutProps {
    children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
    return (
                <div className="min-h-screen flex flex-col">
                    <nav className="flex items-center justify-between border-b border-slate-200 px-8 py-4">
                        <div className="text-lg font-bold">My Blog</div>
                        <div className="flex gap-4">
                            <a href="/" className="text-slate-900 no-underline hover:text-slate-700">
                                Home
                            </a>
                            <a href="/blogs" className="text-slate-900 no-underline hover:text-slate-700">
                                Blogs
                            </a>
                        </div>
                    </nav>

                    <main className="flex flex-1 items-center justify-center p-8">
                        <div className="w-full max-w-3xl">{children}</div>
                    </main>
                </div>
           
    );
}