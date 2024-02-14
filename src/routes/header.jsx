import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Paper, InputBase, IconButton,
  Button, Box, Drawer, List, Divider, ListItem, ListItemButton,
  ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
  import MenuIcon from '@mui/icons-material/Menu';
  import SearchIcon from '@mui/icons-material/Search';
  import MicIcon from'@mui/icons-material/Mic';
  import MoreVertIcon from '@mui/icons-material/MoreVert';
  import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
  import {Link} from 'react-router-dom';
  import "../Header.css";

  const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Searchbar() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500 }}
      style={{ borderRadius:"32px" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}


export default function Header() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key="Home">
          <ListItemButton>
            <HomeIcon/>
            <ListItemText primary={"Home"}/>  
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="header">
        <div id="sidebarIcon" style={{ flex:"1 0 1%", marginLeft:"5px"}}>
          <React.Fragment key={'left'}>
            <IconButton aria-label="menu" onClick={toggleDrawer('left', true)}><MenuIcon/></IconButton>
            <Drawer
              anchor={'left'}
              open={state['left']}
              onClose={toggleDrawer('left', false)}
            >
              {list('left')}
            </Drawer>
          </React.Fragment>
        </div>
        <div id="logo" style={{ flex:"1 0 5%" }}>
          <Link to="/" rel="noreferrer" className="home">
            <h1 className="logo" style={{color:"white", paddingTop:"2px", paddingBottom:"2px"}}>Youtube</h1>
          </Link>
        </div>
        <div id="searchBar" style={{ flex:"1 0 75%", display:"flex", justifyContent:"center" }}>
          <Searchbar/>
          <IconButton type="button" sx={{ p: '10px' }} aria-label="mic" style={{ marginLeft:"5px" }}>
            <MicIcon/>
          </IconButton>
        </div>
        <div id="profile" style={{ flex:"1 0 15%"}}>
          <IconButton type="button" sx={{ p: '10px' }} aria-label="settings">
            <MoreVertIcon/>
          </IconButton>
          <Button variant="outlined" style={{ textTransform:"none", borderRadius:"32px"}}><PersonOutlineIcon/>Sign in</Button>
        </div> 
        
      </div>
    </ThemeProvider>
  );
}