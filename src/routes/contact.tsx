import Footer from "../components/footer";
import Header from "../components/header";
import ContactInfo from "../components/contactinfo";

const contact = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default contact;
