import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CrumbItem } from "@/core/components/types";

const useBreadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<CrumbItem[]>([]);

  useEffect(() => {
    // remove query params from URL
    const pathWithoutQuery = router.asPath.split("?")[0];

    // convert URL path to array
    let pathArray = pathWithoutQuery.split("/");
    // remove first item in array
    pathArray.shift();
    // remove any empty path
    pathArray = pathArray.filter(path => path !== "");

    // build array with href & label object
    const currBreadcrumbs = pathArray.map((currPath, index) => {
      const path = "/" + pathArray.slice(0, index + 1).join("/");

      return {
        path,
        isLast: index === pathArray.length - 1,
        label: currPath.charAt(0).toUpperCase() + path.slice(2),
      };
    });

    setBreadcrumbs(currBreadcrumbs);
  }, [router.asPath]);

  // return breadcrumbs;
  return [
    { path: "/", label: "Home", isLast: breadcrumbs.length === 0 },
    ...breadcrumbs,
  ];
};

export default useBreadcrumbs;
