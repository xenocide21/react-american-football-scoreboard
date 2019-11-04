import React, {useState} from "react";
import "./App.css";

function BottomRow() {
    const [down, setDown] = useState(1);
    const [yards, setYards] = useState(10);
    const [ballOn, setBallOn] = useState(20);
    const [quarter, setQuarter] = useState(1);

    // const BottomRow = () => {
        return (
            <div>
                <div className="bottomRow">
                    <div className="down">
                        <h3 className="down__title">Down</h3>
                        <div className="down__value">{down}</div>
                    </div>
                    <div className="toGo">
                        <h3 className="toGo__title">To Go</h3>
                        <div className="toGo__value">{yards}</div>
                    </div>
                    <div className="ballOn">
                        <h3 className="ballOn__title">Ball on</h3>
                        <div className="ballOn__value">{ballOn}</div>
                    </div>
                    <div className="quarter">
                        <h3 className="quarter__title">Quarter</h3>
                        <div className="quarter__value">{quarter}</div>
                    </div>
                </div>
                <div>
                    <div>
                        <h5>Down</h5>
                        <button className="downButton_counter" onClick={()=>setDown(down +1)}>Add</button>
                        <button className="downButton_counter" onClick={()=>setDown(1)}>Reset</button>
                    </div>
                    <div>
                        <h5>Yards</h5>
                        <button className="yardsToGo" onClick={()=>setYards(yards -1)}>-1</button>
                        <button className="yardsToGo" onClick={()=>setYards(yards -5)}>-5</button>
                        <button className="yardsToGo" onClick={()=>setYards(yards +1)}>+1</button>
                        <button className="yardsToGo" onClick={()=>setYards(yards +5)}>+5</button>
                        <button className="yardsToGo" onClick={()=>setYards(10)}>Reset</button>
                    </div>
                    <div>
                        <h5>Ball On</h5>
                        <button className="ballOnYard" onClick={()=>setBallOn(ballOn -1)}>-1</button>
                        <button className="ballOnYard" onClick={()=>setBallOn(ballOn -5)}>-5</button>
                        <button className="ballOnYard" onClick={()=>setBallOn(ballOn -10)}>-10</button>
                        <button className="ballOnYard" onClick={()=>setBallOn(ballOn +1)}>+1</button>
                        <button className="ballOnYard" onClick={()=>setBallOn(ballOn +5)}>+5</button>
                        <button className="ballOnYard" onClick={()=>setBallOn(ballOn +10)}>+10</button>
                        <button className="ballOnYard" onClick={()=>setBallOn(20)}>Reset</button>
                    </div>
                    <div>
                        <h5>Quarter</h5>
                        <button className="quarterTime" onClick={()=>setQuarter(quarter +1)}>Add</button>
                        <button className="quarterTime" onClick={()=>setQuarter(1)}>Reset</button>
                    </div>
                </div>
            </div>
        );
    }
export default BottomRow;
