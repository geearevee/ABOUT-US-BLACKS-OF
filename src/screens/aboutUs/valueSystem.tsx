import intentImage from '../../assets/aboutus/visionelementwhite.svg'
import empathyImage from '../../assets/aboutus/Unshakable empathy.svg'
import differencesImage from '../../assets/aboutus/Celebrating differences.svg'
import unlearningImage from '../../assets/aboutus/Unlearning to learn more.svg'

export default function ValueSystem() {
  return (
    <div className="bg-green py-24">
      <div className="w-[min(90%,1440px)] pb-20 pt-12 mx-auto text-white">
        <div className="flex  gap-4 items-center ">
          <img src={intentImage} alt="intent" />
          <p className="text-white font-semibold text-lg">Our Value System</p>
          <div className=" block border-t-2 border-white/30  border-solid self-center rounded-md flex-[1_1_auto]"></div>
        </div>
        <div className="flex justify-between mt-12 max-[1000px]:flex-wrap gap-2">
          <h2 className="flex-[1_1_50%] text-[52px] mt-0 ">
            Turning inward for impact outward
          </h2>
          <p className="flex-[1_1_50%] pt-4  text-[20px]">
            To ensure an undefeated journey to our vision, we turned to our
            morality. We found our core values and nurtured them.
          </p>
        </div>
        <div className="flex flex-nowrap justify-between mt-20 max-[1000px]:flex-wrap max-[1000px]:gap-10">
          <div className="flex-[1_1_30%] max-[1000px]:flex-[1_1_100%] pr-4">
            <img src={empathyImage} alt="" />
            <h2 className="text-[34px] mt-6 mb-3">Unshakable empathy</h2>
            <p className="text-[20px]">
              Because a walk in the stakeholders' shoes unlocks perspectives. It
              underpins effective problem-solving to amplify impact in the
              entire crop production and management cycle and elevate
              relationships above transactional bounds
            </p>
          </div>
          <div className="flex-[1_1_30%] max-[1000px]:flex-[1_1_100%] px-4 border-x-1 max-[1000px]:border-none border-white/30 border-solid">
            <img src={differencesImage} alt="" />
            <h2 className="text-[34px] mt-6 mb-3">Celebrating differences</h2>
            <p className="text-[20px]">
              Because minuscule variations characterise discoveries that
              transform into giant strides. Solving different problems, small
              and big, accelerates the learning curve about agricultural crops
              and the value chain.
            </p>
          </div>
          <div className="flex-[1_1_30%] max-[1000px]:flex-[1_1_100%] pl-4">
            <img src={unlearningImage} alt="" />
            <h2 className="text-[34px] mt-6 mb-3">Unlearning to learn more</h2>
            <p className="text-[20px]">
              Because a harmony between receptiveness and adaptability boosts
              evolution amidst ever-changing agricultural products and crops
              backdrop. Unlearning and keeping the intent to relearn the "what's
              new?" enriches value addition.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
