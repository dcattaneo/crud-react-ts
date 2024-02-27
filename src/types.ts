export type Tasks = {
  id: number;
  title?: string;
  description?: string;
  done: boolean | number;
  createdAt: Date;
};

export type FormFields = Pick<Tasks, "title" | "description" | "done">;

// equals to

// export type FormFields = {
//   title: string;
//   description: string;
// };
