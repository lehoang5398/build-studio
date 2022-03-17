import { combineReducers } from "redux";
import CategoryReducer from "./Category";
import UnitMoney from './UnitMoney';

const rootReducer = combineReducers({
  unitMoney:UnitMoney,
  category:CategoryReducer,
});
export default rootReducer ;
