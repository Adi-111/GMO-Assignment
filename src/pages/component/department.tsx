// src/components/DepartmentListComponent.tsx
import React, { useState } from 'react';
import { departments } from '../../Content';
import { Department } from '../../Content';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { List, ListItem, ListItemText, Collapse, ListItemIcon } from '@mui/material';

const DepartmentListComponent: React.FC = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (department: string) => {
    setOpen(prevState => ({ ...prevState, [department]: !prevState[department] }));
  };

  return (
    <List>
      {departments.map((dept: Department, index) => (
        <div key={index}>
          <ListItem button onClick={() => handleToggle(dept.department)}>
            <ListItemIcon>
              {open[dept.department] ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
            <ListItemText primary={dept.department} />
          </ListItem>
          <Collapse in={open[dept.department]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dept.sub_departments.map((sub, idx) => (
                <ListItem key={idx} sx={{ pl: 4 }}>
                  <ListItemText primary={sub} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default DepartmentListComponent;
