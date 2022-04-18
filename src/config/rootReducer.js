import { combineReducers } from 'redux';
import unitMoneyReducer from '../container/HomePage/reducers/unitMoney';
import todoProductsReducer from '../container/HomePage/reducers/carts';
import CategoryReducer from '../container/HomePage/reducers/category';
import loginReducer from '../container/Login/reducer/SignIn';

const rootReducer = combineReducers({
  unitMoney: unitMoneyReducer,
  category: CategoryReducer,
  addToCart: todoProductsReducer,
  user: loginReducer,

});
export default rootReducer;
