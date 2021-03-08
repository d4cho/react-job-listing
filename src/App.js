import styles from "./App.module.css";
import headerImg from "./assets/images/bg-header-desktop.svg";
import Filter from "./components/filter/Filter";
import CardsContainer from "./components/cardsContainer/CardsContainer";

function App() {
    return (
        <div className={styles.container}>
            <div className={styles.header} />
            <div className={styles.background}>
                <Filter />
                <CardsContainer />
            </div>
        </div>
    );
}

export default App;
