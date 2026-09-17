import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <Layout sidebar={<Hero />}>
      <section
        id="about"
        className="section"
      >
        <h2 className="section-heading">
          <span className="section-number">01.</span>
          About Me
        </h2>

        <p>
          About section will go here.
        </p>
      </section>

      <section
        id="experience"
        className="section"
      >
        <h2 className="section-heading">
          <span className="section-number">02.</span>
          Experience
        </h2>

        <p>
          Experience section will go here.
        </p>
      </section>

      <section
        id="projects"
        className="section"
      >
        <h2 className="section-heading">
          <span className="section-number">03.</span>
          Projects
        </h2>

        <p>
          Projects section will go here.
        </p>
      </section>

      <section
        id="contact"
        className="section"
      >
        <h2 className="section-heading">
          <span className="section-number">04.</span>
          Contact
        </h2>

        <p>
          Contact section will go here.
        </p>
      </section>
    </Layout>
  );
}

export default App;