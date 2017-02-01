import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyAfUKgFJzLzctnVSmyXgOXOCQ5wW-3ZrzY'

class App extends Component {
  constructor(props) {
    super(props)

    // initialize the state with a property of videos set to an empty array
    this.state = { videos: [] }

    YTSearch({key: API_KEY, term:'surboards'}, (videos) => { //videos = data
      // update the state's videos property with the data from the api call
      this.setState({ videos }) // this.setState({ videos: videos })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos = {this.state.videos} />
      </div>
    )
  }
}
// Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'))
