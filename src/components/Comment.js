import React from 'react'

const Comment = ({comment}) => {
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded items-center'>
        <img src='https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png' alt='user' className='w-8 h-8'/>
        <div className='px-3'>
            <p className='font-bold'>{comment.name}</p>
            <p>{comment.text}</p>
        </div>
    </div>
  )
}

export default Comment