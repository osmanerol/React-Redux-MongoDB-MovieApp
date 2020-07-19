import axios from 'axios';

export const FETCH_MOVIES_FULFILLED='FETCH_MOVIES_FULFILLED';
export const FETCH_MOVIES_REJECTED='FETCH_MOVIES_REJECTED';
export const FETCH_MOVIES_PENDING='FETCH_MOVIES_PENDING';

export const DELETE_MOVIE_FULFILLED='DELETE_MOVIE_FULFILLED';
export const DELETE_MOVIE_REJECTED='DELETE_MOVIE_REJECTED';
export const DELETE_MOVIE_PENDING='DELETE_MOVIE_PENDING';

export function fetchMovies(){
    return dispatch=>{
        dispatch({
            type:'FETCH_MOVIES',
            payload:axios.get('http://localhost:5050/api/movies')
                        .then(response=>response.data.movies)
        })
        /*
        axios.get('http://localhost:5050/api/movies')
            .then(response=>response.data)
            .then(data=>dispatch({
                type:FETCH_MOVIES,
                payload:data.movies
            }))
            .catch(error=>dispatch({
                type:FETCH_MOVIES_ERROR,
                payload:error
            }))
        */
    }
}

export function deleteMovie(id){
    return dispatch=>{
        dispatch({
            type:'DELETE_MOVIE',
            payload:axios.delete(`http://localhost:5050/api/movies/${id}`)
                        .then(response=>Object.assign({},response,{id}))
        })
    }
}