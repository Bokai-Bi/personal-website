import Footer from "../components/footer.tsx";
import Header from "../components/header.tsx";
import KoishiNotFound from "../components/koishinotfound.tsx";

const KoishiError = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <KoishiNotFound />
      <Footer />
    </div>
  );
};

export default KoishiError;
