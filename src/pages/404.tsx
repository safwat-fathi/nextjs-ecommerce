import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";

const NotFoundPage = () => {
  return <h1>Custom 404 page</h1>;
};

export default renderWithLayout(NotFoundPage, LayoutsENUM.ERROR);
