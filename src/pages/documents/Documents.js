import Header from "../../components/layout/Header";
import ListBox from "../../components/API/ListBox/ListBox";



export default function Documents() {
    return (
      <>
        <Header />
        
        <ListBox PTget="twoBox.json"/>
      </> 
    );
}