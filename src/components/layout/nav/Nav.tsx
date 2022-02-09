import './nav.scss';
import { NavLink } from 'react-router-dom';
import routes from '../../../router/routes';
import { ReactComponent as IconCompanies } from '../../../assets/images/business-sharp.svg';
import { ReactComponent as IconNews } from '../../../assets/images/newspaper-sharp.svg'
import { ReactComponent as IconTags } from '../../../assets/images/pricetags-sharp.svg';

const Nav = () => {
  return (
      <nav className="nav">
        <NavLink to={routes.company.path} className="nav__link">
        <div><IconTags /></div> <div className="route-name">{routes.company.label}</div>
        </NavLink>
        <NavLink to={routes.tags.path} className="nav__link">
        <div><IconTags /></div> <div className="route-name">{routes.tags.label}</div>
        </NavLink>
        <NavLink to={routes.news.path} className="nav__link">
        <div><IconTags /></div> <div className="route-name">{routes.news.label}</div>
        </NavLink>
      </nav>
  );
};

export default Nav;