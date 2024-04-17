export interface ChildCategoryLevelTwoProps {
  id: string;
  name: string;
  to: string;
  imgUrl: string;
}

export interface ChildCategoryProps {
  id: string;
  name: string;
  to: string;
  imgUrl: string;
  children: ChildCategoryLevelTwoProps[];
}

export interface CategoryProps {
  id: string;
  name: string;
  children: ChildCategoryProps[];
  to: string;
}
