
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import About from './screens/About';
// import RegisterScreen from './screens/RegisterScreen';
// import UserList from './screens/UserList';
// import Contact from './Contact';
// import Title from './components/Title';
// import RagisterUsememo from './screens/RagisterUsememo';
import { Provider } from "react-redux";
// import { createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from './store/reducer';
import Contact from './screens/Contact';

const store = configureStore({
  reducer: rootReducer,   // yaha reducer ek property hai
});
// creating A store

// const router = createBrowserRouter([
//   {
//     path: "/register",
//     element: <RagisterUsememo/>,
//   },
//   {
//     path: "/user-list",
//     element: <UserList/>,
//   },
// ]);

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <UserList />,
  //   errorElement: <h1>Page Not Found 😢</h1>,
  // },
  // {
  //   path: "/register",
  //   element: <RagisterUsememo />,
  // },
  // {
  //   path: "/user-list",
  //   element: <UserList />,
  // },
  {
    path: "/contact",          // 👈 yeh add karna hai
    element: <Contact />,
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
      <Provider store={store}>

      
      <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;


// Redux and Context API - state management libraries