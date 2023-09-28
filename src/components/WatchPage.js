import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
    <div>
        <div className='px-5'>
            <iframe width="1000" height="500" src={"https://www.youtube.com/embed/"+searchParams.get('v')} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <CommentsContainer />
    </div>
  )
}

export default WatchPage