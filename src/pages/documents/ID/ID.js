import { useEffect, useState } from 'react';
import Header from '../../../components/layout/Header';
import styles from  './ID.module.css'
import api from '../../../components/API/api';

export default function ID() {

    const [listP, setlistP] = useState([]);
    useEffect(() => {
        api.get('test.json')
        .then((res) => {
            setlistP(res.data)
        }) 
    }, [])
    /*
    - modos de tranformar
        const itensList = Object.keys(listP).map(chave => listP[chave])
        const itensList = [Object.]
    */
    const itensList = Object.values(listP)

    console.log(itensList)
    // console.log(itensList)

    // console.log(listP.length)
    return (
        <>
          <Header />
          <div className={styles.ID}>
            <h2>Lista a seguir :</h2>
            {/* <h1>{itensList[1]}</h1> */}
            <ul>
                {listP.map((item, index) => (
                <li key={index}>
                    <strong>Usuário:</strong> {item.user}, <strong>Senha:</strong> {item.password}
                </li>
                ))}
            </ul>
          </div>
        </>
    );
}