import React from 'react'
import { useQuery } from 'react-query'
import client from './ReactQueryClient'

function Post({ postId, goBack }) {
  const fetcher = (url) => {
    return fetch(url).then((res) => res.json())
  }
  const { data, isLoading } = useQuery(
    ['posts', postId],
    () => fetcher(`https://jsonplaceholder.typicode.com/posts/${postId}`),
    
   
  )
  if (isLoading) {
    return <h2>Loading...</h2>
  }

  const cachedData = client.getQueryData(['posts', 10])
  //   console.log(cachedData)

  return (
    <>
      <a href="#" onClick={goBack}>
        <h4>goBack</h4>
      </a>
      <h1>{data.id}</h1>
      <h1>{data.title}</h1>
    </>
  )
}

export default Post
