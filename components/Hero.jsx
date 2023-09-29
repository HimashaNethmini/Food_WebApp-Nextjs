import Image from "next/image";
import css from "../styles/Hero.module.css";
import Cherry from "../assets/Cherry.png";
import HeroImage from "../assets/HeroImage.png";

export default function Hero() {
  return (
    <div className={css.container}>
      {/*left side -texts */}
      <div className={css.left}>
        <div className={css.cherryDiv}>
          <span>More than Faster</span>
          <Image src={Cherry} alt="" width={50} height={50} />
        </div>

        <div className={css.heroText}>
          <span>The Fastest </span>
          <span style={{ color: "var(--themeRed)" }}> Pizza </span>
          <span> Delivery </span>
          <span style={{ color: "var(--themeRed)" }}>On Your Table</span>
        </div>

        <div className={css.miniText}>
        Our mission: Satisfying your cravings with mouthwatering dishes, delivered fast and free!
        </div>

        <button className="btn"> Get Started</button>
      </div>

      {/*right side -images */}
      <div className={css.right}>

        <div className={css.imageContainer}>
            <Image src={HeroImage} alt="" layout="intrinsic" />
        </div>
      </div>
    </div>
  );
}
