import Header from "../../components/layout/Header";
import BoxHome from "../../components/BoxHome/BoxHome";
import styles from "./Documents.module.css"


export default function Documents() {
    return (
      <>
        <Header />

        <div className={styles.container}>
          <BoxHome title='Oil Ship - F01 NB3002' image={'navio.png'} image_alt="Oil Ship - F01 NB3002" route="/Documents/OilShip-F01_NB3002"/>
          <BoxHome title='Factory - Robson & Robson' image="factory.png" image_alt="Factory - Robson & Robson" route="Factory-Robson&Robson"/>
        </div>

        <div className={styles.container}>
          <BoxHome title='Oil Area' image="oil_1280.png" image_alt="Oil Area" route="/Documents/OilArea"/>
          <BoxHome title='Atomic Power Plant' image="atomic-power-plant_1280.png" image_alt="Atomic Power Plant" route="AtomicPowerPlant"/>
        </div>
      </> 
    );
}