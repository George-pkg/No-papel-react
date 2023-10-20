import Header from "../../components/layout/Header"
import BoxHome from "../../components/BoxHome/BoxHome";
import styles from "./HomePage.module.css"
import { useEffect } from "react";

import axios from 'axios';

const instace = axios.create({baseURL: 'http://localhost:5000/json/'})

export default function HomePage() {

  useEffect(() => {
    instace.get('test.json').then((res) => {
      console.log(res.data)
    })
  }, [])

    return (
        <>
          <Header />

          <div className={styles.container}>
            <BoxHome title='Oil Ship - F01 NB3002' image="http://localhost:5000/navio.png" image_alt="Oil Ship - F01 NB3002"/>
            <BoxHome title='Factory - Robson & Robson' image="http://localhost:5000/factory.png" image_alt="Factory - Robson & Robson"/>
          </div>

          <div className={styles.container}>
            <BoxHome title='Oil Area' image="http://localhost:5000/oil_1280.png" image_alt="Oil Area"/>
            <BoxHome title='Atomic Power Plant' image="http://localhost:5000/atomic-power-plant_1280.png" image_alt="Atomic Power Plant"/>
          </div>
        </>
    );
};
