import React from 'react';

class MovieEntry extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      show:false
    }
  }

  showresult(event) {
    event.preventDefault();
    this.state.show? this.setState({show:false}):this.setState({show:true})
  }

  checked(event) {
    event.preventDefault();

  }

  render() {
    var style = {
      display: this.state.show? null :'none'
    }

    return (
      <div>
      <div onClick={this.showresult.bind(this)}>{this.props.movie.title}</div>
      <div style={style}>
      <img className="media-object" src={this.props.movie.pictureUrl} alt="" />
        <div className='movieDetail' >{'Year: ' + this.props.movie.year}</div>
        <div className='movieDetail'>{'Runtime: ' + this.props.movie.runtime}</div>
        <div className='movieDetail' >{'Metascore: ' + this.props.movie.metascore}</div>
        <div className='movieDetail' >{'ImdbRating: ' + this.props.movie.imdbrating}</div>
        <div className='movieDetail' >{'Watched: ' + this.props.movie.watched}<input type='checkbox' onClick={this.props.WatchedCheck}></input></div>
        </div>
        </div>
    );

  }

}
export default MovieEntry