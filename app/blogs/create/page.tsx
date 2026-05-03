import CreatePostForm from "@/component/createPostForm";

export default function CreatePostBlog() {
    return (
        <main className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
            <CreatePostForm />
        </main>
    );
}