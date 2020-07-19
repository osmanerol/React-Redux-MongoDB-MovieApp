import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Image, Message} from 'semantic-ui-react';
import InlineError from './InlineError';
import { Redirect } from 'react-router-dom';

class NewMovieForm extends Component {
    state={
        _id:this.props.movie ? this.props.movie._id : '',
        title:this.props.movie ? this.props.movie.title : '',
        cover:this.props.movie ? this.props.movie.cover : '',
        errors:{},
        redirect:false
    }

    static propTypes={
        onNewMovieSubmit:PropTypes.func.isRequired
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.newMovie.movie.title && nextProps.newMovie.movie.title!==this.state.title){
            this.setState({
                title:nextProps.newMovie.movie.title,
                cover:nextProps.newMovie.movie.cover
            });
        }
    }

    handleChange=(event)=>{
        event.preventDefault();
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    onSubmit=()=>{
        const errors=this.validate();
        this.setState({
            errors:errors,
            redirect:true
        });

        const _id=this.state._id || this.props.newMovie.movie._id;
        console.log("id",_id);

        //error altinda kayit var mi
        if(Object.keys(errors).length===0){
            if(!_id){
                this.props.onNewMovieSubmit(this.state);   
            }
            else{
                this.props.onUpdateMovieSubmit({...this.state,_id});
            }
        }
    }

    validate=()=>{
        const errors={};
        if(!this.state.title) errors.title="Can't be blank";
        if(!this.state.cover) errors.cover="Can't be blank";
        return errors;
    }

    render() {
        const form=(
            <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching || this.props.newMovie.movie.fetching  }>
                <Form.Field error={!!this.state.errors.title}>
                    <label>Title</label>
                    {
                        this.state.errors.title && <InlineError message={this.state.errors.title} />
                    }
                    <input id='title' name='title' value={this.state.title} onChange={this.handleChange} placeholder='Title' />
                </Form.Field>
                <Form.Field error={!!this.state.errors.cover}>
                    <label>Cover Url</label>
                    {
                        this.state.errors.cover && <InlineError message={this.state.errors.cover}  />
                    }
                    <input id='cover' name='cover' value={this.state.cover} onChange={this.handleChange}  placeholder='Cover Url' />
                </Form.Field>
                <Image src={this.state.cover} size='small'/>
                <Button type='submit' style={{marginTop:'1em'}}>Submit</Button>
                {
                    this.props.newMovie.error && 
                    <Message negative>
                        <Message.Header>We're sorry</Message.Header>
                        <p>A problem occured while recording.</p>
                    </Message>
                }
            </Form>
        )

        return (
            <div>
                {
                    this.props.newMovie.done && this.state.redirect ? <Redirect to='/movies' /> : form 
                }
            </div>
        )
    }
}

export default NewMovieForm;