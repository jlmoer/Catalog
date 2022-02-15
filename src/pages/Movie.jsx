import React from 'react';
import { Link } from 'react-router-dom';
import catalog from '../catalog.json';

class Movie extends React.Component {
    constructor() {
        super();
        this.state = {
            movie: {},
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const movie = catalog[id - 1];
        this.setState({ movie })
    }

    render() {
        return (
            <div>
                <h2>Movie</h2>
                <p></p>
                <ul>
                    <li>{this.state.movie.title}</li>
                    <li>{this.state.movie.director}</li>
                    <li>{this.state.movie.stars}</li>
                    <li><img src={this.state.movie.image} alt='picture' /></li>
                    <li>{this.state.movie.description}</li>
                </ul>
            </div>
        )
    }
}

export default Movie;