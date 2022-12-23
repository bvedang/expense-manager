import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/auth-context';
import AddIcon from '@mui/icons-material/Add';

export default function Menu() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
      <Toolbar>
        {authContext.isLoggedIn ? (
          <Button
            aria-label="Home"
            sx={{ color: '#fff' }}
            onClick={() => {
              navigate('/expense-manager/user/expenseOverview');
            }}
          >
            <Typography variant="h6" color="inherit">
              Expense Manager
            </Typography>
          </Button>
        ) : (
          <Button
            aria-label="Home"
            sx={{ color: '#fff' }}
            onClick={() => {
              navigate('/expense-manager/');
            }}
          >
            <Typography variant="h6" color="inherit">
              Expense Manager
            </Typography>
          </Button>
        )}

        {!authContext.isLoggedIn && (
          <span style={{ float: 'right' }}>
            <Button
              sx={{ my: 2, color: 'white' }}
              onClick={() => {
                navigate('/expense-manager/signup');
              }}
            >
              Sign up
            </Button>

            <Button
              sx={{ color: '#fff' }}
              onClick={() => {
                navigate('/expense-manager/signin');
              }}
            >
              Sign In
            </Button>
          </span>
        )}
        {authContext.isLoggedIn && (
          <span>
            <Button
              onClick={() => {
                navigate('/user/expenses');
              }}
              sx={{ color: '#fff' }}
            >
              Expenses
            </Button>
            <Button
              onClick={() => {
                navigate('/expense-manager/user/expenses/report');
              }}
              sx={{ color: '#fff' }}
            >
              Reports
            </Button>
            <span style={{ position: 'absolute', right: '10px' }}>
              <Button
                onClick={() => {
                  navigate('/expense-manager/newExpense');
                }}
                sx={{ color: '#f44336', backgroundColor: '#ffffff', border:'1px solid #f44336', '&:hover':{color: '#f44336', backgroundColor: '#ffffff', border:'1px solid #f44336'} }}
              >
                <AddIcon style={{ marginRight: 4 }} />
                Add Expense
              </Button>

              <Button
                onClick={() => {
                  navigate('/expense-manager/profile');
                }}
                sx={{ color: '#fff' }}
              >
                My Profile
              </Button>

              <Button color="inherit" onClick={authContext.onLogOut}>
                Sign out
              </Button>
            </span>
          </span>
        )}
      </Toolbar>
    </AppBar>
  );
}
