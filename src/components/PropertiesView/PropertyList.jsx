import React,{useContext, useEffect} from 'react'
import PropertiesContext from '../../context/PropertiesProvider'

export default function PropertyList() {
  const { user, setUser } = useContext(PropertiesContext);

  const checkIfUserIsLogged = () => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      //noteService.setToken(user);
      setUser(user);
    }
  };
  useEffect(() => {
    checkIfUserIsLogged();
  }, [])
  return (
    <div>PropertyList {user?.username}</div>
  )
}
