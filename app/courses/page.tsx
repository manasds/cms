import Course from "@/components/Course";
import type { Course as CourseType } from "@prisma/client";
import {client} from "@/lib/prisma"
export default async function Courses(){
     const data: CourseType[] = await client.course.findMany();
     return(
        <div className="h-screen w-screen bg-black">
            <div className="grid grid-cols-3 gap-2.5 p-3.5 pt-16">
                {data.map( course => (
                <Course key={course.id} course={course} />
            ))}
            </div>
        </div>
    )
}