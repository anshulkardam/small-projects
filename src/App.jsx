import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Components/Navbar'


function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(async res => {
        const data = await res.json();
        setPosts(data)

      })

  }, [])



  return (
     <>
        <Navbar />
         <div className='flex flex-wrap gap-8'>
      {posts.map((data) => (
        
        <div key={data.id} className='border border-black w-96 '>
          <h1>User {data.userId}</h1>
          <h2>title: {data.title}</h2>
          <h4>body: {data.body}</h4>
        </div>
       
        ))}
    </div>
    </>

  )
}



export default App
