// import {Component} from 'react'
// import './index.css'

// class SearchPlace extends Component {
//   state = {searchInput: '', searchItemList: ''}

//   changeValue = event => {
//     this.setState({
//       searchInput: event.target.value,
//     })
//   }

//   deleteItem = unqueNo => {
//     const {searchItemList} = this.setState
//     const searchDelete = searchItemList.filter(
//       echItem => echItem.id !== unqueNo,
//     )
//     this.setState({searchItemList: searchDelete})
//   }

//   render() {
//     const {historyItemList} = this.props
//     this.setState({searchItemList: historyItemList})
//     const {searchInput, searchItemList} = this.state
//     return (
//       <div className="top-container">
//         <div className="nav-bg-color">
//           <div className="history-img-container">
//             <img
//               src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
//               alt=""
//               className="history-img"
//             />
//           </div>
//           <div className="sub-container">
//             <div className="search-img-container">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/search-img.png"
//                 alt=""
//                 className="search-img"
//               />
//             </div>
//             <input
//               type="search"
//               placeholder="Search History"
//               className="input"
//               onChange={this.changeValue}
//             />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default SearchPlace
