import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react';
import HashLoader from "react-spinners/HashLoader";

const MovieList = props => {
    const emptyMessage=(
        <h3>There are no movies yet.</h3>
    )

    const moviesList=(
        <div>
            <HashLoader
                size={40}
                color={"#36bdb3"}
                loading={props.movies.fetching}
            />
            {
                props.movies.error ? <h2>There is a error</h2> 
                    : <Grid stackable columns={3}>
                        {
                            props.movies.movieList.map(movie=> <MovieCard key={movie._id} movie={movie} deleteMovie={props.deleteMovie}></MovieCard>)
                        }
                    </Grid> 
                   
            }
        </div>
    )

    return (
        <div>
            {
                props.movies.length===0 ? emptyMessage : moviesList
            }
        </div>
    );
};

MovieList.propTypes = {
    movies:PropTypes.shape({
        movieList:PropTypes.array.isRequired
    }).isRequired
};

export default MovieList;