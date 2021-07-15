import React from "react";

class Counter extends React.Component {

    
    render() {
        return(
            <div>
                <h2>{this.props.count}</h2>

                <button style={{background:"green", width:100, height: 100}}  onClick={this.props.addFunction}>+</button>

                <button style={{background:"red", width:100, height: 100}} onClick={this.props.subtractFunction}>-</button>
            </div>
        )
    }
}

export default Counter