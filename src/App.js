import './App.css';
import MovieApp from './Components/MovieApp';
import Descriptions from './Components/Descriptions';
import Video from './Components/Video';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Switch> */}
        {/* <Route  path="/" Component={MovieApp}/> */}
        {/* <Route  path="/" Component={Video}/> */}
         {/* <Route  path="/Descriptions" Component={Descriptions}/>  */}

      {/* </Switch> */}
      <MovieApp/>
    </div>
  );
}

export default App;
