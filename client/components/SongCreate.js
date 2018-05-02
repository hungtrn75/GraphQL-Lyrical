import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import query from '../queries/fetchSong';
import { Link, hashHistory } from 'react-router';

class SongCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
    };

    onSubmit(e) {
        e.preventDefault();
        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{ query }]
        }).then(() => hashHistory.push('/'));
    }

    render() {
        return (
            <div>
                <h3>Create A new song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <lable>Song Title:</lable>
                    <input onChange={e => this.setState({ title: e.target.value })} value={this.state.title} />
                </form>
                <Link to="/"><i className="medium right material-icons">reply</i></Link>
            </div>
        );
    }
}

const mutation = gql`
    mutation AddSong($title: String){
        addSong(title: $title){
            title
        }
    }
`;

export default graphql(mutation)(SongCreate);