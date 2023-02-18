import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./actions";

const initilState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            const addFav = [...state.allCharacters, action.payload]
            return {
                ...state,
                myFavorites: [...addFav],
                allCharacters: [...addFav,]
            }
        case REMOVE_FAV:
            const deleteFav = state.allCharacters.filter(e => e.id !== action.payload);
            return{
                ...state,
                myFavorites: [...deleteFav],
                allCharacters: [...deleteFav]
            }
        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter(e => e.gender === action.payload),
            }
        case ORDER:
            let orderFav;
            if (action.payload === 'Ascendente') {
                orderFav = state.myFavorites.sort((a, b) => a.id < b.id ? 1 : -1)
            } else {
                orderFav = state.myFavorites.sort((a, b) => a.id > b.id ? 1 : -1)
            }
            return {
                ...state,
                myFavorites: [...orderFav],
            }
        case 'RESET': 
            return {
                ...state,
                myFavorites: state.allCharacters,
            }
        default:
            return state;
    }
}

export default rootReducer;