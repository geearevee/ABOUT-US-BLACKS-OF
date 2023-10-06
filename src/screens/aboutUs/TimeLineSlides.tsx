import ringImage from '../../assets/aboutus/Ellipse 101.svg'
interface TimeLineSlidesProps {
  year: number
}
export default function TimeLineSlides({ year }: TimeLineSlidesProps) {
  return (
    <div className="flex gap-28 justify-between w-full items-center relative  max-[1170px]:flex-wrap">
      <div className="rounded-full flex flex-[0_0_535px] h-[535px]  mt-[-90px] overflow-hidden flex-nowrap max-[1170px]:mx-auto max-[680px]:h-[280px] max-[680px]:flex-[0_0_280px]">
        <img
          src={ringImage}
          alt="ring"
          className="absolute bottom-0 left-[-20px] rotate-[-15deg] w-[580px] z-40 max-[1170px]:top-0 max-[1170px]:mx-auto max-[1170px]:left-0 max-[1170px]:right-0 max-[1170px]:bottom-auto max-[680px]:h-[200px] max-[680px]:top-[-40px] max-[680px]:left-[10px]"
        />
        <div
          className="h-full w-full bg-white flex-shrink-0 rounded-full transition-transform duration-[1s] ease-in-out"
          style={{ transform: `translateX(-${100 * year}%)` }}
        />
        <div
          className="h-full w-full bg-red-400 flex-shrink-0 relative rounded-full transition-transform duration-[1s] ease-in-out"
          style={{ transform: `translateX(-${100 * year}%)` }}
        />
        <div
          className="h-full w-full bg-purple-500 flex-shrink-0 rounded-full transition-transform duration-[1s] ease-in-out"
          style={{ transform: `translateX(-${100 * year}%)` }}
        />
        <div
          className="h-full w-full bg-yellow flex-shrink-0 rounded-full transition-transform duration-[1s] ease-in-out"
          style={{ transform: `translateX(-${100 * year}%)` }}
        />
        <div
          className="h-full w-full bg-cyan-400 flex-shrink-0 rounded-full transition-transform duration-[1s] ease-in-out"
          style={{ transform: `translateX(-${100 * year}%)` }}
        />
        <div
          className="h-full w-full bg-lime-400 flex-shrink-0 rounded-full transition-transform duration-[1s] ease-in-out"
          style={{ transform: `translateX(-${100 * year}%)` }}
        />
      </div>
      <div className="flex  flex-[1_1_auto] max-[680px]:flex-[0_0_90%] h-full overflow-hidden text-white max-[1170px]:mx-auto">
        <div
          className="w-full min-w-full  pt-4 px-4 transition-transform ease-in-out duration-[1s]"
          style={{ transform: `translateX(-${100 * year}%)` }}
        >
          <h1 className="text-[78px] mb-[52px] max-[550px]:text-[48px] font-semibold">
            2016
          </h1>
          <p className="text-[28px] max-[550px]:text-[20px]">
            The inception of BharatRohan in 2016
          </p>
        </div>
        <div
          className="w-full min-w-full  pt-4 px-4 transition-transform ease-in-out duration-[1s]"
          style={{ transform: `translateX(-${100 * year}%)` }}
        >
          <h1 className="text-[78px] mb-[52px] max-[550px]:text-[48px] font-semibold">
            2017
          </h1>
          <p className="text-[28px] max-[550px]:text-[20px]">
            Operations flags of with 42 farms and farmers as pilot in
            partnership with CSIR-CIMAP Lucknow
          </p>
        </div>
        <div
          className="w-full min-w-full  pt-4 px-4 transition-transform ease-in-out duration-[1s]"
          style={{ transform: `translateX(-${100 * year}%)` }}
        >
          <h1 className="text-[78px] mb-[52px] max-[550px]:text-[48px] font-semibold">
            2018
          </h1>
          <p className="text-[28px] max-[550px]:text-[20px] before:inline-block ">
            Raises Grant from{' '}
          </p>
          <p className="text-[28px] max-[550px]:text-[20px] before:inline-block before:content-[''] before:mx-2 before:mb-1 max-[550px]:before:mb-0 before:rounded-full before:bg-yellow before:h-3 before:w-3">
            a-idea
          </p>
          <p className="text-[28px] max-[550px]:text-[20px] before:inline-block before:content-[''] before:mx-2 before:mb-1 max-[550px]:before:mb-0 before:rounded-full before:bg-yellow before:h-3 before:w-3">
            BIRAC-BIG
          </p>
        </div>
        <div
          className="w-full min-w-full  pt-4 px-4 transition-transform ease-in-out duration-[1s]"
          style={{ transform: `translateX(-${100 * year}%)` }}
        >
          <h1 className="text-[78px] mb-[52px] max-[550px]:text-[48px] font-semibold">
            2019
          </h1>
          <p className="text-[28px] max-[550px]:text-[20px] before:inline-block before:content-[''] before:mx-2 before:mb-1 max-[550px]:before:mb-0 before:rounded-full before:bg-yellow before:h-3 before:w-3">
            Outreach expands to 1000 farmers
          </p>
          <p className="text-[28px] max-[550px]:text-[20px] before:inline-block before:content-[''] before:mx-2 before:mb-1 max-[550px]:before:mb-0 before:rounded-full before:bg-yellow before:h-3 before:w-3">
            Onboards ITC as client for 2 crop cycle
          </p>
          <p className="text-[28px] max-[550px]:text-[20px] before:inline-block before:content-[''] before:mx-2 before:mb-1 max-[550px]:before:mb-0 before:rounded-full before:bg-yellow before:h-3 before:w-3">
            Raises convertible not from startup Oasis.
          </p>
        </div>
        <div
          className="w-full min-w-full  pt-4 px-4 transition-transform ease-in-out duration-[1s]"
          style={{ transform: `translateX(-${100 * year}%)` }}
        >
          <h1 className="text-[78px] mb-[52px] max-[550px]:text-[48px] font-semibold">
            2020
          </h1>
          <p className="text-[28px] max-[550px]:text-[20px] before:inline-block before:content-[''] before:mx-2 before:mb-1 max-[550px]:before:mb-0 before:rounded-full before:bg-yellow before:h-3 before:w-3">
            Farmer counts jumps to 2,000 followed by 3,600 within 4 months
          </p>
          <p className="text-[28px] max-[550px]:text-[20px] before:inline-block before:content-[''] before:mx-2 before:mb-1 max-[550px]:before:mb-0 before:rounded-full before:bg-yellow before:h-3 before:w-3">
            Enters Rajasthan with cumin and moong bean crops{' '}
          </p>
        </div>
        <div
          className="w-full min-w-full  pt-4 px-4 transition-transform ease-in-out duration-[1s]"
          style={{ transform: `translateX(-${100 * year}%)` }}
        >
          <h1 className="text-[78px] mb-[52px] max-[550px]:text-[48px] font-semibold">
            2021
          </h1>
          <p className="text-[28px] max-[550px]:text-[20px] before:inline-block before:content-[''] before:mx-2 before:mb-1 max-[550px]:before:mb-0 before:rounded-full before:bg-yellow before:h-3 before:w-3">
            Raises revolving credit from Samunnati
          </p>
          <p className="text-[28px] max-[550px]:text-[20px] before:inline-block before:content-[''] before:mx-2 before:mb-1 max-[550px]:before:mb-0 before:rounded-full before:bg-yellow before:h-3 before:w-3">
            6,000 head strong farmer network spanning 30,000 acres becomes a
            reality
          </p>
        </div>
      </div>
    </div>
  )
}
