import { ReactNode } from "react";
import { Footer, Header } from "@/components/ui";

const MainLayout = ({
  children,
  isTransparent,
}: {
  children: ReactNode;
  isTransparent: boolean;
}) => {
  return (
    <main>
      <Header isTransparent={isTransparent} />

      {children}

      <Footer />
    </main>
  );
};

export default MainLayout;
