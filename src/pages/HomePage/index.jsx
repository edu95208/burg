import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../components/Service/api";
import { toast } from "react-toastify";




export const HomePage = () => {
   const localProducts = localStorage.getItem("@Products");

   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(
      localProducts ? JSON.parse(localProducts) : []
   );
   const [contCard, setContCard] = useState(0);



   const addCart = (cartToAdd) => {
      const hasCart = cartList.some(
         (cart) => cart.id === cartToAdd.id
      );

      if (!hasCart) {
         setContCard((contCard) => contCard + 1);
         setCartList([...cartList, cartToAdd]);
      } else {
         toast.error("Produto já existente no carrinho!");
      }

   }

   const removeProduct = (product) => {
      setContCard((contCard) => contCard - 1)
      const newCart = cartList.filter((add) => add.id !== product.id);
      setCartList(newCart);
   }

   const removeList = () => {
      setContCard(0)
      setCartList([]);
   }

   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   useEffect(() => {
      const getProducts = async () => {
         try {

            const { data } = await api.get("products");

            setProductList(data);
         } catch (error) {
         } finally {

         }
      };
      getProducts();
   }, []);

   useEffect(() => {
      localStorage.setItem("@Products", JSON.stringify(cartList))
   }, [cartList]);

   const [isModalVisible, setIsModalVisible] = useState(false);



   return (
      <>
         <Header setIsModalVisible={setIsModalVisible} cartList={cartList} />
         <main>
            <ProductList productList={productList} addCart={addCart} />
            {isModalVisible ?
               <CartModal cartList={cartList}
                  removeProduct={removeProduct}
                  setIsModalVisible={setIsModalVisible}
                  removeList={removeList}
               />
               : null
            }

         </main>
      </>
   );
};
