import {useState} from "react";

// Components
import Header from "../../components/Header";
import Products from "../../components/modules/Products";
// api
import api from "../../services/api_v1";
// CSS
import styles from './Home.module.scss';

function Home() {
    return (
        <div>
            <Header />
        </div>
    );
}

export default Home;
