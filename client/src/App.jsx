import React, { useState } from "react";
import Registration from "./registration";
import Login from "./login";
import Main from "./1page/pages";
import Homez3 from "./z3 1block";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import SecondPage from "./secondpage";

function App() {

  const [signed, setSigned] = useState(false);

  const handleSigned = () => {
    setSigned(!signed);
    console.log(signed);
  }
  
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login handleSigned={handleSigned}/>} />
            <Route path="/creating" element={<Homez3 />} />
            <Route path="/catalog" element={<SecondPage />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
