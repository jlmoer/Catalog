import React from 'react';
import { Link } from 'react-router-dom';
import catalog from '../catalog.json';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Movies List</h2>
                <ul>
                    {catalog.map((movie) => {
                        return (
                            <li><Link to={`/movie/${movie.id}`}>{movie.title}</Link></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Home;