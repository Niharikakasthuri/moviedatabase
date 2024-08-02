import {Link} from 'react-router-dom'
import './index.css'
const MovieCard = props => {
  const {movieDetails} = props
  const {id, title, posterPath, voteAverage} = movieDetails

  return (
    <div className = "container">
    <div className = "row">
    <div className = "col-12 col-sm-6 col-lg-2 mb-3">
    <li className="nav-items">
      <img className="image" alt={title} src={posterPath} />
      <div>
        <h1>{title}</h1>
        <p>Rating: {voteAverage}</p>
      </div>
      <Link to={`/movie/${id}`}>
        <button className="button" type="button">
          View Details
        </button>
      </Link>
    </li>
    </div>
    </div>
    </div>
  )
}
export default MovieCard
