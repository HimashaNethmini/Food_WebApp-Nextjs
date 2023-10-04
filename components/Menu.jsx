import Image from "next/image";
import css from "../styles/Menu.module.css";
import { urlFor } from "../library/client";

export default function Menu({ pizzas }) {
  
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu That Always</span>
        <span>Make You Fall in Love</span>
      </div>

      {/* mapping the array */}
      {pizzas.map((pizza,id)=> {

        const src = urlFor(pizza.image).url()
        return(
          <div className={css.pizza} key={id}>

            <div className={css.ImageWrapper}>
              <Image loader= {()=> src} src={src} alt="" 
              objectFit="cover"
              layout="fill" />
            </div>

          </div>
        )
      })}

    </div>
  );
}
