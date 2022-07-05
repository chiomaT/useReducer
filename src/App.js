import { useReducer } from "react";
import "./App.css"

const reducer = (state, action) => {
if (action.type === "increment") {
  return { ...state, count: state.count + 1 };
}
if(action.type === "decrement") {
  return {...state, count: state.count -1}
}
if (action.type === "toggleColor") {
  return {...state, color: !state.color}
}
if (action.type === "newUserInput") {
  return { ...state, userInput: action.payload };
}
}

//ACTIONS
const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  TOGGLE_COLOR: "toggleColor",
  USER_INPUT: "newUserInput"
};

const App = () => {
  const [state , dispatch] = useReducer(reducer, {count:0, color:false, userInput: ""})
  return (
    <div className="App" style={{ color: state.color ? "" : "#fcfc" }}>
      <p className="count-tracker">{state.count}</p>
      <div className="input">
        <input
          type="text"
          value={state.userInput}
          onChange={(e) =>
            dispatch({
              type: ACTION.USER_INPUT,
              payload: e.target.value,
            })
          }
        ></input>
      </div>
      <div className="buttons-container">
        <div>
          <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>
            INC BUTTON
          </button>
        </div>
        <div>
          <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>
            DEC BUTTON
          </button>
        </div>
        <div>
          <button onClick={() => dispatch({ type: ACTION.TOGGLE_COLOR })}>
            TOGGLE COLOR
          </button>
        </div>
      </div>
      <h3>{state.userInput}</h3>
    </div>
  );
}

export default App;
