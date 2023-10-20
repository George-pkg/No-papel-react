import Header from "../../components/layout/Header";
import styles from "./Documents.module.css"
import ListBox from "../../components/API/ListBox/ListBox";



export default function Documents() {
    return (
      <>
        <Header />
        
        <ListBox PTget="twoBox.json"/>
      </> 
    );
}