import React from 'react';
import MovieList from './movieList.jsx';
import Search from './search.jsx'
import initialData from '../database/exampledata.js'
import AddMovie from './addMovie.jsx';
import Watched from './Watched.jsx';
import movieDB from '../database/movieDB.jsx'

class App extends React.Component {
  constructor(props) {

    super(props);
    this.state= {
      currentlist:initialData,
      value:'',
      addMovie:'',
      watched:true,
      toWatchlist:[]
    };
  }

  componentDidMount() {
    this.getmovieDB();
  }

  getmovieDB() {
    movieDB((data) => {
      initialData[0].title = data.data.original_title;
      initialData[0].year = data.data.release_date;
      initialData[0].runtime = data.data.runtime;
      initialData[0].pictureUrl = 'https://www.themoviedb.org/t/p/w1280/' + data.data.poster_path;
      this.setState({currentlist:initialData});
    })
  }

  handleSearchChange(event) {
    this.setState({value: event.target.value});
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    for(var i =0 ; i < initialData.length; i++) {
      if(initialData[i].title.indexOf(this.state.value) >= 0) {
        this.setState({currentlist:initialData.splice(i,1),watched:true})
        break;
      }
      if (i === initialData.length -1) {
        this.setState({currentlist:[{title:'Sorry, nothing here!'}]})
      }
    }
  }

  handleAddChange(event) {
    this.setState({addMovie: event.target.value});
  }

  handleAddSubmit(event) {
    event.preventDefault();
    var addedMovie = {title: this.state.addMovie}
    initialData.push(addedMovie)
    this.setState({currentlist: initialData})
  }

  handleWatchedClick(event) {
    event.preventDefault();
    this.setState({watched:true})
  }

  handleToWatchedClick(event) {
    event.preventDefault();
    this.setState({watched:false})
  }

  WatchedCheck(event) {
    event.preventDefault();
      toWatchlist.push(initialData.splice(0,1))
      initialData.splice(0,1)
      this.setState({
        watched:false,
        currentlist:initialData
      })
    console.log('Hi Will')
  }

  render() {
    return (
      <div>
      <div className='title'>Movie List</div>
      <AddMovie handleAddChange={this.handleAddChange.bind(this)} value={this.state.value} handleAddSubmit={this.handleAddSubmit.bind(this)}/>
      <Search handleSearchChange={this.handleSearchChange.bind(this)} value={this.state.value} handleSearchSubmit={this.handleSearchSubmit.bind(this)}/>
      <Watched handleWatchedClick={this.handleWatchedClick.bind(this)} handleToWatchedClick = {this.handleToWatchedClick.bind(this)}/>
     <MovieList movie={this.state.watched? this.state.currentlist : this.state.toWatchlist} WatchedCheck={this.WatchedCheck.bind(this)}/>
      </div>
    )
  }
};

export default App;