import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './../actions'; 
import Box from './../components/Box/'; 

class BoxContainer extends Component {
	render () {
		return (
      <Box handleClick={this.props.loadImage} image = {this.props.url}/> 
		)
	}
}

const mapStateToProps = (state) =>{
	return state
}

export default connect(mapStateToProps, actionCreators)(BoxContainer)

// export default BoxContainer; 
