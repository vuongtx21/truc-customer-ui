import { ProductProps } from "@/models/product";
import { Flex } from "antd";
import React from "react";

interface ProductCardProps {
  product: ProductProps;
}

const ProductCard: React.FunctionComponent<ProductCardProps> = ({
  product,
}) => {
  return (
    <Flex vertical align="center" gap={15} className="product-card">
      <img className="product-card__img" src={product.imgUrl} alt="product" />
      <span className="product-card__name">{product.name}</span>
      <Flex className="w-full" align="center" justify="flex-start">
        <span className="product-card__price">{`${product.price}₫`}</span>
        <span className="product-card__unit">{`/ ${product.measureUnitName}`}</span>
      </Flex>
      <Flex className="w-full" align="center" justify="flex-start">
        <p className="product-card__specification">{product.specification}</p>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
