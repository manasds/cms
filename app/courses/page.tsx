import Course from "@/components/Course";
import { courseprops } from "@/components/Course";
import {client} from "@/lib/prisma"
export default async function Courses(){
    const data = await client.course.findMany();
    console.log(data) ;
    return(
        <div className="h-screen w-screen bg-black">
            <div className="grid grid-cols-3 gap-2.5 p-3.5 pt-16">
                {/* {data.map((course : courseprops)=> (
                <Course key={course.title} course={course} />
            ))} */}
            </div>
        </div>
    )
}