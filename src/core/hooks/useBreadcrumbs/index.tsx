import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { CrumbItem } from "@/core/components/types";

const useBreadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<CrumbItem[]>([]);
  const [isHome, setIsHome] = useState(true);

  const breadcrumbWithoutHyphens = (breadcrumb: string) => {
    return breadcrumb.split("-").join(" ");
  };

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
      const path = "/" + currPath;
      const label = breadcrumbWithoutHyphens(
        currPath.charAt(0).toUpperCase() + path.slice(2)
      );

      return {
        path,
        isLast: index === pathArray.length - 1,
        label,
      };
    });

    setBreadcrumbs(currBreadcrumbs);
    setIsHome(currBreadcrumbs.length === 0);
  }, [router.asPath]);

  return {
    breadcrumbs: [
      { path: "/", label: "Home", isLast: breadcrumbs.length === 0 },
      ...breadcrumbs,
    ],
    isHome,
  };
};

export default useBreadcrumbs;
