import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}

export const ReactionButtons = ({ post }) => {
    //Object.entries creates a 2D array of key kalue pair
    const dispatch = useDispatch()
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
      return (
        <button key={name} type="button" className="muted-button reaction-button"
        onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }>
          {emoji} {post.reactions[name]}
        </button>
      )
    })
  
    return <div>{reactionButtons}</div>
}