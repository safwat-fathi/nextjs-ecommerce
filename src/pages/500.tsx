import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";

const Custom500 = () => {
  return <h1>Custom 500 page</h1>;
};

export default renderWithLayout(Custom500, LayoutsENUM.ERROR);
