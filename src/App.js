import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DataGridComponent from './pages/component/dataGridComponent';
import DepartmentListComponent from './pages/component/department';
const App = () => {
    return (_jsx("div", { className: "App", children: _jsxs("div", { className: "flex flex-col items-center p-4 bg-gray-100 min-h-screen", children: [_jsx("h1", { className: "text-2xl font-bold mb-4 text-gray-700", children: "Posts Data" }), _jsxs("div", { className: "w-full max-w-7xl flex", children: [_jsxs("div", { className: "w-1/4 pr-4", children: [_jsx("h2", { className: "text-xl font-bold mb-4 text-gray-700", children: "Departments" }), _jsx(DepartmentListComponent, {})] }), _jsx("div", { className: "w-3/4 pl-4", children: _jsx(DataGridComponent, {}) })] })] }) }));
};
export default App;
