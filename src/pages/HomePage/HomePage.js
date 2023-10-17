import Header from "../../components/layout/Header"
import BoxHome from "../../components/BoxHome/BoxHome";
import styles from "./HomePage.module.css"

import navioNB from '../../assets/img/navio.png'
import oil from '../../assets/img/oil_1280.png'
import factory from '../../assets/img/factory.png'
import Atomic from '../../assets/img/atomic-power-plant_1280.png';

export default function HomePage() {

    return (
        <>
          <Header />

          <div className={styles.container}>
            <BoxHome title='Oil Ship - F01 NB3002' image={navioNB} image_alt="Oil Ship - F01 NB3002"/>
            <BoxHome title='Factory - Robson & Robson' image={factory} image_alt="Factory - Robson & Robson"/>
          </div>

          <div className={styles.container}>
            <BoxHome title='Oil Area' image={oil} image_alt="Oil Area"/>
            <BoxHome title='Atomic Power Plant' image={Atomic} image_alt="Atomic Power Plant"/>
          </div>
        </>
    );
};
