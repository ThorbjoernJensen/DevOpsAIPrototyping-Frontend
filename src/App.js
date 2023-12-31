
import './styles/index.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserInput from './components/UserInput';
import WorkItems from './components/WorkItems';
import ChatResponse from './components/ChatResponse';

function App() {
  const [chatResponse, setChatResponse] = useState("What kind of software would you like to sketch?");
  const [errorMessage, setErrorMessage] = useState("No Errors");
  const [userInput, setUserInput] = useState({ input: "Hello" });
  const [workItems, setWorkItems] = useState([]);

  const postChatRequest = async (userInput) => {
    console.log("fetch på vej - her er userInput: " + JSON.stringify(userInput))

    
    // const res = await fetch("http://localhost:7157/api/Orchestrator", {
      // const res = await fetch("http://localhost:7157/api/Function1", {
      const res = await fetch("https://fa-aifetcher.azurewebsites.net/api/Function1?code=g7yDsjjjFCNilMDgeukje-awi2R6FyoDhnpbyAuHnwrNAzFua8ww5w==", {    
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInput),
    });
    const data = await res.json();
    console.log("recieved JSON as string: ", JSON.stringify(data));

    setWorkItems(data.workItems);
    setChatResponse(data.message);
    console.log("chatReponse:", chatResponse);
    console.log("data.message: ", data.message);

  };

  useEffect(() => {
    console.log("Updated workItems:", workItems);
    console.log("length of workitems: ", workItems.length)
  }, [workItems]);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <div className="row">
                <div className="col">       
                  <div className="row">       
                      {<ChatResponse chatResponse={chatResponse} />}                
                  </div>                
                  <div className="row alignBottom">
                    <div className="col">
                      {<UserInput onInput={postChatRequest} />}
                    </div>
                  </div>
                </div>
                <div className="col">
                  {workItems.length > 0 ? (
                    <WorkItems workItems={workItems} />
                  ) : (
                    <span> - no workitems to snow - </span>
                  )}
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
