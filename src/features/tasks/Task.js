function Task({ task }) {
  return (
    <div className="col-12 text-left" key={task.id}>
      <h4>{task.desc}</h4>
    </div>
  );
}

export default Task;