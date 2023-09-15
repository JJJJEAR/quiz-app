import { createContext, useState } from "react";
import Menu from "./component/Menu";
import Quiz from "./component/Quiz";
import Score from "./component/Score";

import './App.css'

export const DataContext = createContext() 

function App() {
  const [appState, setAppState] = useState("menu")
  const [score,setScore] = useState(0)
  return (
  <>
    <DataContext.Provider value={{appState,setAppState,score,setScore}}>
    <div className="App">
      <h1>Web Development quiz</h1>
      {appState === "menu" && <Menu/>}
      {appState === "quiz" && <Quiz/>}
      {appState === "score" && <Score/>}
    </div>
  </DataContext.Provider>
  </>
  );
}

export default App;
