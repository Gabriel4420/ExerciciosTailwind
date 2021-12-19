import React from 'react'
import { Post } from '../Types/Post'
type Props = {
  data: Post
}
const PostItem = ({ data }: Props) => {
  return (
    <div className="bg-gray-300 p-6 my-4 ">
      <h4 className="text-gray-800 p-2 font-bold">{data.title}</h4>
      <small className="text-sky-800 p-2">
        # {data.id} - User: {data.userId}
      </small>
      <p>{data.body}</p>
    </div>
  )
}

export default PostItem
