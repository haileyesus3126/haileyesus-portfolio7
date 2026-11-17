import "./EmailSidebar.css";

function EmailSidebar() {
  return (
    <div className="email-sidebar">
      <a
        href="mailto:haileyesus2024@gmail.com"
        aria-label="Email Haileyesus at haileyesus2024@gmail.com"
      >
        haileyesus2024@gmail.com
      </a>

      <span
        className="email-sidebar-line"
        aria-hidden="true"
      />
    </div>
  );
}

export default EmailSidebar;