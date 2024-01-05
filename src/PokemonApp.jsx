import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
    const { isLoading, pokemons = [], page } = useSelector(state => state.pokemons);
    const dispatch = useDispatch();

    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);

    useEffect(() => {
        if (isLoading) {
            setShowLoader(true);
            setTimeout(() => {
                setShowLoader(false);
            }, 1500);
        }
    }, [isLoading]);

    return (
        <div className="container">
            <h1 className="text-center my-4">Pokemon App</h1>
            {
                showLoader ? (
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <span className="loader"></span>
                    </div>
                ) :
                    (
                        <div>
                            <ul className="list-group">
                                {
                                    pokemons.map(pokemon => (
                                        <li key={pokemon.name} className="list-group-item">
                                            {/* <img src={pokemon.sprites.front_default} alt={pokemon.name} className="img-thumbnail" /> */}
                                            <h3 className="my-2">{pokemon.name}</h3>
                                        </li>
                                    ))
                                }
                            </ul >
                            <button
                                className="btn btn-primary mt-4"
                                onClick={() => {
                                    dispatch(getPokemons(page));
                                }}
                                disabled={isLoading}
                            >
                                Next
                            </button>
                        </div>
                    )
            }
        </div>
    );
};