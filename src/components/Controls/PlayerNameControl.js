import React from 'react'
import { FormLabel, FormControl, FormGroup } from 'react-bootstrap';

export default class PlayerNameInputControl extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value)
    }

    render() {
        const playerName = this.props.value;

        return (
            <FormGroup controlId="formPlayerName">
                <FormLabel>Player Name</FormLabel>
                <FormControl
                    type="text"
                    placeholder="Enter your player name here"
                    value={playerName}
                    onChange={this.handleChange}
                    style={{"textAlign":"center"}}
                    />
            </FormGroup>
        )
    }
}