import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/DepartmentListComponent.tsx
import { useState } from 'react';
import { departments } from '../../Content';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { List, ListItem, ListItemText, Collapse, ListItemIcon } from '@mui/material';
const DepartmentListComponent = () => {
    const [open, setOpen] = useState({});
    const handleToggle = (department) => {
        setOpen(prevState => (Object.assign(Object.assign({}, prevState), { [department]: !prevState[department] })));
    };
    return (_jsx(List, { children: departments.map((dept, index) => (_jsxs("div", { children: [_jsxs(ListItem, { button: true, onClick: () => handleToggle(dept.department), children: [_jsx(ListItemIcon, { children: open[dept.department] ? _jsx(ExpandLess, {}) : _jsx(ExpandMore, {}) }), _jsx(ListItemText, { primary: dept.department })] }), _jsx(Collapse, { in: open[dept.department], timeout: "auto", unmountOnExit: true, children: _jsx(List, { component: "div", disablePadding: true, children: dept.sub_departments.map((sub, idx) => (_jsx(ListItem, { sx: { pl: 4 }, children: _jsx(ListItemText, { primary: sub }) }, idx))) }) })] }, index))) }));
};
export default DepartmentListComponent;
