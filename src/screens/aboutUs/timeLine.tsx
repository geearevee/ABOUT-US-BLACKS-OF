import { useState, useEffect } from 'react'
import YearLine from './yearLine'
import TimeLineSlides from './TimeLineSlides'
export default function TimeLine() {
  const [year, setYear] = useState(0) // year 0 is 2016
  return (
    <div className="min-h-[100px] bg-green pb-28">
      <div className="mx-auto w-[min(90%,1440px)]">
        <TimeLineSlides year={year} />
        <YearLine year={year} setYear={setYear} />
      </div>
    </div>
  )
}
