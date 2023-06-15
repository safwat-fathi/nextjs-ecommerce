import { SkeletonProps } from "../meta";
import GridSkeleton from "./GridSkeleton";
import ListSkeleton from "./ListSkeleton";

const Skeleton = ({ type }: SkeletonProps) => {
  return type === "list" ? <ListSkeleton /> : <GridSkeleton />;
};

export default Skeleton;
