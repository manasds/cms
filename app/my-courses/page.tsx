import Course from "@/components/Course";
import {client} from "@/lib/prisma";
import { auth } from "@/lib/auth"; 
import { headers } from "next/headers";
import type { Course as CourseType } from "@prisma/client";
export default async function Home(){
    const session = await auth.api.getSession({
            headers: await headers()
        })
    const userId = session?.user.id ; 
    const purchases = await client.purchase.findMany({
        where: { userId },         
        select: { course: true }, 
    });
    const courses: CourseType[] = purchases.map(p => p.course);
    return(
        <div className="h-screen w-screen bg-black">
                    <div className="grid grid-cols-3 gap-2.5 p-3.5 pt-16">
                        {courses.map( course => (
                        <Course key={course.id} course={course} />
                    ))}
                    </div>
        </div>
    )
}