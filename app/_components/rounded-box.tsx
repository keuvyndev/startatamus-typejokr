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
    <>
      {/* Layout para Mobile */}
      <div className="block lg:hidden">
        <div className="relative z-50 rounded-tl-3xl rounded-tr-3xl bg-white py-5">
          {children}
        </div>
      </div>
      {/* Layout para Desktop */}
      <div className="hidden lg:block">
        <div className="relative z-50 mt-[-1.2rem] rounded-tl-3xl rounded-tr-3xl bg-white py-5">
          {children}
        </div>
      </div>
    </>
  );
};

export default RoundedBox;
