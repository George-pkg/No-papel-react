import { Link } from 'react-router-dom';
import styles from './BoxHome.module.css'

export default function BoxHome({
    title = "",
    image = "",
    image_alt = 'Foto não carregada',
    route = "",

    
 }) {
    return (        
        <div className={styles.BoxHome}>
            <h3>{title}</h3>
            <img src={image} alt={image_alt} />
            <button type='button'><Link to={route}>OPEN</Link></button>
        </div>
    );
} 