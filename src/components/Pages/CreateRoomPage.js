import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import { Form, Button } from 'react-bootstrap';
import { updatePlayerName, createWithRoomCode } from '../../store/actions'
import { PlayerNameControl, RoomCodeControl } from '../Controls'

class CreateRoomPage extends React.Component{
    constructor(props){
        super(props)
        this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);
        this.state = {roomCodeObj: {}, roomCode: '', playerName: ''}
    }

    handlePlayerNameChange(playerName){
        this.setState({playerName})
    }


    componentDidMount(){
        const roomCode = this.props.roomCode

        if(roomCode){
            this.setState({roomCode})
        }
        else{
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/randomRoomCode`)
                .then(res => {
                    this.setState({roomCode: res.data.roomCode})
                })
        }
    }

    constructRoomCode(responseData){
        let res = []
        for(var i = 0; i < responseData.length; i++){
            res.push(responseData[i].cityName)
        }
        return res.join("")
    }

    handleSubmit = event => {
        event.preventDefault()
        const playerName =  this.state.playerName;
        const roomCode = this.state.roomCode

        if(playerName){
            this.props.updatePlayerName(playerName)
            this.props.createWithRoomCode(roomCode)
            this.props.history.push("/game")
        }
    }

    render(){
        const playerName = this.state.playerName
        const roomCode = this.state.roomCode

        return (
            <div>
                <h2>Create a new room</h2>
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <RoomCodeControl value={roomCode} canEdit={false}/>
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
    createWithRoomCode
}

// Get the state we'll need
function mapStateToProps(state) {
    return{
        roomCode: state.roomCode
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoomPage)