import styles from './BoxHome.module.css'

export default function BoxHome({
    title = '',
    image,
    image_alt = 'Foto não carregada',
    
 }) {

    return (
        <div className={styles.BoxHome}>
            <h3>{title}</h3>
            <img src={image} alt={image_alt} />
            <button type='button'>OPEN</button>
        </div>
    );
} 