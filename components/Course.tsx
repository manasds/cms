import BuyButton from "./BuyButton";
export interface courseprops {
    _id? : string; 
    title : string ;
    description : string ;
    price : number ;
}
export default function Course( { course }: { course: courseprops }){
    const {_id , title, description, price } = course;
    return(
        <div className="w-full h-64 bg-neutral-200 rounded-2xl flex flex-col justify-start mx-2.5 overflow-hidden  ">
            <h1 className="text-xl bg-neutral-400 px-2.5 py-0.5 font-medium">{title}</h1>
            <h2 className="mt-1 px-1">{description}</h2>
            <div className="flex bg-neutral-300 font-medium mt-auto">
                <span className="w-1/2 flex items-center pl-2 rounded-md bg-green-100">${price}</span>
                <BuyButton courseId={_id ?? ""} />
            </div>
        </div>
    )
}