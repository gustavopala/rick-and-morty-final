import {  DELETE_FAVORITE, FILTER, ORDER, GET_FAVORITES } from './actions'

const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer = (state = initialState, action) => {
    const { allCharacters } = state;
    switch (action.type) {

        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload),
                allCharacters: state.allCharacters.filter(char => char.id !== action.payload)
            }
        case FILTER:
            const filteredFavorites = state.allCharacters.filter(fav => fav.gender === action.payload);
            
            return {
                ...state,
                myFavorites: filteredFavorites,
                allCharacters: [...allCharacters]
            }
        case ORDER:
            const sortedFavorites = [...state.myFavorites].sort((a, b) => {
                if (action.payload === 'Ascendente') {
                    return a.id - b.id;
                } else {
                    return b.id - a.id;
                }
            });
            return {
                ...state,
                myFavorites: sortedFavorites
            }
        case GET_FAVORITES:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload};
        default:
            return { ...state };
    }
}

export default reducer;