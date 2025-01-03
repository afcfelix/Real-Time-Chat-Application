import React from "react";
import "./App.css"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import ChatProvider from "./context/ChatProvider";

function App() {
  return (

    <div className="App">
    <BrowserRouter>
    <ChatProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/chats' element={<ChatPage />} />
      </Routes>
      </ChatProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
