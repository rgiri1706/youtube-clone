import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_API_SEARCH } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
    const dispatch = useDispatch();
    const [searchTerm, setTerm] = useState('');
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const searchCache = useSelector(store=> store.search);

    useEffect(()=>{
       const timer=setTimeout(()=>{
        if(searchCache[searchTerm]){
            setSuggestion(searchCache[searchTerm]);
        } else {
            getSuggestion();
        }
        },200);
       return ()=>{
        clearTimeout(timer);
       }
    },[searchTerm])

    const getSuggestion = async ()=>{
        const data = await fetch(YOUTUBE_API_SEARCH+searchTerm);
        const json = await data.json();
        setSuggestion(json[1]);
        dispatch(cacheResults({
            [searchTerm]: json[1]
        }));
    }
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img className="h-8 cursor-pointer" src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp' alt='menu icon' onClick={toggleMenuHandler}/>
                <img className="h-8 mx-2" src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png' alt='youtube icon'/>
            </div>
            <div className='col-span-10'>
                <input type='text' className='px-3 w-1/2 border border-gray-400 p-2 rounded-l-full' value={searchTerm} onChange={(e)=>setTerm(e.target.value)} onFocus={()=> setShowSuggestion(true)} onBlur={()=> setShowSuggestion(false)}/>
                <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>Search</button>
                {showSuggestion && <div className='absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg'>
                    <ul>
                        {suggestion.map(sg=><li key={sg} className='px-3 py-2 hover:bg-gray-100'>{sg}</li>)}
                    </ul>
                </div>}
            </div>
            <div className='col-span-1'>
                <img alt='user' className='h-8' src='https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png' />
            </div>
        </div>
  )
}

export default Head