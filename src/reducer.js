import img1 from "./assets/img/jpeg/room-1.jpeg";
import p911 from './assets/img/cars/p911.jpeg'

export const initialState = {
    basket: [
        {
            id: 1,
            name: "Single Economy",
            type: "Single Economy",
            image: img1,
            price: 100,
            size: 200,
            capacity: 1,
            pets: "No",
            breakfast: "Yes",
        },
        {
            id: 1,
            name: "Porsche 911",
            type: "2 Seater",
            image: p911,
            price: 7000,
            capacity: 2,
            parkAssist: "Yes",
        }
    ],
}


const reducer = (state, action) => {

    console.log("data>>", action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.data]
            }
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            newBasket.splice(index, 1);
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state
    }
}

export default reducer;