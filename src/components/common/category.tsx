import useMockData from "@/hooks/useMockData";
import { Flex } from "antd";
import React, { Fragment } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

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
          gap={5}
        >
          <span className="categiry-item__name">{category.name}</span>

          {!!category.children.length && (
            <Fragment>
              <MdKeyboardArrowDown className="categiry-item__icon" />
              <div className="categiry-item__childs">
                {category.children.map((categoryLevelTwo) => (
                  <span>{categoryLevelTwo.name}</span>
                ))}
              </div>
            </Fragment>
          )}
        </Flex>
      ))}
    </Flex>
  );
};

export default Category;
