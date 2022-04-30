import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CheckSession } from './services/Auth'
import NavBar from './components/NavBar'
import PollPage from './pages/PollPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import CreateAPoll from './pages/CreateAPoll'
import Profile from './pages/Profile'
import PollOptions from './pages/PollOptions'
import CreateChoices from './pages/CreateChoices'
import './App.css';

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  }

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <NavBar
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Routes>
          <Route path="/" element={<PollPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn
            setUser={setUser}
            toggleAuthenticated={toggleAuthenticated} />} />
          <Route path="/create-poll" element={<CreateAPoll
            user={user} />} />
          <Route path="/profile/:user_id" element={<Profile
            user={user} />} />
          <Route path="/poll/pollInfo/:poll_id" element={<PollOptions />} />
          <Route path="/create-choice" element={<CreateChoices />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App;
