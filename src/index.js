import _ from 'lodash'
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
    this.state = {
      videos: [],
      selectedVideo: null
     }

     this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term:term}, (videos) => { //videos = data
      // update the state's videos property with the data from the api call
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       })
    })
  }

  render() {
    // videoSearch can only be called once every 300ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch}/>
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos} />
      </div>
    )
  }
}
// Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'))
