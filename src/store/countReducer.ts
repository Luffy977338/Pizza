import { pizzaList } from "../localLists/pizzaList"

const defaultState = {
   count: 1,
}


const INCREMENT_COUNT = "INCREMENT_COUNT"
const DECREMENT_COUNT = "DECREMENT_COUNT"

export const countReducer = (state = defaultState, action: any) => {
   switch (action.type) {
      case INCREMENT_COUNT:
         return { ...state, count: state.count += 1 }
      case DECREMENT_COUNT:
         return { ...state, count: state.count -= 1 }
      default:
         return state
   }
}

export const incrementCountAction = () => ({ type: INCREMENT_COUNT })
export const decrementCountAction = () => ({ type: DECREMENT_COUNT })
