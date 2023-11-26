import logo from './logo.svg';
import './App.css';
import facade from './apiFacade';
import {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserInput from './components/UserInput';
import WorkItems from './components/WorkItems';
import ChatResponse from './components/ChatResponse';

function App() {
  const [chatResponse, setChatResponse] = useState("");
  const [errorMessage, setErrorMessage] = useState("No Errors");
  const [userInput, setUserInput] = useState({input: "Hello"});
  const [workItems, setWorkItems] = useState([]);
  

  // const postChatRequest = async () => {
  //     await facade.fetchData("", setChatResponse, "POST", "Hello AI", setErrorMessage);
  //     console.log("fra get boats");
  // }

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks();
  //     setTasks(tasksFromServer);
  //   };
  //   getTasks();
  // }, []);

  // const fetchTasks = async () => {
  //   const res = await fetch("http://localhost:5000/tasks");
  //   const data = await res.json();
  //   console.log(data);
  //   return data;
  // };
  
  
  
  // useEffect((userInput) => {
  //   const getChatResponse = async (userInput) => {
  //     const chatResponse = await postChatRequest(userInput);
  //     setChatResponse(chatResponse);
  //     console.log(chatResponse);
  //   };
  //   getChatResponse();
  // }, []);

  const postChatRequest = async (userInput) => {
    console.log("fetch på vej - her er userInput: "+ JSON.stringify(userInput))
    const res = await fetch("http://localhost:7157/api/Function1", {
      // const res = await fetch("https://fa-aifetcher.azurewebsites.net/api/Function1?code=g7yDsjjjFCNilMDgeukje-awi2R6FyoDhnpbyAuHnwrNAzFua8ww5w==", {    
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
            <>
           
              {!workItems.length > 0 && <UserInput onInput={postChatRequest} />}

              {<ChatResponse chatResponse={chatResponse} />}

              {workItems.length > 0 ? (
                  <WorkItems workItems={workItems} />
              ) : (
                 <span>no workitems to show</span> 
                )}
            </>
          }
        />  
    
      </Routes> 

    </div>
  </Router>
  )
}

export default App;
