import React, { useState, useEffect } from 'react'

function DataFetching() {
    const [post, setPosts] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setPosts(res)
            })
            .catch(err => {
                console.log('Printing Error: ' + err)
            })

    }, [])

    return (
        <>
            <ul>
                {
                    post.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default DataFetching
