import styles from "./styles.module.scss";

export const ProductCard = ({ product, addCart }) => {

    return (
        <li className={styles.div__Card}>
            <div className="titleCard ">
                <figcaption>
                    <img src={product.img} alt={product.name} />
                </figcaption>


                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <span className="price_text" >{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                <button onClick={() => addCart(product)} className="buttonAdc">Adicionar</button>


            </div>
        </li>
    )
}