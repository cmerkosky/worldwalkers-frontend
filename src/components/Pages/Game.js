import React from 'react'
import { connect } from 'react-redux';

class Game extends React.Component{
    render(){
        return (
            <h1>Welcome to room: {this.props.match.params.roomCode}, {this.props.playerName}!</h1>
        );
    }
}

function mapStateToProps(state) {
    return {
        playerName: state.playerName
    }
}

export default connect(mapStateToProps)(Game)