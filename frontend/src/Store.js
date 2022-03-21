import {createStore,combineReducers,applyMiddleware} from "redux"

import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import { productdetailreducer, productreducer } from "./reducers/productreducer"
const reducer =combineReducers({
product:productreducer,
productdetail:productdetailreducer,
})
let initialstate ={}
const middleware =[thunk]
const store =createStore(reducer,initialstate,composeWithDevTools(applyMiddleware(...middleware)))
export default store