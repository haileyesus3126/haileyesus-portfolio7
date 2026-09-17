import "./Layout.css";

function Layout({ sidebar, children }) {
  return (
    <div className="portfolio-layout">
      <aside className="portfolio-sidebar">
        <div className="portfolio-sidebar-inner">
          {sidebar}
        </div>
      </aside>

      <main className="portfolio-content">
        {children}
      </main>
    </div>
  );
}

export default Layout;