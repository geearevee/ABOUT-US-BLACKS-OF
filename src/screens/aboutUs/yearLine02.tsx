import arrowImage from '../../assets/aboutus/arrow-right.svg'
import { useState } from 'react'
import React from 'react'
interface YearLineProps {
  year: number
  incrementYear: () => void
}

export default function YearLine({ year, incrementYear }: YearLineProps) {
  const [years, setYears] = useState([
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
  ])

  return (
    <div className="h-max w-max ml-0 my-16">
      <div onClick={incrementYear} className="relative h-max w-max ">
        {/* years container */}
        <div className="flex h-[48px] items-center px-6 gap-[56px] w-max">
          {years.map((yearItem, index) => (
            <React.Fragment key={index}>
              <p
                className={`m-0 text-[28px] w-[80px] font-[500] text-purple-500 relative z-20 transition-all duration-[3s] ease-in-out`}
              >
                {yearItem}
              </p>
              {/* <div className=`${}`></div> */}
            </React.Fragment>
          ))}
        </div>
        <div
          className="h-[48px] absolute top-0 flex justify-end pr-3 bg-white rounded-3xl transition-all duration-[3s] ease-in-out"
          style={{
            width: `${year * 155 + 155}px`,
          }}
        >
          <img
            src={arrowImage}
            className="h-10 w-auto scale-105 my-auto"
            alt="arrow"
          />
        </div>
      </div>
    </div>
  )
}
