import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import SpaceSelect from '../SpaceSelect/SpaceSelect';
import './App.scss';
import { fetchSpaces } from '../../actions/markActions';
import Space from '../Space/Space';

function App() {
  const dispatch = useDispatch();
  // call api to save spaces in state
  useEffect(() => {
    const action = fetchSpaces();
    dispatch(action);
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <SpaceSelect />
      <Space />
    </div>
  );
}

export default App;
