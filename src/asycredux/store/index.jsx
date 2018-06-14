import {createStore,applyMiddleware,combineReducers } from 'redux'
import thunk from 'redux-thunk';
import * as reducer from '../reducer'
import * as goodsRuducer from '../reducer/goods'

Object.assign(reducer,goodsRuducer)

export default createStore(
    combineReducers(reducer),
    applyMiddleware(thunk)
)