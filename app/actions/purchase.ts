"use server";
import {client} from "@/lib/prisma" ;
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
export default async function purchasecourse(courseid : number){
    const session = await auth.api.getSession({
            headers: await headers()
        })
    const userid = session?.user.id ;
     const purchase = await client.purchase.create({
      data: {
      user: { connect: { id: userid } },
      course: { connect: { id: courseid } },
    },
     });

    return purchase;
}