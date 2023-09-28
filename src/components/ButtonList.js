import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const ListItems = ['All', 'Game', 'Songs', 'Live', 'Soccer', 'News', 'Sports'];
  return (
    <div className='flex'>
      {ListItems.map(buttonname=><Button name={buttonname} />)}
    </div>
  )
}

export default ButtonList