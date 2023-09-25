import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.HeaderLayout}>
            <div className={styles.logoHeader}>
                <h2>No Papel</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}