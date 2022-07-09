import { TASKITEMS } from "../../app/shared/TASKITEMS"
import { PROJECTCATEGORIES } from "../../app/shared/PROJECTCATEGORIES";

// Select all Tasks 
export const selectAllTasks = () => {
  return TASKITEMS
}
// Select tasks by category

// if task category equals project category, then push it to the category tasks array (categoryTasks)

export const selectTasksByCategoryId = (projectCategory) => {
  return TASKITEMS.filter((task) => task.projectCategory === parseInt(projectCategory))
}