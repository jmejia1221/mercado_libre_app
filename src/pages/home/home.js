// Components
import Header from "../../components/Header";

// CSS
import styles from './Home.module.scss';

function Home() {
    return (
        <div>
            <Header />
            <h1 className={styles.title}>Nunca dejes de buscar...</h1>
        </div>
    );
}

export default Home;
