import { arrowUp } from "../assets"
import styles from "../style"


const GetStarted = () => (
  <div className={`${styles.flexCenter} h-[140px] w-[140px]  rounded-full bg-blue-gradient p-[4px] cursor-pointer`}>

    <div className={`${styles.flexCenter}
    w-[100%] h-[100%] rounded-full flex-col  bg-primary `}>

      <div className={`${styles.flexStart} flex-row`}>
        <p className=" font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow up" className=" w-[23px] h-[23px] object-contain" />
      </div>

      <p className=" font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>

    </div>
  </div>
)
export default GetStarted