import React, { Component } from 'react'; 
import Box from './../components/Box/'; 

class BoxContainer extends Component {
	render () {
		return (
			<Box /> 
			)
	}
}

export default BoxContainer; 

/*
import * as actionCreators from './../action/...'; 
import { connect } from 'react-redux'; 


const mapStateToProps(state){
	return state
}

export default connect(mapStateToProps, actionCreators)(BoxContainer)

<Box url_image = {this.props.url}/> 

*/	