import ProductCard from "@/features/dashboard/components/product-card";
import useMockData from "@/hooks/useMockData";
import React from "react";

interface DashboardProps {}

const Dashboard: React.FunctionComponent<DashboardProps> = () => {
  const { products } = useMockData();

  return (
    <div className="dashboard">
      {products.map((product) => (
        <ProductCard key={`product-card-${product.id}`} product={product} />
      ))}
    </div>
  );
};

export default Dashboard;
