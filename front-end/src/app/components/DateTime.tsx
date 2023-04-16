export default function DateTime () {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Janeiro é 0
    const day = currentDate.getDate();
 return ( 
    <>
    <div className="flex flex-auto">
        <div className="text-4xl">
            {day}
        </div>
        <div className="flex flex-col">
            <div className="">
                {month}
            </div>
            <div className="">
                {year}
            </div>
        </div>
    </div>
    </>
 )
}