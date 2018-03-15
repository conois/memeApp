import React from 'react'; 

const ButtonMeme = () => {
	return (
			<div>
				<button onClick{()=> {this.props.handleClick()}}=>Get meme</button>
			</div>
		)
}

export default ButtonMeme; 