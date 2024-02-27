import { useTasks } from "../hooks/useTasks";

export function TasksForm() {
  const {
    taskById,
    formData,
    params,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useTasks();

  return (
    <div className="flex flex-col  justify-center items-center mx-auto w-full h-full p-20">
      <h1 className="font-semibold text-gray-600 ">{params.id ? "Update note" : "New note"}</h1>
      <form
        className="   flex flex-col justify-center items-center    m-2 p-4 border-[1.5px] border-solid border-slate-300  hover:border-slate-400 shadow-sm hover:shadow-md rounded-md transition-all"
        onSubmit={handleSubmit}
      >
        <input
          className="text-center px-2 py-1 rounded-md w-full border-solid border-[1.5px] m-2    border-slate-300  hover:border-slate-600 transition duration-200"
          type="text"
          placeholder="title"
          name="title"
          value={params.id ? taskById?.title : formData.title}
          onChange={handleChange}
        />

        <textarea
          className="text-center    px-2 py-1 rounded-md w-full resize-none overflow-x-hidden  border-solid border-[1.5px] m-2 border-slate-300  hover:border-slate-600 transition duration-200"
          placeholder="description"
          name="description"
          value={params.id ? taskById?.description : formData.description}
          onChange={handleChange}
        />

        <button disabled={isSubmitting} className="m-2">
          {isSubmitting ? "saving" : "save"}
        </button>
      </form>
    </div>
  );
}
