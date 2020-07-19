import React, { Component } from 'react'
import ActorList from '../ActorList';

class HomePage extends Component {
    state={
        actors:[
            {
                name:'Al Pacino',
                description:'Alfredo James AlPacino established himself as a film actor during one of cinemas most vibrant decades',
                photo:'https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_UX140_CR0,0,140,209_AL_.jpg'
            },
            {
                name:' Johnny Depp',
                description:'Johnny Depp is perhaps one of the most versatile actors of his day and age in Hollywood.',
                photo:'https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_UY209_CR3,0,140,209_AL_.jpg'
            },
            {
                name:'Russell Crowe',
                description:'Russell Ira Crowe was born in Wellington, New Zealand, to Jocelyn Yvonne (Wemyss) and John Alexander Crowe',
                photo:'https://m.media-amazon.com/images/M/MV5BMTQyMTExNTMxOF5BMl5BanBnXkFtZTcwNDg1NzkzNw@@._V1_UX140_CR0,0,140,209_AL_.jpg'
            }
        ]
    }

    render() {
        return (
            <div>
                <ActorList actors={this.state.actors} />
            </div>
        )
    }
}

export default HomePage;