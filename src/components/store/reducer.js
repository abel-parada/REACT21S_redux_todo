import * as actionTypes from './actions';


const initialState = {
    understand:"understand this",
    notes:[
        {
          id: 1,
          title: "Create clean app",
          task: "npx create-react-app",
          done: false,
        },
        {
          id: 2,
          title: "Clean app",
          task: "Delete and clean unnecessary stuff",
          done: false,
        },
        {
          id: 3,
          title: "Create store / context",
          task: "Create new file and use React.createContext()",
          done: false,
        },
        {
          id: 4,
          title: "Trying",
          task: "Trying",
          done: false,
        },
      ],
};


const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.ADD_TODO:
      return {
        notes: [
          ...state.notes,
          {
            id: new Date().valueOf(),
            ...action.payload,
            done:false
          }
        ]
      }
      default:
      return state;
  }
}

export default reducer;