const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">L</div>
        <span>Lead Tracker</span>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-item active">
          <span>▣</span>
          <span>Leads</span>
        </div>
      </nav>

      <div className="sidebar-footer">
        <span className="status-dot" />
        <div>
          <p>Backend Connected</p>
          <span>API v1.0</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;