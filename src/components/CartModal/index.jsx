import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "./style.module.scss";

export const CartModal = ({ cartList, removeProduct, setIsModalVisible, removeList, product }) => {

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog" className={style.everlayBox}>
         <div className={`title_Modal ${style.modalBox}`}>
            <div className={style.div__fist}>
               <h2>Carrinho de compras</h2>
               <button
                  onClick={() => setIsModalVisible(false)}
                  className={style.closebutton}
                  aria-label="close"
                  title="Fechar"
               >
                  <MdClose color="white" size={21} />
               </button>
            </div>
            <div className={style.divCard}>
               {cartList.length > 0 ? (

                  <ul className={style.over}>
                     {
                        cartList.map((product) => (
                           <CartItemCard key={product.id}
                              product={product}
                              removeProduct={removeProduct} />
                        ))
                     }
                  </ul>
               ) : 

               <p className={style.div_P}>Carrinho Vazio!</p>

            }

            </div>
            <div className={style.div}>
               <div className={`title_total ${style.price}`}>
                  <span>Total</span>
                  <span className="price">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button className="btn_rmv" onClick={() => removeList()}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
