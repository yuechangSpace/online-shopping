import userReducer from './user/user.reducer.js';
import cartReducer from './cart/cart.reducer.js';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
	key:'root',
	storage,
	//only need to persist the 'cart reducer'
	whiteList : ['cart']
}

const rootReducer = combineReducers({
	user:userReducer,
	cart:cartReducer
})

export default persistReducer(persistConfig, rootReducer)