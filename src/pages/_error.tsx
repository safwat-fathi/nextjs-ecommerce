import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";

const ErrorPage = () => {
  return <h1>Sorry, something went wrong</h1>;
};

export default renderWithLayout(ErrorPage, LayoutsENUM.CLEAN);
