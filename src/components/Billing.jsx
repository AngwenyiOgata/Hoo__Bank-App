import { apple, bill, google } from "../assets"
import styles, {layout} from "../style"

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      <div className="absolute z-[0] bottom-0 -left-1/2 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily controll your <br className="sm:block hidden"/> billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[500px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum numquam dicta eligendi quas, mollitia deleniti libero quaerat animi consequatur molestiae dolore culpa, sint nesciunt vitae.</p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
        <img src={google} alt="google play" className="w-[128px] h-[42px] object-contain cursor-pointer"/>
      </div>
    </div>
  </section>
)

export default Billing