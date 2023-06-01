import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
    </div>
  );
}

export default Layout;
