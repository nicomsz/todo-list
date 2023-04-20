export default function DateTime() {
  const daysOfWeek = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
  ]
  const today = new Date()
  const dayName = daysOfWeek[today.getDay()]
  const monthsOfYear = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER',
  ]
  const monthName = monthsOfYear[today.getMonth()]
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const day = currentDate.getDate()
  return (
    <>
      <div className="flex flex-row content-center ">
        <div className="text-5xl pr-2">
          <p className="pt-2">{day}</p>
        </div>
        <div className="">
          <div className="pt-2 text-justify">{monthName}</div>
          <div className=" font-semibold">{year}</div>
        </div>
        <div className="flex flex-grow"></div>
        <span className="flex flex-row-reverse">{dayName}</span>
      </div>
    </>
  )
}
