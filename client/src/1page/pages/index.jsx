import Navbar from "../1 block/navbar/";
import Home from "../1 block/home/";
import Footer from "../footer/";
import Home2 from "../2 block/";
import Home3 from "../3 block";
import Home4 from "../4 block";
// jshint ignore:start

const Main = () => {
  return (
    <div className="Main">
      <Navbar />
      <Home />
      <Home2 />
      <Home3 />
      <Home4 />
      <Footer />
    </div>
  );
};
// jshint ignore:end

export default Main;
