import css from "../styles/Services.module.css";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import Image from "next/image";

export default function Services() {
  return (
    <>
      <div className={css.heading}>
        <span>WHAT WE SERVE</span>
        <span>Your Favourite Food</span>
        <span>Delivery Partner</span>
      </div>

      <div className={css.services}>
        <div className={css.features}>
          <Image src={s1} alt="" object-fit="cover" layout="intrinsic" />
          <span>Easy to Order</span>
          <span>You are only few steps away in ordering</span>
        </div>

        <div className={css.features}>
          <Image src={s2} alt="" object-fit="cover" layout="intrinsic" />
          <span>Easy to Order</span>
          <span>Delivery that is always on time even faster than Dominos</span>
        </div>

        <div className={css.features}>
          <Image src={s3} alt="" object-fit="cover" layout="intrinsic" />
          <span>Easy to Order</span>
          <span>Not only fast for us, quality is also number one</span>
        </div>
      </div>
    </>
  );
}
