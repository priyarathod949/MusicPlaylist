import {BsFillTrashFill} from 'react-icons/bs'

import './index.css'

const MusicItems = props => {
  const {musicList, deleteItem} = props
  const {id, imageUrl, name, genre, duration} = musicList

  const onClickDeleteButton = () => {
    deleteItem(id)
  }

  return (
    <li className="musicItem">
      <div className="musicContainer">
        <div className="image-text">
          <img src={imageUrl} alt="track" className="image" />
          <div className="name-genreContainer">
            <p className="name">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>

        <div className="duration-deleteContainer">
          <p className="duration">{duration}</p>
          <button
            type="button"
            className="deleteButton"
            data-testid="delete"
            onClick={onClickDeleteButton}
          >
            <BsFillTrashFill className="delete" size={25} />
          </button>
        </div>
      </div>
    </li>
  )
}

export default MusicItems
