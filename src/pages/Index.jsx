import { useEffect, useState } from 'react'
import Article from '../components/Article'
import Search from '../components/Search'
import postData from '../posts.json'
const HomePage = () => {
  const [posts, setPosts] = useState(postData)
  const [totalPosts, setTotalPosts] = useState(0);
  const [externalPost, setExternalPost] = useState([])

  const onSearchChange = (value) => {

    const filteredPosts = postData.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase()) || post.tags.some((tag) => tag.toLowerCase().includes(value.toLowerCase()))
    )
    setPosts(filteredPosts)
    setTotalPosts(filteredPosts.length)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(
        (response) => response.json())
      .then(res => setExternalPost(res));
  }, [])
  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map((post) => (
        <div key={post.title} >
          <Article title={post.title} tags={post.tags} date={post.date} isNew={post.isNew} />
        </div>
      ))}
      <hr />
      <h2>External Posts</h2>
      {externalPost.map((post) => (
        <div key={post.id}>
          <h3>-{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  )
}

export default HomePage