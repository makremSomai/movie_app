import React, { Component } from 'react';
import './moviecontainer.css';
import MovieCard from './MovieCard';
import Rating from './Rating';
import NewMovie from './NewMovie';


class Movies extends Component {
  constructor(props){
    super(props)
  
    this.state={
        rate:0 ,
        searched:'',
        movies:[
          {   
              img: "https://is4-ssl.mzstatic.com/image/thumb/Video50/v4/f8/a1/98/f8a1983d-bc83-ce51-4c75-8a9e9bc35201/NEVER_BACK_DOWN_NO_SURRENDER_2016_TH_MLF-WW-artwork.lsr/268x0w.png",
              title:"never back down",
              rate:"1",
          },
          {   
              img: "http://fr.web.img3.acsta.net/pictures/18/09/20/10/41/4338768.jpg",
              title:"Venom",
              rate:"2",
          },
          {   
              img: "https://movies.tmsimg.com/assets/p13579498_v_v8_aa.jpg",
              title:"Aquaman",
              rate:"3",
          },
          {   
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuoU-vXC1cFkHGdAi6PSTwsWw0oq4KTn0fOyqOD41MlODZ8Kr",
              title:"Ocean's 8",
              rate:"4",
          },
          {   
            img: "data:image/jpeg;base64,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",
            title:"EXAM",
            rate:"5",
        },
        
      ]
    }
  }

    search= (el) =>{
      this.setState({searched: el})
   }  
   onDelete=(x)=>{
    const movies = this.state.movies.filter((el,i) => i!== x)
    this.setState({movies , movies : movies})
  
  }

  searchRateMovie =(data) =>
  {
    this.setState ({ rate: data})
  }

  newMovie = (data) => {
    this.setState({ movies: this.state.movies.concat(data) })
  }

  render() {
    return (

      <div className="border">
        <div className="searchBar">       
        <input onChange={(e)=>this.search(e.target.value)} placeholder="Search...  " type="search" />    
        <Rating 
        number={this.state.rate}
        onClickStar={i => this.searchRateMovie(i)}
        
        />
        <NewMovie addMovie={this.newMovie}/>
      </div>
      <div className="movies">
          {this.state.movies.filter(movie => (movie.rate >= this.state.rate && movie.title.toLowerCase().includes(this.state.searched.toLowerCase()))).map((el,i)=>
            <MovieCard className="test" movie={el} id={i} delete={this.onDelete} /> 
          )}
          </div>
      </div>
    );
  }
}

export default Movies;