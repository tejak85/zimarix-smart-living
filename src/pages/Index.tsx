import { Navbar } from "@/components/Navbar";
import { ZimarixLandingPage } from "@/components/ZimarixLandingPage";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ZimarixLandingPage />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
