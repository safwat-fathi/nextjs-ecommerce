import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";

const Custom404 = () => {
  return <h1>Custom 404 page</h1>;
};

export default renderWithLayout(Custom404, LayoutsENUM.ERROR);
