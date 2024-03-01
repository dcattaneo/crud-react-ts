import { useTasks } from "../hooks/useTasks";
import { useNavigate } from "react-router-dom";

export function TaskCard() {
  const { tasks, handleDelete, handleDone } = useTasks();
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-full h-full">
      {tasks.length >= 1 ? (
        tasks.map((task) => (
          <div
            key={task.id}
            className="group min-h-[170px]   flex flex-col justify-between  items-center   m-2 p-2   border-[1.5px] border-solid border-slate-300  hover:border-slate-400 shadow-sm hover:shadow-md rounded-md transition-all "
          >
            <div
              role="textbox"
              aria-multiline="true"
              className="flex flex-col h-full w-full  opacity-60 group-hover:opacity-100   py-2 px-2  overflow-x-hidden pb-10 whitespace-pre-wrap break-words content-between box-border "
            >
              <h2 className=" font-semibold pb-5">{task.title}</h2>
              <p className="h-full w-full font-normal">{task.description}</p>
            </div>
            <div className="flex w-full  items-center  justify-between   ">
              <div className="flex justify-center items-center  ">
                <button onClick={() => navigate(`/edit/${task.id}`)}>
                  edit
                </button>
                <button onClick={() => handleDelete(task.id)}>delete</button>
              </div>

              <div>
                <button
                  className="border-none"
                  onClick={() => handleDone(task.id)}
                >
                  {task.done ? "✔" : "✖"}
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        
        <div className="text-xs md:text-base">You have no pending tasks</div>
        
        
      )}
    </div>
  );
}
