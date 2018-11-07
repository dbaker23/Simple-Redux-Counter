import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementNum, decrementNum } from '../actions/index';

import Increment from '../components/increment';
import Decrement from '../components/decrement';

class NumberDisplay extends Component {
    state = {
        number: 0
    }

    // handlePress( event ) {  
    //     let number = this.state.number;          
    //     switch( event ) {
    //         case INCREMENT:
    //             number++;
    //             break;
            
    //         case DECREMENT:
    //             number--;
    //             break;
    //     }          
    //     this.setState( {number} );
    // }

    render() {
        return (
            <div id='number-display'>
                <h1>
                    {this.props.number}
                </h1>                  
                <div id='button-bar'>
                    <Increment increment={this.props.incrementNum} />
                    <Decrement decrement={this.props.decrementNum} />
                </div>  
            </div>
        );
    }
}

const mapStateToProps = ( {number} ) => {    
    return { number };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators( {
        incrementNum: incrementNum,
        decrementNum: decrementNum
    }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( NumberDisplay );