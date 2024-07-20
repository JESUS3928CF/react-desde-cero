import Button from "../components/Button";
import TaskForm from "../components/TaskForm";
import { TasksList } from "../components/TasksList";

const Todo = () => {
  return (
      <>
          <TaskForm />
          <TasksList />
          <Button route={'/config'} />
      </>
  );
}

export default Todo
