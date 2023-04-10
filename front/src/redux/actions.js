import axios from 'axios';
export const  DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'
export const GET_FAVORITES = 'GET_FAVORITES'
const URL_BASE = "http://localhost:3001/rickandmorty/"



export const deleteFavorite = (id) =>{
    return{
        type: DELETE_FAVORITE, payload: id
    }
}
export const filterCards = (gen) => {
    return{
        type: FILTER, payload: gen
    }
}
export const orderCards = (id) => {
    return{
        type: ORDER ,payload: id
    }
}
export const getFavorites = () => {
    return async function (dispatch){
        const response = await axios.get(`${URL_BASE}fav`)
        dispatch({type: GET_FAVORITES, payload: response.data})
    }
}