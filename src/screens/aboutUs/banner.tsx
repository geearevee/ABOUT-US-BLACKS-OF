import { useEffect } from 'react'
import SlidingWords from './slidingWords'
import ringSvg from '../../assets/aboutus/Ellipse 101.svg'
import herobg from '../../assets/aboutus/hero_bg.png'
export default function Banner() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div
      className="h-max min-h-screen bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* section title */}
      {/* <h1 className="pt-24">Banner</h1> */}
      <div className="w-[min(90%,1440px)] mx-auto text-white">
        <div className=" w-[740px] max-[860px]:w-[700px] max-[560px]:w-[100%] pt-[229px] max-[1380px]:pt-[180px]">
          <div className="text-[42px] max-[860px]:text-[34px] max-[860px]:w-[80%] max-[530px]:w-[90%] max-[426px]:w-[100%]  font-[600] relative">
            Between creating and piloting drones and rising upto the challenges
            with them, we discovered <SlidingWords />
            <img
              className="absolute right-[50px] bottom-[-180px] max-[860px]:w-[90%] max-[860px]:bottom-[-150px] max-[560px]:w-[100%] max-[560px]:left-[0px] max-[560px]:origin-left max-[560px]:scale-[1.1] max-[560px]:bottom-[-90px] max-[426px]:scale-[1]"
              src={ringSvg}
              alt=""
            />
          </div>
        </div>
        <div className="w-[425px] max-[860px]:w-[90%] text-[24px] max-[1380px]:text-[20px] font-[400] leading-[36px] pt-24 max-[1380px]:pt-20 ml-auto mr-0 max-[1240px]:ml-0 max-[1240px]:mr-auto max-[1240px]:pt-[200px] pb-28">
          <p className="">
            we optimize endeavouring globalize undivided impact in the agri
            value chain... we increased crop production, sustainable practices,
            and food security.
          </p>
        </div>
      </div>
    </div>
  )
}
