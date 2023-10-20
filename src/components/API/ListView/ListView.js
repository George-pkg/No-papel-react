import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import api from "../api";
import styles from "./ListView.module.css"


export default function ListView() {
    const [List, setList] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      api.get(`${id}.json`)
        .then((res) => setList(res.data));
    }, [id]);
  
    return (
      <div className={styles.ListView}>
        <ul>
          {List.map((item, index) => (
            <li key={index}>
                <div>
                    <img src={item.image} alt="" />
                    <h2>{item.title}</h2>
                </div>
                <hr/>
            </li>
          ))}
        </ul>
      </div>
    );
  }