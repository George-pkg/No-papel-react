import { Link } from 'react-router-dom';
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.HeaderLayout}>
            <div className={styles.logoHeader}>
                <Link to="/HomePage"><h2>No Papel</h2></Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">API</a>
                    </li>
                    <li>
                        <a href="#">Documets</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}