export default function DateTime () {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayName = daysOfWeek[today.getDay()];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = monthsOfYear[today.getMonth()];
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const day = currentDate.getDate();
        return ( 
           <>
           

           <div className="flex flex-row content-center ">
               <div className="text-5xl pr-2">
                   <p className="pt-2">{day}</p>
               </div>
               <div className="">
                   <div className="pt-2 text-justify">
                       {monthName}
                   </div>
                   <div className=" font-semibold">
                       {year}
                   </div>
               </div>
               <div className="flex flex-grow"></div>
                <span className="flex flex-row-reverse">{dayName}</span>

               
           </div>
        
           </>
        )
    } // Janeiro é 0 
