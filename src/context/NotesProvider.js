import { createContext, useState } from "react";

const NotesContext = createContext({});

// export const NotesContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   return (
//     <NotesContext.Provider value={{ user, setUser }}>
//       {children}
//     </NotesContext.Provider>
//   );
// };
export default NotesContext;