import { Routes, Route } from "react-router-dom";
import { TasksPage, TasksForm, NotFound } from "./pages/index";
import { Navbar } from "./components/index";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<TasksPage />}></Route>
            <Route path="/new" element={<TasksForm />}></Route>
            <Route path="/edit/:id" element={<TasksForm />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
