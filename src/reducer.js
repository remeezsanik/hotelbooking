import img1 from "./assets/img/jpeg/room-1.jpeg";
import audia8 from "./assets/img/cars/audia8.jpeg";

export const initialState = {
    basket: [
        // {
        //     id: 1,
        //     name: "Single Economy",
        //     type: "Single Economy",
        //     image: img1,
        //     price: 100,
        //     size: 200,
        //     capacity: 1,
        //     pets: "No",
        //     breakfast: "Yes",
        // },
        // {
        //     id: 2,
        //     name: "Audi A8",
        //     type: "4 Seater",
        //     image: audia8,
        //     price: 4000,
        //     capacity: 4,
        //     parkAssist: "Yes",
        // }
    ],
}
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {

    // console.log("data>>", action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.data]
            }
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id == action.id);
            newBasket.splice(index, 1);
            // if (index >= 0) {
            //     newBasket.splice(index, 1);
            // } else {
            //     console.warn(`Cant remove product ${action.id} as its not available`);
            // }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state
    }
}

export default reducer;