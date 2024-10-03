import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTodo = () => {
  const navigate = useNavigate();

  const saveTodo = async (event) => {
    event.preventDefault();
    // collect form input
    const formData = new FormData(event.target);
    // post data todo api
    await axios.post('https://todo-api-olfc.onrender.com/todos', {
      title: formData.get('todo')
    });
    // goto the hompage
    navigate("/");
  };

  return (
    <div>
      <h1>Add A New Todo</h1>
      <form onSubmit={saveTodo}>
        <input type="text" placeholder="Enter your todo" required name="todo"/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
