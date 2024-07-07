// src/App.tsx
import React from 'react';
import DataGridComponent from './pages/component/dataGridComponent';
import DepartmentListComponent from './pages/component/department';


const App: React.FC = () => {
  return (
    <div className="App">
      <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">Posts Data</h1>
        <div className="w-full max-w-7xl flex">
          <div className="w-1/4 pr-4">
            <h2 className="text-xl font-bold mb-4 text-gray-700">Departments</h2>
            <DepartmentListComponent />
          </div>
          <div className="w-3/4 pl-4">
            <DataGridComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
