import UserProfile from './Components/UserProfile/index'

const userDetails = {
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  name: 'Mahesh rao',
  role: 'Software Developer',
}

const App = () => <UserProfile userDetails={userDetails} />

export default App
