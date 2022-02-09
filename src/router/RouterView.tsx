import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import routes from './routes';

import Tags from '../components/views/examples/Examples';
import CompanyTags from '../components/views/company/Company';
import TagTags from '../components/views/examples/Examples';
import NewsTags from '../components/views/examples/Examples';

const RouterView = () => {
  return (<Routes>
    <Route path={routes.examples.path} element={<Tags />} />
    <Route path={routes.company.path} element={<CompanyTags />} />
    <Route path={routes.tags.path} element={<TagTags />} />
    <Route path={routes.news.path} element={<NewsTags />} />
  </Routes>);
};

export default RouterView;
