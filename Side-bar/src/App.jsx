import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Messages from "./Pages/Messages";
import Analytics from "./Pages/Analytics";
import FileManager from "./Pages/FileManager";
import Order from "./Pages/Order";
import Saved from "./Pages/Saved";
import Setting from "./Pages/Setting";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
            <Route path="/analytics" element={<Analytics />}></Route>
            <Route path="/file-manager" element={<FileManager />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/saved" element={<Saved />}></Route>
            <Route path="/settings" element={<Setting />}></Route>
            <Route path="*" element={<>not found</>}></Route>
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
