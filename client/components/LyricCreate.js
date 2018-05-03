import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { GraphQLEnumType } from 'graphql';

class LyricCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
    }
    
    onSubmit(e) {
        e.preventDefault();
        this.props.mutate({
            variables: {
                songId: this.props.songId,
                content: this.state.content
            }
        }).then(()=>this.setState({content:''}));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <lable>Add a Lyric</lable>
                    <input value={this.state.content} onChange={e=>this.setState({content:e.target.value})}/>
                </form>
            </div>
        );
    }
}

const mutation = gql`
    mutation AddLyricToSong($songId: ID!,$content: String){
        addLyricToSong(songId: $songId,content: $content){
        id,
        lyrics {
                id
                content
            }
        }
    }
`;

export default graphql(mutation)(LyricCreate);