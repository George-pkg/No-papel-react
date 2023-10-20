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
                        <Link to={'/HomePage'}>Home</Link>
                    </li>
                    <li>
                        <Link to={''}>API</Link>
                    </li>
                    <li>
                        <Link to={'/Documents'}>Documents</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}