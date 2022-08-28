import React from 'react';
import './styles.scss';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 'Navro`z', 'Moliya', '12.10.2022', 189),
  createData(1, 'Navro`z', 'Moliya', '12.10.2022', 189),
  createData(1, 'Navro`z', 'Moliya', '12.10.2022', 189),
  createData(1, 'Navro`z', 'Moliya', '12.10.2022', 189),
];

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="all-results">
      <div className="container">
        <h2 className="all-results__title">Songi imtihon g’olibi</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Ismi</TableCell>
                <TableCell align="right">Yo`nalish</TableCell>
                <TableCell align="right">Sana</TableCell>
                <TableCell align="right">Ball</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                >
                  <TableCell>
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ marginTop: 50, display: 'flex', gap: 30 }}>
          <Button variant="contained" onClick={() => navigate('/blocks')}>Qayta urinish</Button>
          <Button variant="contained" onClick={() => navigate('/profile')}>Profil</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;