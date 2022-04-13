import { useState, useEffect } from 'react';
import { getSelectedPokemon, getPokemen } from './../services/PokeServices'

const usePokeState = (initialPokemen, initialSelectedPokemon) => {
    const [pokemen, setPokemen] = useState(initialPokemen);
    const [selectedPokemon, setSelectedPokemon] = useState(initialSelectedPokemon);

    useEffect(() => {
        setPokemen(getPokemen());
    }, []);

    const handlePoke = (id) => {
        getSelectedPokemon(id)
            .then((data) => {
                setSelectedPokemon(data);
            })
            .catch(err => {
                console.log(err)
            })
    };

    return ([selectedPokemon, handlePoke, pokemen])
}

export default usePokeState;