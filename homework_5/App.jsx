import logo from './logo.svg';
import './App.css';
import store from './Store';
import { Provider } from 'react-redux';
import ChangeTheme from './ChangeTheme';
import changeTheme from './ChangeTheme';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ChangeTheme />
      </Provider>
    </div>
  );
}

export default App;
