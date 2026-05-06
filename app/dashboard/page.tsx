import { auth } from "@/auth";
import SignOutButton from "@/component/SignOutButton";

export default async function DashboardPage() {

    const session = await auth();
    if (!session) return null;

    return (
        <main className="p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
                    <SignOutButton />
        
            <p className="text-lg text-gray-700">Hello, {session?.user?.name}! This is your dashboard.</p>

           
        </main>
    );

}