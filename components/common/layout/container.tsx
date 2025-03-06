import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <section className="mx-auto w-full px-4 sm:px-6 lg:px-[70px]">
      {children}
    </section>
  );
};

export default Container;
