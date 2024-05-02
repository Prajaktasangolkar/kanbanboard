import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import CssBaseLine from '@mui/material/CssBaseline'
import { ThemeProvider,createTheme } from '@mui/material/styles'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Board from './pages/Board';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Task from './pages/Task'


function App() {
const theme=createTheme({
  palette:{mode:'dark'}
})
  return (
<ThemeProvider theme={theme}>
    <CssBaseLine/>
    <BrowserRouter>
    <Routes>
     
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
      
      
        <Route index element={<Home/>}/>
        <Route path='boards' element={<Board/>} />
        <Route path='/task' element={<Task 
             task={{id:123,title:'Make a progress board application'}}
             index={1}
             />}/>

    
    </Routes>
    </BrowserRouter>
</ThemeProvider>
  );
}

export default App;
