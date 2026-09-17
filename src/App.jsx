import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <Layout sidebar={<Hero />}>
      <About />
      <Experience />

      <section id="projects" className="section">
        <h2 className="section-heading">
          <span className="section-number">03.</span>
          Projects
        </h2>

        <p>Projects section will go here.</p>
      </section>

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