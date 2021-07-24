import UserProfile from './Components/UserProfile'

import './App.css'

const userDetailsList = [
  {
    uniqueId: 1,
    url: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Pradeep',
    role: 'Software Developer',
  },
  {
    uniqueId: 2,
    url: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Pradeep',
    role: 'Software Developer',
  },
  {
    uniqueId: 3,
    url: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Pradeep',
    role: 'Software Developer',
  },
  {
    uniqueId: 4,
    url: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Pradeep',
    role: 'Software Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueId} />
      ))}
    </ul>
  </div>
)

export default App
