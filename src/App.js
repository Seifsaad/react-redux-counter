import "./App.css";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => {
    if (state.value == 0) {
      return "noNumber";
    }
  });
  const toggleState = useSelector((state) => state.showCounter);
  const increase = () => {
    const action = { type: "increase", payload: 4 };
    dispatch(action);
  };
  const decrease = () => {
    const action = { type: "increase", payload: 2 };
    dispatch(action);
  };
  const toggleCounter = () => {
    dispatch({ type: "toggleCounter" });
  };
  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      {toggleState && (
        <>
          <div className="counter">Counter: {counterState}</div>;
          <div>
            <button className="btn" onClick={increase}>
              increase +
            </button>
            <button className="btn" onClick={decrease}>
              decrease -
            </button>
          </div>
        </>
      )}

      <div>
        <button className="btn" onClick={toggleCounter}>
          Hide/Show Counter Number
        </button>
      </div>
    </div>
  );
}

export default App;
