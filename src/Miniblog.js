import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Post from './Post'
import client from './ReactQueryClient'

function GetData() {
  const [postId, setPostId] = useState(null)
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const fetcher = (url) => {
    return fetch(url).then((res) => res.json())
  }
  const { data, isLoading, error } = useQuery(
    ['miniblog', 'json'],
    () => fetcher(url),

    {
      select: (result) => result.slice(0, 5),
      staleTime: 0,
      cacheTime: 3000,
    },
    {
      enabled: true,
    },
  )
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  //   cache cghecking- getQueryData
  //   const cachedData = client.getQueryData(['miniblog', 'json'])
  //   console.log(cachedData);
  if (postId !== null) {
    return <Post postId={postId} goBack={() => setPostId(null)}></Post>
  }

  return (
    <>
      {data.map((data1) => {
        return (
          <div key={data1.id}>
            <>
              <a href="#" onClick={() => setPostId(data1.id)}>
                <h2>
                  {data1.id}- {data1.title}
                </h2>
              </a>
              <p>{data1.body}</p>
            </>
          </div>
        )
      })}
    </>
  )
}

// function Posts({ postId, goBack }) {
//   return (
//     <>
//       <a href="#" onClick={goBack}>
//         <h4>goBack</h4>
//       </a>
//       <h1>Active postID: {postId}</h1>
//     </>
//   )
// }
function Miniblog() {
  return (
    <>
      <h1>miniblog</h1>
      <GetData></GetData>
    </>
  )
}

export default Miniblog
