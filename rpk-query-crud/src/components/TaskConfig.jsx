import { useGetTasksQuery } from "../api/apiSlice";

const TaskConfig = () => {
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery();

  if (isLoading) return <div>cargando..</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
      <div>
          <h1>Información de Tareas</h1>
          <ul>
              {tasks.map((task) => (
                  <li key={task.id}>
                      <h3>{task.name}</h3>
                      <p>{task.description}</p>
                  </li>
              ))}
          </ul>
      </div>
  );
}

export default TaskConfig