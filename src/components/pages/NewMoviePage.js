import React, { Component } from 'react'
import NewMovieForm from '../NewMovieForm';
import { connect } from 'react-redux';  
import { onNewMovieSubmit, fetchMovie, onUpdateMovieSubmit } from '../../actions/newMovie';

class NewMoviePage extends Component {
    componentDidMount() {
        const { match }= this.props;
        if(!this.props.movie && match.params._id){
            this.props.fetchMovie(match.params._id);
        }
    }

    render() {
        return (
            <div>
                <h2>New Movie</h2>
                <NewMovieForm onNewMovieSubmit={this.props.onNewMovieSubmit} onUpdateMovieSubmit={this.props.onUpdateMovieSubmit} newMovie={this.props.newMovie} movie={this.props.movie} />
            </div>
        )
    }
}

const mapStateToProps=(state,props)=>{
    return {
        newMovie:state.newMovie,
        movie:state.movies.movieList.find(item=>item._id===props.match.params._id)
    }
}

const mapDispatchToProps={
    onNewMovieSubmit:onNewMovieSubmit,
    fetchMovie:fetchMovie,
    onUpdateMovieSubmit:onUpdateMovieSubmit
}

export default connect(mapStateToProps,mapDispatchToProps)(NewMoviePage);