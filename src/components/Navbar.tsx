import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className=" flex justify-between items-center text-center  px-10 py-2 font-semibold  text-slate-600  ">
      <div className="flex justify-center items-center">
        <h1>Notes App</h1>
      </div>
      <div>
        <ul className="flex">
          <li className="px-4 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="/new">Create note</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
