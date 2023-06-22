import axios from 'axios'
import React, {useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App() {
  const [tds, settds] = useState([])
  useEffect(() => {
    axios.get('https://react-dashboard3-alpha.vercel.app/')
      .then(res => {
        console.log(res.data)
        settds(res.data)
      })
    }, [])
  return (
    <div>
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box> */}
      <h1>ตารางแสดงค่าน้ำ TDS
      </h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>TDS</TableCell>
              <TableCell>TIME</TableCell>
              <TableCell>DATE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tds.map((tds) => (
              <TableRow key={tds.ID}>
                <TableCell component="th" scope="row">
                  {tds.ID}
                </TableCell>
                <TableCell>{tds.TDS}</TableCell>
                <TableCell>{tds.TIME}</TableCell>
                <TableCell>{tds.DATE}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}


export default App
