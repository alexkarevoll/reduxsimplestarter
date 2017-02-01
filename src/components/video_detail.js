import React from 'react'

const VideoDetail = ({video}) => {
  // this is here so we don't get `cannot read property id of undefined`
  // it will load a temporary div until the parent component is able
  // to fetch a video from the api
  if (!video){
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}` //interpolation
  // const url = 'https://www.youtube.com/embed/' + videoId

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail
