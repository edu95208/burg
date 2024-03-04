import { MdDelete } from "react-icons/md";
import styles from "./styles.module.scss"


export const CartItemCard = ({ product, removeProduct }) => {
   return (
      <li className={` cartModal ${styles.cardModal}`}>
         <div>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <span>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
         </div>
         <button onClick={() => removeProduct(product)} aria-label="delete" title="Remover item">
            <MdDelete color="grey" size={21} />
         </button>
      </li>
   );
};
