import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Public from './components/Public';
import Login from './features/auth/login';
import Register from './features/auth/register';
import DashLayout from './components/dashLayout';
import DisasterReporting from './features/disasters/disastereporting';
import DisasterList from './features/disasters/disasterList';
//import UsersList from './features/users/usersList';


function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Layout />}>
        <Route index element = {<Public/>}/>
        <Route path = "login" element = {<Login />} />
        <Route path = "register" element = {<Register />} />

        <Route path = "dash" element = {<DashLayout />}>
          <Route index element = {<DisasterReporting/>}/>

          <Route path = 'disasters'>
            <Route index element = {<DisasterList />} />
          </Route>

          {/* <Route path = 'users'>
            <Route index element = {<UsersList />} />
          </Route> */}

        </Route> {/* End Dash */}
      </Route>
    </Routes>
  );
};

export default App;
