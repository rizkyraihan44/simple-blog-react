import { useState } from 'react'
import Article from '../components/Article'
import Search from '../components/Search'
import postData from '../posts.json'
const HomePage = () => {
  const [posts, setPosts] = useState(postData)
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value) => {

    const filteredPosts = postData.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase()) || post.tags.some((tag) => tag.toLowerCase().includes(value.toLowerCase()))
    )
    setPosts(filteredPosts)
    setTotalPosts(filteredPosts.length)
  }

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map((post) => (
        <div key={post.title} >
          <Article title={post.title} tags={post.tags} date={post.date} isNew={post.isNew} />
        </div>
      ))}
    </>
  )
}

export default HomePage