import React from "react";
import {useHistory} from "react-router";

// CSS
import styles from './Products.module.scss';

const Products = ({ items }) => {
    let history = useHistory();
    const getProductDetailHandler = (id) => {
        history.push(`/items/${id}`)
    }
    return (
        <div className={styles.container}>
            {items.map(item => {
                return (
                    <div key={item.id}
                         onClick={() => getProductDetailHandler(item.id)}
                         className={styles.product}>
                        <figure>
                            <img src={item.picture} />
                        </figure>
                        <div className={styles.details}>
                            <h3>
                                <span>{item.price.amount}</span>
                                <span className={styles.address}>{item.address}</span>
                            </h3>
                            <h4>{item.title}</h4>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Products;