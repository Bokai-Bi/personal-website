import Header from "../components/header.tsx";
import NotFound from "../components/notfound.tsx";

const Error = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <NotFound />
    </div>
  );
};

export default Error;
