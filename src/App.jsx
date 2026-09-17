import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects";

function App() {
  return (
    <Layout sidebar={<Hero />}>
      <About />
      <Experience />
      <FeaturedProjects />

      <section id="contact" className="section">
        <h2 className="section-heading">
          <span className="section-number">04.</span>
          Contact
        </h2>

        <p>Contact section will go here.</p>
      </section>
    </Layout>
  );
}

export default App;