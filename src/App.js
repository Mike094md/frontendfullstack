// import Note from "./components/Note";
// import Form from 'react-bootstrap/Form'
// import noteService from './services/notes'
import { useState, useEffect , createContext} from "react";
import LoginForm from "./components/LoginForm";
import RegiserForm from "./components/RegisterForm";
import NotesList from "./components/NotesList";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
// import noteService from "./services/notes";
// import NotesProvider, { NotesContextProvider } from "./context/NotesProvider";
import NotesContext from "./context/NotesProvider";

function App() {
  // const ProtectedRoute = ({ children }) => {
  //   if (user) {
  //     return children;
  //   } else {
  //     return <Navigate to="/login" />;
  //   }
  // };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegiserForm />}></Route>
          <Route path="/admin" element={<p>Administrador de inmuebles: Crear inmueble, ver tus inmuebles .....</p>}></Route>
          <Route path="/" element={<NotesList />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
