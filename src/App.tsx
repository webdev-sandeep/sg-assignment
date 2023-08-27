import Announcement from "./components/Announcement";
import Hero from "./components/Hero";
import Products from "./components/Products";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Announcement />
      <main className="relative">
        <Hero />
        <Products />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
};

export default App;
