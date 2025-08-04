import { useState } from "react";
import TaskCard from "../components/TaskCard";
import TodoModal from "../components/Modal";
import { type TaskCardProps } from "../libs/Todolist";

export default function TodolistPage() {
  // รายการเริ่มต้น
  const [tasks, setTasks] = useState<TaskCardProps[]>([
    {
      id: "1",
      title: "Read a book",
      description: "Vite + React + Bootstrap + TS",
      isDone: false,
    },
    {
      id: "2",
      title: "Write code",
      description: "Finish project for class",
      isDone: false,
    },
    {
      id: "3",
      title: "Deploy app",
      description: "Push project to GitHub Pages",
      isDone: false,
    },
  ]);

  // เพิ่ม task ใหม่
  const handleAdd = (newTask: TaskCardProps) => {
    setTasks([...tasks, newTask]);
  };

  // ลบ task ตาม id
  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // toggle สถานะ isDone
  const toggleDoneTask = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <div className="container text-center my-4">
      <h2>Todo List</h2>

      {/* ✅ แสดงจำนวนรายการทั้งหมด + รายการที่เสร็จแล้ว */}
      <span className="m-2">
  All : {tasks.length} | Done : {tasks.filter(task => task.isDone).length}
</span>


      {/* ✅ ปุ่ม Add */}
      <button
        type="button"
        className="btn btn-primary mx-2"
        data-bs-toggle="modal"
        data-bs-target="#todoModal"
      >
        Add
      </button>

      {/* ✅ Modal สำหรับเพิ่มรายการ */}
      <TodoModal onAdd={handleAdd} />

      {/* ✅ แสดง Task แต่ละรายการ */}
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          isDone={task.isDone}
          deleteTaskFunc={deleteTask}
          toggleDoneTaskFunc={toggleDoneTask}
        />
      ))}
    </div>
  );
}
