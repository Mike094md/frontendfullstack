// import Note from "./components/Note";
// import Form from 'react-bootstrap/Form'
// import noteService from './services/notes'
import { useState, useEffect } from 'react'
import LoginForm from "./components/LoginForm";
import RegiserForm from "./components/RegisterForm"
import NotesList from "./components/NotesList";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import noteService from "./services/notes";



function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  const ProtectedRoute = ({ children }) => {
    if (user) {
      return children
    } else {
      return <Navigate to="/login" />
    }
  }
  

  return (
    <div className="App">
      {/* <div className="container-fluid bg-dark mb-5 d-flex justify-content-center align-items-center" style={{ height: '80px'}}>
      <h1 className="fs-1 text-center text-light">Bienvenido a React js</h1>
    </div> */}
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegiserForm />}></Route>
          <Route path="/" element={<ProtectedRoute><NotesList /></ProtectedRoute>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
