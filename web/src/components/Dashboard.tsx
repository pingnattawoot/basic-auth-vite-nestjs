import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Dashboard() {
  const navigate = useNavigate()
  const { logout, user } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome, {user?.email}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard 