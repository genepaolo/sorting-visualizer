import Navbar from "./components/Navbar"
import SortingVisualizer from './components/SortingVisualizer';
import Footer from './components/Footer';
import {useSelector, useDispatch} from 'react-redux';
import styles from "./sass/abstract/_variables.scss";

function App() {
  const theme = useSelector(state=>state.theme);
  const themes ={
    "LIGHT" : {
      background: `linear-gradient(to top right, ${styles.themeLightBg1}, ${styles.themeLightBg2}`,
      color: "black"
    },
    "DARK" : {
      background: `linear-gradient(to bottom right, ${styles.themeDarkBg1}, ${styles.themeDarkBg2}`,
      color: "white"
    },
    "CYBERPUNK" : {
      background: `linear-gradient(to top left, ${styles.themeCPBg1} 0% , ${styles.themeCPBg1} 50%, ${styles.themeCPBg2} 100% `,
      color: "white"
    }
  }
  return (
      <div className="App container-app" style={themes[theme]}>
        <Navbar />
        <SortingVisualizer />
        <Footer />
      </div>
    
  );
}

export default App;
