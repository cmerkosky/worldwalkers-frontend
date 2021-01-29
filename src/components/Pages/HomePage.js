import React from 'react'
import {Button} from 'react-bootstrap'

export default class HomePage extends React.Component{
    render(){
        return (
            <div>
                <h1>Welcome to Worldwalkers!</h1>
                <Button variant='primary' href='create'>Create Room</Button>{' '}
                <Button variant='secondary' href='join'>Join Room</Button>
            </div>
        )
    }
}