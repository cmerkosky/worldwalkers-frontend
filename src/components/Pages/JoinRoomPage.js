import React from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { updatePlayerName, joinWithRoomCode } from '../../store/actions'
import { PlayerNameControl, RoomCodeControl } from '../Controls'

class JoinRoomPage extends React.Component{
    constructor(props){
        super(props)
        this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);
        this.handleRoomCodeChange = this.handleRoomCodeChange.bind(this);
        this.state = {roomCode: '', playerName: ''}
    }

    componentDidMount() {
        console.log(this.props.match)
    }

    handlePlayerNameChange(playerName){
        this.setState({playerName})
    }

    handleRoomCodeChange(roomCode){
        this.setState({roomCode})
    }

    handleSubmit = event => {
        event.preventDefault()
        const {roomCode, playerName} =  this.state;

        if(playerName && roomCode){
            this.props.updatePlayerName(playerName)
            this.props.joinWithRoomCode(roomCode)
            this.props.history.push("/game")
        }
    }

    render(){
        const playerName = this.state.playerName
        const roomCode = this.state.roomCode

        return (
            <div>
                <h2>Enter Room Code</h2>
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <RoomCodeControl value={roomCode} onChange={this.handleRoomCodeChange}/>
                        <PlayerNameControl value={playerName} onChange={this.handlePlayerNameChange}/>
                        <Button variant='primary' type="submit">Join</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

// Pass in the actions this class will need
const mapDispatchToProps = {
    updatePlayerName,
    joinWithRoomCode
}

export default connect(null, mapDispatchToProps)(JoinRoomPage)