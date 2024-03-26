import Homepage from "./components/Containers/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TicketsPage from "./components/Containers/TicketsPage";
import Nav from "./components/Nav/Nav";

import "./styles/App.scss";
import ProfilePage from "./components/Containers/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/tickets" element={<TicketsPage />}></Route>
          <Route path="/employee/:id" element={<ProfilePage />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
