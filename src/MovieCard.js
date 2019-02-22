import React from 'react';
import './moviecard.css';
import Movies from './MovieContainer';
import Rating from './Rating';
class MovieCard  extends React.Component {
    
    render() {
        console.log(this.props.movie)
        // const {el : {name , title , paragraphe , img} } = this.props
        return (
            <div className="carddeco key">
                <div className={this.props.className}>
                
                <img width="200px" height="275px" border="2px solid black" className={`${this.props.imgClassName}`} src={this.props.movie.img} alt=""></img>

                    
                
                <h4>{this.props.movie.title}</h4> 
                <Rating number={this.props.movie.rate} onClickStar={() => {}}/>
                <button onClick={()=>this.props.delete(this.props.id)} >Delete</button>
            
            </div>
        </div>
        )
    }
    
}

export default MovieCard 