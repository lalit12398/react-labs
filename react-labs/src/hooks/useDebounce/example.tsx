import { useEffect, useState } from 'react'
import { useDebounce } from '.'

interface IPosts {
    body: string
    id: number
    title: string
    userId: number
}

function SearchBox() {
    const [posts, setPosts] = useState<IPosts[] | []>([])
    const [searchTerm, setSearchTerm] = useState('')

    const debouncedSearchTerm = useDebounce(searchTerm, 3000)

    //dummy fetch for posts on change of input after a certain delay
    useEffect(() => {
        fetch(
            `https://jsonplaceholder.typicode.com/posts?title=${debouncedSearchTerm}`
        )
            .then((res) => res.json())
            .then((res) => setPosts(res))
    }, [debouncedSearchTerm])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }
    return (
        <>
            <div>
                <label>useDebounce example</label>
                <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    value={searchTerm}
                />
                {posts.map((post) => (
                    <p>{post.title}</p>
                ))}
            </div>
        </>
    )
}

export default SearchBox
