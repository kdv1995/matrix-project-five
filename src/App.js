import styles from "App.module.scss";
import CreateMatrix from "components/Matrix/CreateMatrix";

const App = () => {
  return (
    <div className={styles.App}>
      <div className={styles.Container}>
        <main>
          <CreateMatrix />
        </main>
      </div>
    </div>
  );
};

export default App;
