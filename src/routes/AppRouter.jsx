import { Route, Switch, withRouter } from 'react-router-dom';
import CardsPage from '../components/CardsPage/CardsPage';
import DecompositionPage from '../components/DecompositionPage/DecompositionPage';
import CollapsePage from '../components/CollapsePage/CollapsePage';

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={CardsPage} />
      <Route path="/decomposition" component={DecompositionPage} />
      <Route path="/collapse" component={CollapsePage} />
    </Switch>
  );
};

export default withRouter(AppRouter);
