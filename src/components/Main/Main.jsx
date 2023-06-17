import { useState, useEffect } from "react";
import axios from 'axios';
import Card from "components/Card";
import Pokeinfo from "components/Pokeinfo";
import css from './Main.module.css';


const Main = () => {
const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

    useEffect(() => {
  
   

  }, []);


    return (
        <>
            <div className={css.container}>
            <div className={css.left_container}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                   
                    <div className={css.btn}>
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
            </div>
                <div className={css.right_container}>
                    <Pokeinfo/>

            </div>

            </div>
        </>
    )
}

export default Main;