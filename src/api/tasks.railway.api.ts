import axios from "axios";
import { Tasks, FormFields } from "../types";

// https://crud-node-mysql-production.up.railway.app/tasks

// getting all tasks
export const getTasksRequest = async () => {
    return await axios.get<Tasks[]>("https://crud-node-mysql-production.up.railway.app/tasks");
  };
  
  // getting a task by id
  export const getTaskRequest = async (id: string | undefined) => {
    return await axios.get(`https://crud-node-mysql-production.up.railway.app/tasks/${id}`);
  };
  
  // creating a task
  export const createTaskRequest = async (task: FormFields) => {
    return await axios.post<Tasks>("https://crud-node-mysql-production.up.railway.app/tasks", task);
  };
  
  // deleting a task
  
  export const deleteTaskRequest = async (id: number) => {
    return await axios.delete(`https://crud-node-mysql-production.up.railway.app/tasks/${id}`);
  };
  
  // updating a task
  
  export const updateTaskRequest = async (id: string, { title, description }: FormFields) => {
    return await axios.put(`https://crud-node-mysql-production.up.railway.app/tasks/${id}`, {
      title,
      description,
    });
  };
  
  export const toggleDoneRequest = async (id: number, done: boolean) => {
    return axios.put(`https://crud-node-mysql-production.up.railway.app/tasks/${id}`, {done});
  };
  