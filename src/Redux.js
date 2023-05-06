import { connect } from "react-redux";
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
  }
};

const TodoList = ({ todos, addTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={() => addTodo("New Todo")}>Add Todo</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) =>
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: new Date().getTime(),
          text,
        },
      }),
  };
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
export default connect(mapStateToProps, mapDispatchToProps);
