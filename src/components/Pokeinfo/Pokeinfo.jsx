import css from "./Pokeinfo.module.css";

const Pokeinfo = () => {
    return (
        <>
            <h1>Ditto</h1>
            <img scr="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="" />
            <div className={css.abilities}>
                <div className={css.group}>
                    <h2>blaze</h2>
                </div>
                <div className={css.group}>
                    <h2>solar-power</h2>
                </div>
            </div>
            <div className={css.base_stat}>
                    <h3>Hp:30</h3>
                <h3>attack: 52</h3>
                <h3>defense: 43</h3>
               
            </div>
           
        </>
    )
}

export default Pokeinfo;