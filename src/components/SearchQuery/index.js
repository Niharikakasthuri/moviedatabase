import Loader from 'react-loader-spinner'

import MovieCard from '../MovieCard'

const SearchQuery = () => {
  const renderEmptyView = () => (
    <div>
      <h1>No results found.</h1>
      <p>Don not get worried, Try to search again.</p>
    </div>
  )

  const renderMoviesList = searchResponse => {
    const {results} = searchResponse

    if (!results.length) {
      return renderEmptyView()
    }
    return (
      <ul>
        {results.map(movie => (
          <MovieCard key={movie.id} movieDetails={movie} />
        ))}
      </ul>
    )
  }

  const renderLoadingView = () => (
    <div>
      <Loader type="TailSpin" color="#032541" />
    </div>
  )

  const renderSearchResultViews = value => {
    const {searchResponse, apiStatus} = value

    switch (apiStatus) {
      case 'IN_PROGRESS':
        return renderLoadingView()
      case 'SUCCESS':
        return renderMoviesList(searchResponse)
      default:
        return renderEmptyView()
    }
  }

  return (
    <>
      <div className="route-page-body">{renderSearchResultViews(value)}</div>
    </>
  )
}
export default SearchQuery
