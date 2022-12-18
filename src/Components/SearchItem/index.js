import './index.css'

const SearchItem = props => {
  const {listOfItems, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listOfItems

  const deleteClick = () => {
    deleteItem(id)
  }

  return (
    <li className="list-container">
      <div className="domine-container">
        <p className="time-text">{timeAccessed}</p>
        <div className="img-container">
          <img src={logoUrl} alt="domain logo" className="img-logo" />
          <div className="logo-img-container">
            <p className="time-text">{title}</p>
            <p className="domine-name time-text">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button onClick={deleteClick} className="button" testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="img-logo"
        />
      </button>
    </li>
  )
}

export default SearchItem
