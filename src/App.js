import React from "react";
import "./styles.scss";
import PokeList from './components/PokeList';
import SelectedPoke from './components/SelectedPoke';
import usePokeState from "./hooks/usePokeState";




function App() {

    const [selectedPokemon, handlePoke, pokemen] = usePokeState([], {})


    return (
        <div className="App">
            <SelectedPoke selectedPokemon={selectedPokemon} />
            <PokeList handlePoke={handlePoke} pokemen={pokemen} />
        </div>
    );
}

export default App;
