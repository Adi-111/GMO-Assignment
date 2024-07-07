import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// DataGridComponent.tsx
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { CircularProgress } from '@mui/material';
const DataGridComponent = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
            setPosts(data);
            setLoading(false);
        });
    }, []);
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'userId', headerName: 'User ID', width: 150 },
        { field: 'title', headerName: 'Title', width: 300 },
        { field: 'body', headerName: 'Body', width: 600 },
    ];
    return (_jsxs("div", { className: "flex flex-col items-center p-4 bg-gray-100 min-h-screen", children: [_jsx("h1", { className: "text-2xl font-bold mb-4 text-gray-700", children: "Posts Data" }), _jsx("div", { className: "w-full max-w-7xl", children: loading ? (_jsx("div", { className: "flex justify-center items-center h-64", children: _jsx(CircularProgress, {}) })) : (_jsx("div", { className: "bg-white rounded-lg shadow-md p-4", children: _jsx(DataGrid, { rows: posts, columns: columns, checkboxSelection: true, autoHeight: true }) })) })] }));
};
export default DataGridComponent;
