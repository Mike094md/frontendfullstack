import Note from "./Note";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import noteService from "../services/notes";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    noteService.getAll().then((response) => {
      setNotes(response.data);
      console.log(response);
    });
  }, []);

  // Queremos guardar el usuario loggeado si lo está
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  //TODO: Implementar un boton para cerrar sesión y llamar a window.localStorage.clear()

  const addNote = (e) => {
    e.preventDefault();
    if (newNote === "") {
      alert("Debe escribir una nota!");
    } else {
      noteService
        .create({
          content: newNote.charAt(0).toUpperCase() + newNote.slice(1),
          date: new Date(),
          important: Math.random() < 0.5,
        })
        .then((response) => {
          setNotes(notes.concat(response.data));
          setNewNote("");
        })
        .catch(() => alert("Algo salio mal en post"));
    }
  };

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const toggleImportance = (id) => {
    const note = notes.find((note) => note.id === id);
    const nueva = { ...note, important: !note.important };
    noteService
      .update(id, nueva)
      .then((response) => {
        setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
      })
      .catch((error) => {
        alert(`the note ${id} was already deleted from the server`);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <>
      <button
        className="btn btn-primary btn-sm m-4"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show Importans" : "Show All"}
      </button>
      <h4 className="ms-4">
        {showAll ? "Todas las notas" : "Notas más importantes"}
      </h4>
      <ul>
        {notesToShow.map((note) => {
          return (
            <Note
              key={note.id}
              note={note}
              toggleImportance={toggleImportance}
            />
          );
        })}
      </ul>
      <Form onSubmit={addNote} style={{ width: "200px", margin: "2rem" }}>
        <Form.Group className="mb-3">
          <Form.Label>Escribe una nueva nota</Form.Label>
          <Form.Control type="text" value={newNote} onChange={handleChange} />
        </Form.Group>
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </Form>
    </>
  );
};

export default NotesList;
