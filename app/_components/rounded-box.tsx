import { ReactNode } from "react";
import { cn } from "../_lib/utils";

export const RoundedBoxContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cn(className)}>{children}</div>;
};

const RoundedBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative z-50 rounded-tl-3xl rounded-tr-3xl bg-white py-5">
      {children}
    </div>
  );
};

export default RoundedBox;
