import Link from "next/link"
import LoginButton from "@/components/LoginButton"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import LogoutButton from "@/components/LogoutButton"
export default async function Navbar(){
    const session = await auth.api.getSession({
            headers: await headers()
        })
         return(
            <div className="w-full h-20 bg-black flex justify-between items-center px-16 pt-14">
                <Link href="/" className="text-white text-xl font-medium">0.1X Devs </Link>
                <div className="flex justify-around gap-5 bg-gray-900 px-7 py-5 rounded-full ">
                    <Link href="/courses" className="text-white text-md font-medium font-sans hover:text-blue-600 ">Course</Link>
                    <Link href="/my-courses" className="text-white text-md font-medium font-sans hover:text-blue-600">My Course</Link>
                    <Link href="/buy" className="text-white text-md font-medium font-sans ">Buy</Link>
                </div>
                {session ?<LogoutButton /> :<LoginButton />}
            </div>
        )
}