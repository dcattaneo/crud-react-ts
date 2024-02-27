import axios from "axios";
import { Tasks, FormFields } from "../types";

// getting all tasks
export const getTasksRequest = async () => {
  return await axios.get<Tasks[]>("http://localhost:4000/tasks");
};

// getting a task by id
export const getTaskRequest = async (id: string | undefined) => {
  return await axios.get(`http://localhost:4000/tasks/${id}`);
};

// creating a task
export const createTaskRequest = async (task: FormFields) => {
  return await axios.post<Tasks>("http://localhost:4000/tasks", task);
};

// deleting a task

export const deleteTaskRequest = async (id: number) => {
  return await axios.delete(`http://localhost:4000/tasks/${id}`);
};

// updating a task

export const updateTaskRequest = async (id: string, { title, description }: FormFields) => {
  return await axios.put(`http://localhost:4000/tasks/${id}`, {
    title,
    description,
  });
};

export const toggleDoneRequest = async (id: number, done: boolean) => {
  return axios.put(`http://localhost:4000/tasks/${id}`, {done});
};

//    POST method  example using fetch
// export const createTaskRequest = async (task: FormFields) => {
//     await fetch("http://localhost:4000/tasks", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         },
//         body: JSON.stringify(task),
//     })
//     .then((response)=> response.json())

//     .catch((error)=> console.log(error))
// }
