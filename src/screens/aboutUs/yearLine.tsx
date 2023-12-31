import arrowImage from '../../assets/aboutus/arrow-right.svg'
interface YearLineProps {
  year: number
  setYear: (year: number) => void
}
export default function YearLine({ year, setYear }: YearLineProps) {
  return (
    <div className="flow-root w-max mt-12 ml-[210px] mr-auto max-[1740px]:mx-auto overflow-hidden">
      {/* 2 grid container */}
      <div className="relative flex my-6 items-center h-[48px]">
        {/* years */}
        <div className="grid grid-cols-[repeat(17,max-content)] transition-all ease-in-out duration-[1s] grid-rows-[max-content] relative text-white items-center cursor-pointer mobile-timeline-container">
          <h4
            className={` flex justify-center text-[28px] font-[600] relative z-20 col-span-1 col-start-1 select-none col-end-2 transition-all duration-[1s] ease-in-out text-green  w-[125px]  ${
              year > 1 && 'max-[1740px]:w-0 overflow-hidden'
            }`}
            onClick={() => setYear(0)}
          >
            2016
          </h4>
          <div
            className={` h-full transition-all ease-in-out duration-[1s] ${
              year >= 1 ? 'w-0' : 'w-10'
            }`}
          ></div>
          <h4
            className={` flex justify-center text-[28px] font-[600] relative z-20 col-span-1 col-start-3 select-none col-end-4 transition-all duration-[1s] ease-in-out  w-[125px]  ${
              year >= 1 ? 'text-green w-[125px]' : 'text-white w-20'
            } ${year > 2 && 'max-[1740px]:w-0 overflow-hidden'}`}
            onClick={() => setYear(1)}
          >
            2017
          </h4>
          <div
            className={` h-full transition-all ease-in-out duration-[1s] ${
              year >= 2 ? 'w-0' : 'w-10'
            }`}
          ></div>
          <h4
            className={` flex justify-center text-[28px] font-[600] relative z-20 col-span-1 col-start-5 select-none col-end-6 transition-all duration-[1s] ease-in-out  w-[125px]  ${
              year >= 2 ? 'text-green w-[125px]' : 'text-white w-20'
            } ${year > 3 && 'max-[1740px]:w-0 overflow-hidden'}`}
            onClick={() => setYear(2)}
          >
            2018
          </h4>
          <div
            className={` h-full transition-all ease-in-out duration-[1s] ${
              year >= 3 ? 'w-0' : 'w-10'
            }`}
          ></div>
          <h4
            className={` flex justify-center text-[28px] font-[600] relative z-20 col-span-1 col-start-7 select-none col-end-8 transition-all duration-[1s] ease-in-out  w-[125px]  ${
              year >= 3 ? 'text-green w-[125px]' : 'text-white w-20'
            } ${year > 4 && 'max-[1740px]:w-0 overflow-hidden'}`}
            onClick={() => setYear(3)}
          >
            2019
          </h4>
          <div
            className={` h-full transition-all ease-in-out duration-[1s] ${
              year >= 4 ? 'w-0' : 'w-10'
            }`}
          ></div>
          <h4
            className={` flex justify-center text-[28px] font-[600] relative z-20 col-span-1 col-start-9 select-none col-end-10 transition-all duration-[1s] ease-in-out  w-[125px]  ${
              year >= 4 ? 'text-green w-[125px]' : 'text-white w-20'
            } ${year > 5 && 'max-[1740px]:w-0 overflow-hidden'}`}
            onClick={() => setYear(4)}
          >
            2020
          </h4>
          <div
            className={` h-full transition-all ease-in-out duration-[1s] ${
              year >= 5 ? 'w-0' : 'w-10'
            }`}
          ></div>
          <h4
            className={` flex justify-center text-[28px] font-[600] relative z-20 col-span-1 col-start-11 select-none col-end-12 transition-all duration-[1s] ease-in-out   w-[125px]  ${
              year >= 5 ? 'text-green w-[125px]' : 'text-white w-20'
            } ${year > 5 && 'max-[1740px]:w-0 overflow-hidden'}`}
            onClick={() => setYear(5)}
          >
            2021
          </h4>
          <div className="h-full w-10"></div>
          <h4
            className={` flex w-[125px] justify-center text-[28px] font-[600] relative z-20 col-span-1 col-start-13 select-none col-end-14`}
          >
            2022
          </h4>
          <div className="h-full w-10"></div>
          <h4
            className={` flex w-[125px] justify-center text-[28px] font-[600] relative z-20 col-span-1 col-start-[15] select-none col-end-[16]`}
          >
            2023
          </h4>
          <div className="h-full w-10"></div>
          <h4
            className={` flex w-[125px] justify-center text-[28px] font-[600] relative z-20 col-span-1 col-start-[17] select-none col-end-[18]`}
          >
            2024
          </h4>
        </div>
        {/* white arrow */}
        <div
          className={`grid grid-rows-1 absolute top-0 transition-all duration-[1s] ease-in-out ${
            year > 1 && 'max-[1740px]:mobile-timeline'
          }`}
          style={{
            gridTemplateColumns: `${Number(160 + year * 125) + 'px'}`,
          }}
        >
          <div className="flex justify-end h-[48px] bg-white  rounded-3xl col-start-1 w-full z-10">
            <img
              src={arrowImage}
              className="h-10 w-auto mt-auto mb-auto"
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
