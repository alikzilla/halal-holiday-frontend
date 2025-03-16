import { MainLayout as Layout } from "@/components/common";
import {
  DownloadApp,
  Hero,
  SignUp,
  TrustedCompanies,
} from "@/components/widgets";

const Transfer = () => {
  return (
    <Layout isTransparent={true}>
      <Hero
        title="Transfers for a Smooth Travel Experience"
        subtitle="Choose from our wide range of rental cars for any journey. Book now for comfort and convenience!"
        button_text="Discover Features"
        background_image="transfer-hero"
      />
      <TrustedCompanies />
      {/* Top transfer routes */}
      {/* Reliable Car Transfer Services Across the Globe */}
      {/* Transfer Services in Worldwide */}
      <DownloadApp />
      {/* Popular car transfers destinations */}
      <SignUp />
    </Layout>
  );
};

export default Transfer;
