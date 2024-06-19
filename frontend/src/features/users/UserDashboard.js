import { Outlet } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div>
      <h2>User Dashboard</h2>
      <Outlet />
    </div>
  );
};

export default UserDashboard;
