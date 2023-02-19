import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageContent from "./components/PageContents";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <SideMenu />
        <PageContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
