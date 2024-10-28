import { Link, useLoaderData } from "react-router-dom"

const Blog = () => {

  const posts = useLoaderData()

  return (
    <>
      <h2>My Blog Posts</h2>
      {posts.map(post => (
        <div key={post.title}>
          <Link to={`/blogs/${post.id}`}>{post.title}</Link>
        </div >
      ))}
    </>
  )
}

export default Blog