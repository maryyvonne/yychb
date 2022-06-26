import React from "react";

function TaskItem() {
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Task Item</h1>
      <ul class="nav nav-pills nav-justified">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Much longer nav link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  )
};

export default TaskItem;