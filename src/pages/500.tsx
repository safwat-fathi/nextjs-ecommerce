import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";

const ServerErrorPage = () => {
  return <h1>Custom 500 page</h1>;
};

export default renderWithLayout(ServerErrorPage, LayoutsENUM.ERROR);
