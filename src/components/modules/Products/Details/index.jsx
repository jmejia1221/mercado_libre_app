import React from "react";
// Component
import Button from "../../../UI/Button";

// CSS
import styles from './Details.module.scss';

const ProductDetails = ({ product }) => {
    return (
        <div className={styles.container}>
            <section className={styles.itemContent}>
                <figure>
                    <img src={product.item.picture} />
                </figure>
                <aside>
                    <div className={styles.condition}>
                        <span>{product.item.condition} - </span>
                        <span>{product.item.sold_quantity} Vendidos</span>
                    </div>
                    <div className={styles.actions}>
                        <h2>{product.item.title}</h2>
                        <h3>{product.item.price.amount}</h3>
                        <div className={styles.buyButton}>
                            <Button>Comprar</Button>
                        </div>
                    </div>
                </aside>
            </section>
            <section className={styles.itemDescription}>
                <h3 className={styles.title}>Descripción del producto</h3>
                <p className={styles.productDescription}>{product.item.description}</p>
            </section>
        </div>
    );
};

export default ProductDetails;