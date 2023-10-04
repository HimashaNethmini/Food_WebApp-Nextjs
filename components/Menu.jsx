import Image from "next/image";
import css from "../styles/Menu.module.css";

export default function Menu({ pizzas }) {
  console.log(pizzas);
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu That Always</span>
        <span>Make You Fall in Love</span>
      </div>

      {/* mapping the array */}
      {pizzas.map((pizza,id)=> {
        return(
          <div className={css.pizza} key={id}>

            <div className={css.ImageWrapper}>
              <Image src={src} alt="" />
            </div>

          </div>
        )
      })}

    </div>
  );
}
