import PropTypes from "prop-types"
import { useContext } from "react"
import { GlobalContext } from "../context";

const Article = ({ title, tags, date, isNew }) => {
  const user = useContext(GlobalContext);
  return (
    <>
      <h2>{title}</h2>
      <p>{date}. {tags.join(', ')} {isNew && '--New!'}</p>
      <small>Ditulis oleh {user.username}</small>
    </>
  )
}
Article.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  isNew: PropTypes.bool
}

export default Article