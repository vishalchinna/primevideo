import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = prop => {
  const {movieDetails} = prop
  const {thumbnailUrl, videoUrl} = movieDetails
  console.log(thumbnailUrl)
  return (
    <div className="container">
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" className="image" />}
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>

            <div className="nav-link-item">
              <ReactPlayer url={videoUrl} onClick={() => close()} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
