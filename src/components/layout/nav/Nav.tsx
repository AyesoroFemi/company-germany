import './nav.scss';
import { NavLink } from 'react-router-dom';
import routes from '../../../router/routes';
// import { ReactComponent as IconCompanies } from '../../../assets/images/business-sharp.svg';
// import { ReactComponent as IconNews } from '../../../assets/images/newspaper-sharp.svg'
// import { ReactComponent as IconTags } from '../../../assets/images/pricetags-sharp.svg';
import { BiBuildings } from "react-icons/bi";
import { AiOutlineTags} from "react-icons/ai";
import { RiNewspaperLine } from "react-icons/ri";

const Nav = () => {
  return (
      <nav className="nav">
        <NavLink to={routes.company.path} className="nav__link">
        <div><BiBuildings size={32} /></div> <div className="route-name">{routes.company.label}</div>
        </NavLink>
        <NavLink to={routes.tags.path} className="nav__link">
        <div><AiOutlineTags size={32} /></div> <div className="route-name">{routes.tags.label}</div>
        </NavLink>
        <NavLink to={routes.news.path} className="nav__link">
        <div> <RiNewspaperLine size={32} /></div> <div className="route-name">{routes.news.label}</div>
        </NavLink>
      </nav>
  );
};

export default Nav;