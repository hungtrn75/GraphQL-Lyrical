import React, { Component } from 'react';

class SongCreate extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: ''
        };
    };
    
    render() {
        return (
            <div>
                <h3>Create A new song</h3>
                <form>
                    <lable>Song Title:</lable>
                    <input onChange={e => this.setState({ title: e.target.value })} value={this.state.title}/>
                </form>
            </div>
        );
    }
}

export default SongCreate;