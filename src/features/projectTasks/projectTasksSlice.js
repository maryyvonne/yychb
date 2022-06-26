import { TASKITEMS } from "../../app/shared/TASKITEMS"
import { PROJECTCATEGORIES } from "../../app/shared/PROJECTCATEGORIES";

export const selectAllProjectTasks = () => {
  return TASKITEMS;
};

export const selectProjectTaskById = (taskId) => {
  return TASKITEMS.find((taskItem) => taskItem.taskId === parseInt(taskId));
};

export const selectCompletedTasks = () => {
  return TASKITEMS.filter((taskItem) => taskItem.completed);
};

export const selectTaskByCategory =(projectCategory) => {
  return TASKITEMS.map((taskItem) => taskItem.projectCategory === (PROJECTCATEGORIES.category));
};