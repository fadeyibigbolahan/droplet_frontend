import styles from "../style";
import { Navbar, Hero, Footer } from "../components";
import WalletGrid from "../components/Wallet";
import HowItWorks from "../components/HowItWorks";

const HomePage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <HowItWorks />
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <h1 className="text-white text-2xl font-bold text-center mt-10 mb-5">
            Choose Your Wallet
          </h1>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <p className="text-white text-lg text-center mb-10">
            Select a wallet to access your cryptocurrency securely.
          </p>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <WalletGrid />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default HomePage;
