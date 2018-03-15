import React, { Component } from 'react';
import ButtonMeme from './btnGetMeme'
import './style.css'; 

class Box extends Component {
	render () {
		return (
				<div className="allinBox">
					<div style={{backgroundImage: `${this.props.image}`}} className="memeBox"></div>
					<ButtonMeme /> 
				</div> 
			)
	}
}

export default Box; 