import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Función para alternar el estado del Drawer
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Botón para abrir/cerrar el Drawer */}
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        {/* Título del Navbar */}
        <Typography variant="h6" component={Link} to="/" className="fs-3 ubuntu" style={{ textDecoration: 'none', color: 'inherit' }}>
          {/* Texto del Navbar */}
          <span style={{ color: '#000000' }}>WiKi</span> Rick & Morty
        </Typography>
        {/* Drawer para mostrar opciones de navegación */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          {/* Lista de elementos de navegación */}
          <List>
            {/* Elemento de navegación para Characters */}
            <ListItem button component={Link} to="/" onClick={toggleDrawer}>
              <ListItemText primary="Characters" />
            </ListItem>
            {/* Elemento de navegación para Episodes */}
            <ListItem button component={Link} to="/episodes" onClick={toggleDrawer}>
              <ListItemText primary="Episode" />
            </ListItem>
            {/* Elemento de navegación para Location */}
            <ListItem button component={Link} to="/location" onClick={toggleDrawer}>
              <ListItemText primary="Location" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
