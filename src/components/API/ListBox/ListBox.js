import { useEffect, useState } from 'react';
import styles from  './ListBox.module.css'
import api from '../api';
import BoxHome from '../../BoxHome/BoxHome';

export default function ListBox({PTget = ''}) {

    const [listP, setlistP] = useState([]);
    useEffect(() => {
        api.get(PTget)
        .then((res) => {
            setlistP(res.data)
        }) 
    }, [])
    /*
    - modos de tranformar
        const itensList = Object.keys(listP).map(chave => listP[chave])
        const itensList = [Object.]
    */

    // console.log(itensList)

    // console.log(listP.length)
    return (
        <>
          <div className={styles.ID}>
            {/* <h1>{itensList[1]}</h1> */}
            <div className={styles.IDdiv}>
                {listP.map((item, index) => (
                    <div className={styles.IDhome} key={item.box}>
                        <BoxHome title={item.title} image={item.image} route={item.route}/>
                    </div>
                ))}
            </div>
          </div>
        </>
    );
}

/* 
exemplo de lista altomatica:
    <li key={index}>
        <strong>Usuário:</strong> {item.title}, <strong>Senha:</strong> {item.box}
    </li>

*/