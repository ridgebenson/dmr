import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Public from './components/Public';
import Login from './features/auth/login';
import Register from './features/auth/register';
import DashLayout from './components/dashLayout';
import AdminDashboard from './features/admin/AdminDashboard';
import UserDashboard from './features/users/UserDashboard';
import DisasterReporting from './features/disasters/disastereporting';
import DisasterList from './features/disasters/disasterList';
import DisasterDetail from './features/disasters/disasterDetail';
import UserDisasters from './features/users/UserDisasters';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        
        <Route path="dash" element={<DashLayout />}>
          <Route path="admin" element={<AdminDashboard />}>
            <Route index element={<DisasterList />} />
           
          </Route>

          <Route path="disasters">
            <Route path=":id" element={<DisasterDetail />} />
          </Route> 

          

          <Route path="user" element={<UserDashboard />}>
            <Route index element={<DisasterReporting />} />
            <Route path='disasters' element={<UserDisasters />} />
            <Route path="disasters/:id" element={<DisasterDetail />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
