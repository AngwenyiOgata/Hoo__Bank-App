import { card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> in afew easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus repellat neque eius numquam nobis? Quia. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <Button  styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className=" w-[100%] h-[100%] " />
      </div>
    </section>
)

export default CardDeal