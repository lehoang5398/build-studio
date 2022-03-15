import { combineReducers } from "redux";
import hobbyReducer from "./Hobby";
import UnitMoney from './UnitMoney';

const rootReducer = combineReducers({
  product:hobbyReducer,
  unitMoney:UnitMoney,
});
export default rootReducer ;
