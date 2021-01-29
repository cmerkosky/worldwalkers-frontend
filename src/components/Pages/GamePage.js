import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { registerSocket, unregisterSocket } from '../../store/actions'
import { SocketInit } from '../Sockets/Socket'

class GamePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {playerList: []}
    }


    componentDidMount(){
        const {playerName, roomCode, roomAction } = this.props
        let socket = SocketInit(playerName, roomCode, roomAction)

        socket.on("show_players", data => {
            this.setState({playerList: data.playerList})
        })

        this.props.registerSocket(socket);
    }

    componentWillUnmount(){
        this.props.unregisterSocket()
    }

    getGameUrl(){
        return `https://worldwalkers.io/${this.props.roomCode}`
    }

    render(){
        const roomCode = this.props.roomCode
        const playerName = this.props.playerName
        const playerList = this.state.playerList

        if(!roomCode){
            return <Redirect to={{pathname: "/join"}}/>
        }

        return (
            <div>
                <h1>Welcome to room: {roomCode}, {playerName}!</h1>
                <p>You can share this room at by going sending the following link:</p>
                <p>{this.getGameUrl()}</p>
                <h2>Currently connected players:</h2>
                <ul>
                    {playerList.map(player => (
                        <li>{player.playerName}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        playerName: state.playerName,
        roomCode: state.roomCode,
        roomAction: state.roomAction
    }
}

function mapDispatchToProps() {
    return {
        registerSocket,
        unregisterSocket
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GamePage)