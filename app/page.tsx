import Image from "next/image";
import Link from "next/link";
import { auth } from "@/lib/auth";
import  {headers} from "next/headers"
import Hero from "@/components/Hero";
export default async function Home() {
   const session = await auth.api.getSession({
        headers: await headers()
    })
  if(session){
  return ( 
    <Hero welcome={`Welcome ${session.user.name} start learning`} href="/courses" />
  );
  }
  return(
    <Hero welcome="start learning today" href="/my-courses" />
  )
}
