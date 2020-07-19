import React from 'react'
import { Card, Grid, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const extra=(movie,deleteMovie)=>{
  return (
    <div className="ui two buttons">
      <Button animated as={Link} to={`/movie/${movie._id}`} >
        <Button.Content visible>Edit</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow right' />
        </Button.Content>
      </Button>
      <Button animated='vertical' onClick={()=>deleteMovie(movie._id)}>
        <Button.Content hidden>Delete</Button.Content>
        <Button.Content visible>
          <Icon name='trash' />
        </Button.Content>
      </Button>
    </div>
  )
}

const MovieCard = props => (
  <Grid.Column>
    <Card>
        <Card image={props.movie.cover}  header={props.movie.title} extra={extra(props.movie, props.deleteMovie)} />
    </Card>
  </Grid.Column>
)

export default MovieCard;