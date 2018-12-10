import React from 'react';
import EntriesList from '../entries/EntriesList';

const Dashboard = () => (
  <React.Fragment>
    <div className="container">
      <div className="row">
        <div className="col-12 jumbotron mx-auto bg-dashboard">
          <p className="mt-2 thick large-text">Welcome to My Diary</p>
        </div>
        <div className="container-fluid">
          <EntriesList />
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Dashboard;
