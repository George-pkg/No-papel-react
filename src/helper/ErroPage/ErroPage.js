import styles from './error.module.css'

export default function ErroPage() {
    return (
        <>
            <div className={styles.erroPage}>
                <h1>ERROR 404!!</h1>
                <br/>
                <h2>Page no found</h2>
            </div>
        </>
    );
    
}