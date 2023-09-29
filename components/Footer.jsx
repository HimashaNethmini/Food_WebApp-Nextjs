import css from "../styles/Footer.module.css"
import {BsFacebook} from "react-icons/bs"
import {FaFacebookMessenger} from "react-icons/fa"
import  {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"

export default function Footer (){
    return(
        <div className={css.container} >
            <span>ALL RIGHTS RESERVED</span>
            <div className={css.social}>
                <BsFacebook size={50} color="#00008B" />
                <FaFacebookMessenger size={50} color="#04449c" />
                <BsGithub size={50} />
                <BsInstagram size={50} />
                <BsWhatsapp size={50} color="#25D366"/>

            </div>
        </div>
    )
  
}
