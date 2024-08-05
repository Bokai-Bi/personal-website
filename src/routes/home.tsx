import Header from "../components/header.tsx";
import Readme from "../components/readme.tsx";
import Footer from "../components/footer.tsx";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <Readme />
      <Footer />
    </div>
  );
};

export default Home;
