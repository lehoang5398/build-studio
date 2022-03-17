import { combineReducers } from "redux";
import UnitMoney from "../Container/HomePage/reducers/UnitMoney";
import todoProduct from "../Container/HomePage/reducers/AddToCart";
import CategoryReducer from "../Container/HomePage/reducers/Category";


const rootReducer = combineReducers({
  unitMoney:UnitMoney,
  category:CategoryReducer,
  addToCart:todoProduct,
});
export default rootReducer ;
