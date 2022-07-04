import styles from './App.module.css';
import Test from './Test';
import { Title } from  './Components';
import Bootsrap from './Bootsrap';

// Tailwind
import './tailwind.css';
import Tailwind from './tailwind';

function App() { 
  return (
    <div className={styles.App}>
      {process.env.NODE_ENV === "development" && (
          <Title theme="dark">Hello World from React!</Title>
      )}
      <p>{process.env.REACT_APP_API_URL}</p>
      <Test />
      <Bootsrap />
      <Tailwind />
    </div>
  );
}

export default App;