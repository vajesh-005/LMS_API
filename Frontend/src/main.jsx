import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider } from 'rsuite';
import Dashboard_leave_details from './components/Dashboard_leave_details';
import Pending_request from './components/Pending_requests';
import Request_form from './components/request_form';
import './style/index.css';
import Side_nav from './components/Side_nav'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomProvider theme="light">
      <div className="container">
        <div className="column">
          <Dashboard_leave_details />
          <Request_form />
        </div>
        <div className="column">
          <Pending_request />
        </div>
      </div>


    </CustomProvider>
    {/* <Side_nav/> */}
  </StrictMode>
);
