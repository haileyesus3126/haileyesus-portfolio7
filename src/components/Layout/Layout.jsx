import "./Layout.css";

function Layout({ sidebar, children }) {
  return (
    <div className="portfolio-layout">
      <aside
        className="portfolio-sidebar"
        aria-label="Portfolio introduction"
      >
        <div className="portfolio-sidebar-inner">
          {sidebar}
        </div>
      </aside>

      <main
        id="main-content"
        className="portfolio-content"
        tabIndex="-1"
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;