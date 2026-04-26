"use client" // error.js must be a Client Component

export default function BlogError({ error, reset }: any) {
    return (
        <div>
            <h2>Failed to load blogs</h2>
            <p>{error.message}</p>
            <button className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                onClick={() => reset()}>Try again</button>
        </div>
    );
}