import './App.css';
import 'navigation/RouterConfig';
import 'react-router-dom';
import "fontsource-roboto";
import HomeContainer  from 'pages/Home';
import LoginContainer from 'pages/LoginPage';


function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        {/* <HomeContainer /> */}
        <LoginContainer />
      </div>
    </div>
  );
}

export default App;
