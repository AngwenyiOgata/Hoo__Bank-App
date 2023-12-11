import { Navbar, Billing, CardDeal, Bussiness, Clients, CTA, Stats, Footer, Testimonials, Hero} from './components'
import styles from './style';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <section className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </section>
    <section className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </section>

      <main className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <section className={`${styles.boxWidth}`}>
          <Stats />
          <Bussiness />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </section>
      </main>
  </div>
)

export default App