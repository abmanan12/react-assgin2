import './App.css';
import './index.css';

import 'bootstrap/dist/js/bootstrap.bundle';

// import Header from './components/Header';
// import Home from './pages/Home';
// import Footer from './components/Footer';
// import MidData from './pages/MidData'
// import Login from './pages/Login';

import Routes from './pages/Routes'
import UserContextProvider from './Contexts/UserContext';
import CountContextProvider from './Contexts/CountContext';
import AuthContextProvider from './Contexts/AuthContext';

function App() {
  return (
    <>

      {/* <Header />
      <main>
        <Home />
        <MidData />
        <Login />
      </main>
      <Footer /> */}

      <AuthContextProvider>
        <UserContextProvider>
          <CountContextProvider>
            <Routes />
          </CountContextProvider>
        </UserContextProvider>
      </AuthContextProvider>

    </>
  );
}

export default App;
