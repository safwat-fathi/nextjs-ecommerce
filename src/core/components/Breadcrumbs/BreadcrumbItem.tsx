import Link from "next/link";
import { CrumbItem } from "../meta";

const BreadcrumbItem = ({ label, path, isLast }: CrumbItem) => {
  // The last crumb is rendered as normal text since we are already on the page
  if (isLast) {
    return <li>{label}</li>;
  }
  // else it's a link
  return (
    <li className="text-accent">
      <Link href={path}>{label}</Link>
    </li>
  );
};

export default BreadcrumbItem;
