import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'


//payload is the id of the item
export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        // checks to see if item is already in cart
        case CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find(x => x.product === item.product)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.product === existItem.product ? item : x)
                }

            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case CART_REMOVE_ITEM:
            return{
                ...state,
                cartItems:state.cartItems.filter(x => x.product !== action.payload)
            }

        default:
            return state
    }
}