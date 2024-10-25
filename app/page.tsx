import Image from "next/image";
import GlassIMG from "../public/glass.png";
import QRCodeGenerator from "./components/QRCodeGenerator/QRCodeGenerator";

const Home = () => {
  return (
    <div className="relative min-h-[100vh] h-full flex items-center justify-center">
      <QRCodeGenerator />
      <Image
        src={GlassIMG}
        alt="glass"
        width={1600}
        height={1200}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
      />
    </div>
  );
};
export default Home;
