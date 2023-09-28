import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [video, setVideos] = useState([]);
  useEffect(()=>{
    getVideos();
  },[])
  const getVideos=async ()=>{
    const data = await fetch(YOUTUBE_API);
    const response = await data.json();
    setVideos(response.items);
  }
  return (
    <div className='flex flex-wrap'>
      {video.map(card=>(
        <Link to={"/watch?v="+card.id}>
          <VideoCard key={card.id} info={card}/>
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer