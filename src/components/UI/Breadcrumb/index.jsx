import React from "react";

import {uniqueId} from 'lodash';

// CSS
import styles from './Bredcrumb.module.scss';

const Breadcrumb = ({ categories }) => {
    return (
        <ul className={styles.container}>
            {categories.map(bread => {
                return (
                    <li key={uniqueId()}>{bread}</li>
                )
            })}
        </ul>
    );
};

export default Breadcrumb;