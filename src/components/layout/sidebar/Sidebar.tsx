import './sidebar.scss';
import Nav from '../nav/Nav';

const Sidebar = () => {
  return (
      <aside className="sidebar">
        <header className="sidebar__header">
          <div className="sidebar__company-name">Competitive Database</div>
          <div className="sidebar__subtitle">ALDI SUD Dienstleistungs-SE & co.oHG</div>
        </header>
        <Nav />
      </aside>
  );
};

export default Sidebar;