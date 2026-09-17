import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects";
import OtherProjects from "./components/OtherProjects/OtherProjects";
import Contact from "./components/Contact/Contact";
import EmailSidebar from "./components/EmailSidebar/EmailSidebar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Layout sidebar={<Hero />}>
        <About />
        <Experience />
        <FeaturedProjects />
        <OtherProjects />
        <Contact />
          <Footer />
      </Layout>
     

      <EmailSidebar />
    </>
  );
}

export default App;