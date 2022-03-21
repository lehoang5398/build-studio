import { combineReducers } from "redux";
import UnitMoney from "../container/HomePage/reducers/UnitMoney";
import todoProduct from "../container/HomePage/reducers/Cart";
import CategoryReducer from "../container/HomePage/reducers/Category";


const rootReducer = combineReducers({
  unitMoney:UnitMoney,
  category:CategoryReducer,
  addToCart:todoProduct,
});
export default rootReducer ;
