
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <userContextprovider>
      <h1  >React with chai and share with important</h1>
      <Login/>
      <Profile/>
      
    </userContextprovider>
  )
}

export default App
