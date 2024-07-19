import { useDeleteTaskMutation, useGetTasksQuery, useUpdateTaskMutation } from "../api/apiSlice"

export const TasksList = () => {

    const {data: tasks, isError, isLoading, error} = useGetTasksQuery()

    const [ deleteTask ] =  useDeleteTaskMutation();


    const [ updateTask ] = useUpdateTaskMutation();


    if(isLoading) return <div>  cargando..</div>
    else if (isError) return <div> Error: {error.message}</div>

  return (
      <ul>
          {tasks.map((task) => (
              <li key={task.id}>
                  <h3>{task.name}</h3>
                  <p>{task.description}</p>
                  <button onClick={() => {
                   deleteTask(task.id);
                  }}>delete</button>
                  <input
                      type='checkbox'
                      id={task.id}
                      checked={task.completed}

                      /*/// aca lo usamos pasamos una copia de todo el objeto y actualizamos el completed  */
                      onChange={(e) => {
                        updateTask({
                            ...task,
                            completed: e.target.checked
                        })
                      }}
                  />
                  <label htmlFor={task.id}>completed</label>
              </li>
          ))}
      </ul>
  );
}
