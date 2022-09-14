import React from "react";
import '../style-sheet/Counter.css';

function Counter ({ numClics }) {
    return (
        <div className="box-counter">
            {numClics}

        </div>
    );

}

export default Counter;