import React,{useState, useEffect} from 'react'

function DataFetching() {
   const [posts, setPosts] = useState([]);

   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => {
        setPosts(res)
    })
    .catch(err=>{
        console.log('Printing Error: '+err)
    })

   })

    return (
        <div>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                        
                    ))
                }
            </ul>
        </div>
    )
}

export default DataFetching
