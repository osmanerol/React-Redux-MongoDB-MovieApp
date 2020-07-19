import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieList from '../MovieList';
import { fetchMovies, deleteMovie } from '../../actions/movies';

class MoviesPage extends Component {
    static propTypes={
        movies:PropTypes.object.isRequired,
        deleteMovie:PropTypes.func.isRequired
    }

    UNSAFE_componentWillMount() {
        this.props.fetchMovies();
    }
           
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.props.movies.error=nextProps.movies.error
    }           

    render() {
        return (
            <div>
                <h1>Movies</h1>
                <MovieList movies={this.props.movies} deleteMovie={this.props.deleteMovie} />
            </div>
        )
    }
}

const mapStateToProps=(state,props)=>{
    return {
        movies:state.movies
    };
}

const mapDispatchToProps={
    fetchMovies:fetchMovies,
    deleteMovie:deleteMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);