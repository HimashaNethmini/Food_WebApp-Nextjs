import Image from 'next/image';
import css from '../styles/Header.module.css';
import Logo from '../assets/Logo.png';
import { BsCart4 } from "react-icons/bs";

export default function Header (){
    return(
        <div className={css.header}>
            
            {/* logo */}
            <div className={css.logo}>
                <Image src={Logo} alt="" width={50} height={50} />
                <span>Foodie Go</span>
            </div>

            {/*nav bar */}
            <ul className={css.menu}>
                <li>Home</li>
                <li>Menu</li>
                <li>Contact</li>
            </ul>

            {/*cart */}
            <div className={css.rightSide}>
                <div className={css.cart}>
                    <BsCart4 size={50} color='#586979'/>

                    <div className={css.badge}>
                        1
                    </div>
                </div>
            </div>

        </div>
    )
  
}


