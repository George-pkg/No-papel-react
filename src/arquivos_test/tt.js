import { useState, useEffect } from "react";
import axios from "axios";
import styles from './Cotação.module.css'


const AxiosInstance = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/last/'
})

export default function Cotação() {


    // requisição
    const [Dolar, setDolar] = useState(Number([]));
    useEffect(() => {
    AxiosInstance
            .get('USD-BRL')
            .then((res) => {
                // console.log(res.data.USDBRL.high);
                setDolar(res.data.USDBRL.high);
            })
            .catch((err) => console.log(err));
    }, []);

    const [Euro, setEuro] = useState([]);
    useEffect(() => {
    AxiosInstance
            .get('EUR-BRL')
            .then((res) => {
                // console.log(res.data.EURBRL.high);
                setEuro(res.data.EURBRL.high);
            })
            .catch((err) => console.log(err));
    }, []);

    const [Biticoin, setBiticoin] = useState([]);
    useEffect(() => {
    AxiosInstance
            .get('BTC-BRL')
            .then((res) => {
                // console.log(res.data.BTCBRL.high);
                setBiticoin(res.data.BTCBRL.high);
            })
            .catch((err) => console.log(err));
    }, []);
    
    // pegar dados do select
    const [Sec, setSec] = useState();
    const [Num , setNum] = useState();
    
    const Consult = (e) => {
        e.preventDefault()
        alert(typeof(Dolar))
    };

    var amostra = ''
    if(Sec === 'Dolar') {
        amostra = Dolar
        // amostra = (`O resultado é ` + Number(Num * Sec))
    } else if(Sec === 'Euro') {
        amostra = Euro
    } else if(Sec === 'Biticoin') {
        amostra = Biticoin
    }

    
      
    
    return (
        <form onSubmit={Consult} className={styles.form_res}>
            <label>Trasforme Real em :</label>
            <input type="number" placeholder="Valor para Tranformar" onChange={ e => setNum(e.target.valueAsNumber)}/>
            <select name="Moeda" onChange={ e => setSec(e.target.value)}>
                <option value="" >Selecione Moeda</option>
                <option value="Dolar" key="">Dolar</option>
                <option value="Euro" key="">Euro</option>
                <option value="Biticoin" key="">Biticoin</option>
            </select>
            <button type="submit">clicar</button>
            <br/>
            {amostra}
        </form>
    );
};