import { GlobalStyles } from './GlobalStyles';
import Deploy from './components/UI/deploy/Deploy';
import Email from './components/UI/email/Email';
import Github from './components/UI/github/Github';
import Linkedin from './components/UI/linkedin/Linkedin';
import Router from './router/Router';

function App() {
  return (
    <>
      <Router />

      <GlobalStyles />
    </>
  );
}

export default App;
