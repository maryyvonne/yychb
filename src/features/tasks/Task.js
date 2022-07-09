function Task({ task, onTglStatus }) {
  return (
    <div className="col-12 text-left" key={task.id}>
      <h4>{task.desc}</h4>
      <Button className="button icon-only clear" onClick={() => onTglStatus(task)}>
    > "⬜"
  </Button>;
    </div>
  );
}

export default Task;