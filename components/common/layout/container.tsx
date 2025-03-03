import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </section>
  );
};

export default Container;
