import { Tasks, FormFields } from "../types";
import { useState, useEffect, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  getTaskRequest,
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
  updateTaskRequest,
  toggleDoneRequest,
} from "../api/tasks.railway.api";

const INITIAL_DATA = {
  title: "",
  description: "",
  done: 0,
};

export function useTasks() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [taskById, setTaskById] = useState<FormFields>(INITIAL_DATA);
  const [formData, setFormData] = useState<FormFields>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  //  Getting all tasks
  async function loadTasks() {
    try {
      const response = await getTasksRequest();
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // Getting a task by id

  async function loadTask() {
    try {
      const response = await getTaskRequest(params.id);
      // console.log(response);
      setTaskById(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect for getting all tasks
  useEffect(() => {
    loadTasks();
  }, []);

  //  useEffect for getting a single task

  useEffect(() => {
    params.id && loadTask();
    // console.log("loadingData");
  }, []);

  // Manipulating the form elements
  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (params.id) {
      setTaskById({ ...taskById, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Creating or updating task
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (params.id) {
      try {
        await updateTaskRequest(params.id, taskById);
        setIsSubmitting(false);
        setTaskById(INITIAL_DATA);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await createTaskRequest(formData);
        setIsSubmitting(false);
        setFormData(INITIAL_DATA);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Deleting task
  const handleDelete = async (currentId: number) => {
    try {
      // There is no need to filter tasks since backend is doing it. Here is the example for the UI:

      // const filteredTasks = tasks.filter((task) => {
      //   return task.id !== currentId;
      // });
      // setTasks(filteredTasks);
      await deleteTaskRequest(currentId);
      loadTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDone = async (id: number) => {
    try {
      const taskFound = tasks.find((task) => task.id === id);
      await toggleDoneRequest(id, taskFound?.done === 0 ? true : false);
      // There is no need to filter tasks since backend is doing it. Here is the example for the UI:
      loadTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    tasks,
    taskById,
    formData,
    params,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleDelete,
    handleDone,
  };
}
