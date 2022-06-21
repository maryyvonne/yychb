import { PROJECTCATEGORIES } from "../../app/shared/PROJECTCATEGORIES";

export const selectAllProjectCategories = () => {
  return PROJECTCATEGORIES
;
};

export const selectProjectCategoryById = (projectCategoryId) => {
  return PROJECTCATEGORIES.find((projectCategory) => projectCategory.projectCategoryId === parseInt(projectCategoryId));
};

export const selectFeaturedProjectCategory = () => {
  return PROJECTCATEGORIES.find((projectCategory) => projectCategory.featured);
};