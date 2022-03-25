import { combineReducers } from 'redux';
import unitMoneyReducer from '../container/HomePage/reducers/unitMoney';
import todoProductsReducer from '../container/HomePage/reducers/carts';
import CategoryReducer from '../container/HomePage/reducers/category';


const rootReducer = combineReducers({
  unitMoney:unitMoneyReducer,
  category:CategoryReducer,
  addToCart:todoProductsReducer,
});
export default rootReducer ;
