import {createStore , combineReducers, applyMiddleware} from "redux";
import thunk from  "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import productListReducer from "./reducer/productReducer"
import {productDetailsReducer} from './reducer/productReducer'
import {cartReducer} from './reducer/cartReducer'
import {wishlistReducer} from './reducer/wishlistReducer'
import {userLoginReducer , userRegisterReducer} from './reducer/userReducer'

const reducer=combineReducers({
    productList:productListReducer,
    productDetails : productDetailsReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    wishlist:wishlistReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) :[] 
const wishlistItemsFromStorage = localStorage.getItem('wishlistItems') ? JSON.parse(localStorage.getItem('wishlistItems')) :[] 
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const initialState ={
    cart : {cartItems : cartItemsFromStorage},
    wishlist : {wishlistItems : wishlistItemsFromStorage},
    userLogin:{userInfo: userInfoFromStorage}
}
const middleware = [thunk]
const store = createStore(reducer , initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
