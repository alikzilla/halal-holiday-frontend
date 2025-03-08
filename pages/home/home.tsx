import { MainLayout as Layout } from "@/components/common";
import { Hero } from "./components";

const Homepage = () => {
  return (
    <Layout isTransparent={true}>
      <Hero />
    </Layout>
  );
};

export default Homepage;
