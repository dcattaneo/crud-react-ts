import { TaskCard } from "./../components/index";

export function TasksPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full p-20 ">
        <h1 className="font-semibold text-gray-600 pb-2">My notes</h1>
        <TaskCard />
      </div>
    </>
  );
}
