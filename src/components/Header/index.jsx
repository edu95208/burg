import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss"

export const Header = ({ setIsModalVisible, cartList }) => {


   return (
      <header className={`headerMedia ${styles.header}`}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>

            <button onClick={() => setIsModalVisible(true)}>
               <MdShoppingCart size={21} color="grey" />
               <span >{cartList.length}</span>
            </button>
         </div>
      </header>
   );
};
