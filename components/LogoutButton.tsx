"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
// logout button
export default function LogoutButton(){
    const router = useRouter();
    async function handlesignout(){
        await authClient.signOut({
        fetchOptions: {
            onSuccess: () => {
            router.push("/"); // redirect to login page
         },
    },
    });
    }
    return (
    <button onClick={handlesignout} className="text-white bg-gray-900 p-4 rounded-full hover:bg-white hover:text-black cursor-pointer">
      signout
    </button>
  );
}