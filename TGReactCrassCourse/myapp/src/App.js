
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import About from './screens/About';
// import RegisterScreen from './screens/RegisterScreen';
import UserList from './screens/UserList';
// import Contact from './Contact';
// import Title from './components/Title';
import RagisterUsememo from './screens/RagisterUsememo';

const router = createBrowserRouter([
  {
    path: "/register",
    element: <RagisterUsememo/>,
  },
  {
    path: "/user-list",
    element: <UserList/>,
  },
]);

function App() {
  return (
    <div>
      
      {/* <h1>Hello World</h1> */}
      {/* <About/> */}
      {/* <RegisterScreen/> */}
      {/* <UserList/> */}
      {/* <Title/> */}
      {/* <Contact/> */}
      {/*<RagisterUsememo/>*/}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

