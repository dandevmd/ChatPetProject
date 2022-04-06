import { BrowserRouter as Router } from 'react-router-dom';
import AppRouting from './AppRouting';
import { auth } from './firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';

import Navigation from './components/Navigation/Navigation'
import Spinner from './components/Spinner/Spinner';


function App() {
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Spinner />
  }

  return (
    <Router>
      <Navigation />
      <AppRouting />
    </Router>

  );
}

export default App;
