import { Route, Switch, withRouter } from 'react-router-dom';
import NotesList from '../components/NotesList/NotesList';
import WorldClock from '../components/WorldClock/WorldClock';

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={WorldClock} />
      <Route path="/crud" exact component={NotesList} />
    </Switch>
  );
};

export default withRouter(AppRouter);
