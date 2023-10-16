import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import './index.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = prop => {
  const {itemList} = prop
  const settings = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {itemList.map(each => (
          <MovieItem key={each.id} movieDetails={each} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
