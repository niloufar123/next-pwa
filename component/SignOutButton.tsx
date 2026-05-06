import { signOut } from "@/auth";

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        // await signO/////////////////////////////////////ut({ redirectTo: "/login" });
      }}
    >
      <button
        type="submit"
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm font-medium"
      >
        Sign Out
      </button>
    </form>
  );
}