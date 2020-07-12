import React, { useState, useEffect } from 'react'

function DataFetching() {
    const [post, setPost] = useState([]);
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleClick = () =>{
        setIdFromButtonClick(id);
    }

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setPost(res)
            })
            .catch(err => {
                console.log('Printing Error: ' + err)
            })

    }, [idFromButtonClick])

    return (
        <>
        <input type='text' value={id} onChange={e => setId(e.target.value)}/>
        <button onClick={handleClick}>Fetch Post</button>
        <div>
            {post.title}
        </div>
            {/* <ul>
                {
                    post.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul> */}
        </>
    )
}

export default DataFetching
