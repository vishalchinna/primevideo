import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = prop => {
  const {moviesList} = prop

  const action = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedy = moviesList.filter(each => each.categoryId === 'COMEDY')
  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-logo"
      />
      <h1 className="title">Action Movies</h1>
      <MoviesSlider itemList={action} />
      <h1 className="title">Comedy Movies</h1>
      <MoviesSlider itemList={comedy} />
    </div>
  )
}

export default PrimeVideo
