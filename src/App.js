import React, { useContext } from "react";
import LoginForm from "./components/LoginForm";
import RegiserForm from "./components/RegisterForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PropertyForm from "./components/PropertyForm";
import HeaderNotes from "./components/HeaderNotes";
import { Navigate } from "react-router-dom";
import PropertiesContext from "./context/PropertiesProvider";
import { PropertyList } from "./components/PropertiesView";
import "./styles/scss/App.scss";
//import {Property, PropertyList} from "./components/PropertiesView/";

function App() {
    const { user } = useContext(PropertiesContext);

    const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegiserForm />}></Route>

          <Route element={<HeaderNotes />}>
            <Route path="/" element={<PropertyList />}></Route>

            <Route
              path="/publicar_anuncio"
              element={
                <ProtectedRoute>
                  <PropertyForm />
                </ProtectedRoute>
              }
            ></Route>
            
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
