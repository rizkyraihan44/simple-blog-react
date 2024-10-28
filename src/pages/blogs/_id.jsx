import { useLoaderData } from "react-router-dom"

const SinglePost = () => {

  const post = useLoaderData()
  return (
    <>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </>

  )
}

export default SinglePost