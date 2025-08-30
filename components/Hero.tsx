import { Session } from "better-auth"
import Link from "next/link"
interface Heroprops {
    welcome : string ;
    href :string ;
}
export default function Hero({welcome , href} :Heroprops){
    return(
        <div className="h-screen w-screen bg-black flex flex-col items-center gap-10 justify-center pb-60">
              <div className="text-white text-5xl "> {welcome}</div>
              <Link href={href} className="py-1.5 px-5 text-white text-xl font-medium rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600"> View courses</Link>
            </div>
    )
}