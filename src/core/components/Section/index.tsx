import { PropsWithChildren } from "react";
import clsx from "clsx";

import { SectionProps } from "../meta/i-section";

const Section = ({
  centered = true,
  children,
  ...props
}: PropsWithChildren<SectionProps>) => {
  return (
    <section
      className={clsx("mb-4", { "container mx-auto": centered })}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
