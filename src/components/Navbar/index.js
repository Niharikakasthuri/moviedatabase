import {Link, withRouter} from 'react-router-dom'

import SearchMoviesContext from '../../context/SearchMoviesContext'
import './index.css'

const NavBar = props => {
  const renderSearchBar = () => (
    <SearchMoviesContext.Consumer>
      {value => {
        const {onTriggerSearchingQuery, onChangeSearchInput, searchInput} =
          value

        const onChangeHandler = event => onChangeSearchInput(event.target.value)

        const onSearchHandler = event => {
          event.preventDefault()
          const {history} = props
          onTriggerSearchingQuery()
          history.push(`/search`)
        }

        return (
          <div className="d-flex align-items-center">
            <input
              type="text"
              className="me-2 search-input"
              onChange={onChangeHandler}
              value={searchInput}
              placeholder="Search"
            />
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={onSearchHandler}
            >
              Search
            </button>
          </div>
        )
      }}
    </SearchMoviesContext.Consumer>
  )

  return (
    <div>
      <nav className="navbar-top">
        <div className="navbar-align">
          <div>
            <h1>movieDB</h1>
          </div>
          <div className="navbar-align">
            <ul>
              <li className="nav-items">
                <Link className="nav-name" to="/">
                  Popular
                </Link>
              </li>
              <li className="nav-items">
                <Link className="nav-name" to="/top-rated">
                  Top Rated
                </Link>
              </li>
              <li className="nav-items">
                <Link className="nav-name" to="/upcoming">
                  Upcoming
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {renderSearchBar()}
    </div>
  )
}

export default withRouter(NavBar)
