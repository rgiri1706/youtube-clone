import React from 'react'
import CommentsList from './CommentsList'

const CommentsContainer = () => {
    const Comments = [
        {
            name: 'test',
            text: 'ushus',
            reply: [
                {
                    name: 'tt',
                    text: 'ihisidshds',
                    reply: [
                        {
                            name: 'tt',
                            text: 'ihisidshds',
                            reply: [
                                {
                                    name: 'tt',
                                    text: 'ihisidshds',
                                    reply: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'test',
            text: 'ushus',
            reply: [
                {
                    name: 'tt',
                    text: 'ihisidshds',
                    reply: []
                }
            ]
        }
    ]
    return (
        <div className='m-5 p-2'>
            <h1 className='text-xl font-bold'>Comments</h1>
            <CommentsList comments={Comments}/>
        </div>
    )
}

export default CommentsContainer;