import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default WebLayout;
