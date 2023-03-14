import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from './features/darkModeSlice';
import Header from './Components/Header'
import Contact from './Components/Contact'
import {
  Routes, Route
} from 'react-router-dom'
import Service from './Components/Service'

function App() {
  const {mode} = useSelector((state) => state.darkMode)
  const dispatch = useDispatch()
  return (
    <div  style={{background : mode ? 'black' : 'white', color : mode ? '#7fffd4' : 'black'}}>
      <Header />
      <button onClick={() => dispatch(toggleDarkMode())}>Toggle theme to dark</button>
        <br/>
        <Routes>
          <Route exact path='/' element={
            <>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </>
          } />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/service' element={<Service />} />
        </Routes>
    </div>
  );
}

export default App;
