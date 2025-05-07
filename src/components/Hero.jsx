import styles from "../style";
import { discount, robot } from "../assets";
import robott from "../assets/robott.png";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col md:px-16 py-5`}>
      <div className={`flex-1 ${styles.flexStart} flex-col px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins text-center md:text-start font-semibold md:text-[40px] text-[20px] text-white">
            Blockchain Rectification
          </h1>
        </div>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5 text-center md:text-start`}
        >
          Every digital artwork on Upside is authentic and truly unique.
          Blockchain technology makes this new aproch to digital ownership
          possible. Open and decentralized protocol for syncing various Wallets
          issues on Secure Server. This is not an app but a protocol that
          establishes a remote resolution between all noncustodial
          wallet/Blockchains. It is an online server which gets you across to
          every wallet/blockchain/protocol representative to enable effective
          complain and rectification of issues. You will be on a chat with an
          Artificial Intelligence, and a customer support agent will join the
          conversation to assist you. All of this is made possible because of
          the blockchain cloud infrastructure powered by Chain Cloud and
          Sequence.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robott}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
