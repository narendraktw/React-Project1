import React,{useState, useEffect} from 'react'

function DataFetchUseState() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/1`
        fetch(url)
            .then(response => response.json())
            .then(response => {
                //console.log(response)
                setLoading(false)
                setPost(response)
                setError('')
            })
            .catch(error => {
                //console.log('Printing Error: ' + err)
                setLoading(false)
                setPost({})
                setError('something went wrong: '+ error)
            })

    }, []) 

    return (
        <div>
            {loading ? 'loading': post.title}
            {error ? error:null}
        </div>
    )
}

export default DataFetchUseState
