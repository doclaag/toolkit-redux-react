import { pokemonApi } from '../../../api';
import { setPokemons, startLoadingPokemons } from './';

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {

        const state = getState();
        const { isLoading } = state.pokemons;

        if (isLoading) {
            return;
        }

        dispatch(startLoadingPokemons());

        // const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page * 10}`);
        // const data = await response.json();

        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

        // console.log(data);

        dispatch(setPokemons({
            page: page + 1,
            pokemons: data.results,
        }));
    };
};