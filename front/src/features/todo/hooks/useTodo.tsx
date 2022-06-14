import { useState, useEffect } from "react";

type Todo = {
  period: Date;
  subject: string;
  content: string;
};
const createTodo = (period: Date, subject: string, content: string) => {
  return {
    period: period,
    subject: subject,
    content: content,
  };
};

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    setTodos([
      createTodo(new Date("2022-08-01"), "test", "shiken"),
      createTodo(new Date("2022-09-01"), "test2", "shiken2"),
      createTodo(new Date("2022-08-30"), "job", "shigoto"),
    ]);

    return () => {
      setTodos([]);
    };
  }, []);

  return { todos };
};
