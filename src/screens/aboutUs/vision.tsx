import { useState, useEffect, useRef } from 'react'
import VisionImage from '../../assets/aboutus/visionbg.jpg'
import intentImage from '../../assets/aboutus/visionelementwhite.svg'
export default function Vision() {
  const [visionActive, setVisionActive] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 0.6,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisionActive(false)
        }
      })
    }, options)

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  return (
    <div
      ref={sectionRef}
      className="pt-36  relative before:content-[''] bg-cover bg-no-repeat max-[1145px]:bg-[length:100%_2000px] before:w-full before:h-full before:inset-0 before:opacity-50 before:absolute before:bg-black/50"
      style={{
        backgroundImage: `url(${VisionImage})`,
      }}
    >
      <div className="w-[min(90%,1440px)] mx-auto flex gap-64 max-[1145px]:gap-4 max-[1145px]:flex-col">
        <div className="text-white  flex-[0_0_max-content] self-start  flex">
          <div className=" order-1 h-full">
            <p
              onClick={() => setVisionActive(true)}
              className={`relative z-20 text-[48px] font-[600] border-b-2  border-white border-solid cursor-pointer select-none transition-all ease-in-out duration-300 ${
                visionActive ? 'text-white' : 'text-white'
              }`}
            >
              Vision
            </p>
            <p
              onClick={() => setVisionActive(false)}
              className={`text-[48px] relative z-20 font-[600] border-t-2  border-white border-solid cursor-pointer select-none transition-all ease-in-out duration-300 ${
                !visionActive ? 'text-white' : 'text-white'
              }`}
            >
              Mission
            </p>
          </div>
          <div className={`w-10 transition-all relative duration-300 `}>
            <img
              src={intentImage}
              className={`absolute z-40 pb-4 pt-4 block  transition-all ease-in-out duration-300 ${
                visionActive ? 'translate-y-3' : 'translate-y-20'
              }`}
              alt="intent"
            />
          </div>
        </div>
        <div className={` text-white h-[650px] overflow-hidden `}>
          <p
            className={`text-[28px] h-full flex items-center max-[500px]:text-xl  font-[600] relative z-10 transition-all ease-in-out duration-300 ${
              !visionActive ? 'translate-y-[-100%] opacity-0' : 'translate-y-0 '
            }`}
          >
            Revitalizing Indian agriculture by enabling farmers to grow
            profitably for a sustainable food supply chain with the use of
            technology
          </p>
          <div
            className={`text-[28px] max-[500px]:text-xl font-[600] h-full relative z-10 gap-4 flex flex-col  transition-all  ease-in-out duration-300 ${
              visionActive ? 'translate-y-0 opacity-0' : 'translate-y-[-100%]'
            }`}
          >
            <p>
              To empower the agricultural community through our end-to-end
              decision support system and drone technology.
            </p>
            <p className=" relative z-10">
              We are committed to transform the traditional farming practices
              with technological integration to provide precise, actionable
              insights that enhance crop health, optimize resource utilization,
              and promote sustainable agriculture. Through our innovative
              solutions, we aim to bridge the technological divide, ensuring
              that the farmers are well-equipped with the knowledge and tools
              they need to thrive in a rapidly changing world, thereby securing
              food sustainability, for the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
