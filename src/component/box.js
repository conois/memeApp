import React from "react";
import './style.css'; 

class Box extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div style={{
                    backgroundColor:`${this.props.color}`
                }}
                className="box sizeOne">   
                </div>
                <div style={{
                    backgroundColor:`${this.props.color}`
                }}
                className="box sizeTwo">   
                </div>
                <div style={{
                    backgroundColor:`${this.props.color}`
                }}
                className="box sizeThree">   
                </div>
                <div style={{
                    backgroundColor:`${this.props.color}`
                }}
                className="box sizeFour">   
                </div>
                <div style={{
                    backgroundColor:`${this.props.color}`
                }}
                className="box sizeFive">   
                </div>

                <p> Color Code: {this.props.color} </p>
                <button onClick={()=>{this.props.handleClick()}}>Change Color</button>
                
            </div>
        )
    }
}

export default Box;