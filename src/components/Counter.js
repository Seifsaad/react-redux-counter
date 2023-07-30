import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {increase,decrease}from '../store/CounterSlice'
import {toggleshow} from '../store/ToggleSlice'

const Counter = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  return (
    
    <div className="App">
      <h1>Hello Redux Basic</h1>
    {toggleshow&&
        <>
          <div className="counter">
            Counter: {globalState.counter.value}
          </div>
          ;
          <div>
            <button
              className="btn"
              onClick={()=>dispatch(increase(5))}>
              increase +
            </button>
            <button
              className="btn"
              onClick={()=>dispatch(decrease(2))}
            >
              decrease -
            </button>
          </div>
        </>
    }
      <div>
        <button className="btn" onClick={gl} >
          Hide/Show Counter Number
        </button>
      </div>
    </div>
  );
};

export default Counter;
