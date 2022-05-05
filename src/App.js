import { useState } from 'react'
import { useQuery } from 'react-query'
import Miniblog from './Miniblog'
import './App.css'
import client from './ReactQueryClient'

// const fetcher = (url) => {
//   return fetch(url).then((res) => {
//     return res.json()
//   })
// }
// function Button() {
//useQuery state-inactive, fetching, stale
// useQuery(
//   ['query1'],
//   () => {
//     return new Promise((resolve) =>
//       setTimeout(() => {
//         resolve(Math.random())
//       }, 2000),
//     )
//   },
// )

// dependent queries example
// const fetcher = (repo) => {
//   return fetch(`https://api.github.com/repos/${repo}`).then((res) =>
//     res.json(),
//   )
// }
//   const { data, error, isLoading, isIdle, isSuccess, isError } = useQuery(
//     ['github', 'facebook/redex'],
//     () => fetcher('facebook/redex'),
//     { enabled: true },
//   )
//   console.log({ data, error, isLoading, isIdle, isSuccess, isError })
//   if (isLoading) {
//     return <h2>Its loading</h2>
//   }
//   return (
//     <>
//       <h1>{data.name}</h1>
//       <h1>{data.description}</h1>
//       <button>I am a button </button>
//     </>
//   )
// }
// function App() {
//   const [visible, setVisible] = useState(true)
//   return (
//     <>
//       {visible && <Button></Button>}
//       <h1>Hello world</h1>
//       <button onClick={() => setVisible((visible) => !visible)}>
//         Toggle Button
//       </button>
//     </>
//   )
// }

//   const { data, error } = useQuery('post', () =>
//     fetcher('https://jsonplaceholder.typicode.com/todos/1'),
//   )

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello People4</h1>
//         <h1>data:{JSON.stringify(data)}</h1>
//         <h2>error:{error}</h2>
//       </header>
//     </div>
//   )
// }

function App() {
  return <Miniblog></Miniblog>
}
export default App
