import Header from "./Header";
import Footer from './Footer';
import Body from "./Body";

import styles from "../styles/Layout.module.css";

export default function Layout({children}) {
    return (  
        <div className={styles.layout}>
            <Header />
            <Body>{ children }</Body>
            <Footer />
        </div>
        
    )
}