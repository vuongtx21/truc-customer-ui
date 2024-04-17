import useMockData from "@/hooks/useMockData";
import { Flex } from "antd";
import React from "react";

interface CategoryProps {}

const Category: React.FunctionComponent<CategoryProps> = () => {
  const { categories } = useMockData();

  return (
    <Flex className="categories" align="center" justify="flex-start" gap={30}>
      {categories.map((category) => (
        <Flex
          align="center"
          className="categiry-item"
          key={`category-${category.id}`}
        >
          <span className="categiry-item__name">{category.name}</span>
          {!!category.children.length && (
            <div className="categiry-item__childs">
              {category.children.length}
            </div>
          )}
        </Flex>
      ))}
    </Flex>
  );
};

export default Category;
