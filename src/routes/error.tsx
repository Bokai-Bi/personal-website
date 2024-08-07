import Footer from "../components/footer.tsx";
import Header from "../components/header.tsx";
import NotFound from "../components/notfound.tsx";

const Error = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <NotFound />
      <Footer />
    </div>
  );
};

export default Error;
