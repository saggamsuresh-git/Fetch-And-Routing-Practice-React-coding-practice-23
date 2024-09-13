import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {each} = props
  const {author, avatarUrl, imageUrl, id, title, topic} = each
  //   console.log(author)
  return (
    <Link to={`/blogs/${id}`} className="link-style">
      <div className="blog-item-container">
        <div>
          <img src={imageUrl} alt={`image${id}`} className="image" />
        </div>
        <div className="topic-title-container">
          <h1 className="topic">{topic}</h1>
          <h1 className="title">{title}</h1>
          <div className="author-avatar-container">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
