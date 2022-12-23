import { Route, Routes } from 'react-router-dom';
import React, { useContext } from 'react';
import Home from './core/Home';
import Users from './user/Users';
import Signup from './user/Signup';
import Signin from './auth/Signin';
import Profile from './user/Profile';
import EditProfile from './user/EditProfile';
import Menu from './core/Menu';
import AuthContext from './store/auth-context';
import PageNotFound from './auth/PageNotFound';
import NewExpense from './expense/NewExpense';
import Expenses from './expense/Expenses';
import ExpenseOverview from './expense/ExpenseOverview';
import Report from './report/Report';

export default function MainRouter() {
  const authContext = useContext(AuthContext);
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/expense-manager/" element={<Home />} />
        {authContext.isLoggedIn ? (
          <Route path="/expense-manager/newExpense" element={<NewExpense />} />
        ) : (
          <Route path="/expense-manager/newExpense" element={<PageNotFound />} />
        )}

        {authContext.isLoggedIn ? (
          <Route path="/expense-manager/users" element={<Users />} />
        ) : (
          <Route path="/expense-manager/users" element={<PageNotFound />} />
        )}
        {authContext.isLoggedIn ? (
          <Route path="/expense-manager/user/expenses" element={<Expenses />} />
        ) : (
          <Route path="/expense-manager/user/expenses" element={<PageNotFound />} />
        )}
        <Route path="/expense-manager/signup" element={<Signup />} />
        <Route path="/expense-manager/signin" element={<Signin />} />
        {authContext.isLoggedIn ? (
          <Route path="/expense-manager/profile" element={<Profile />} />
        ) : (
          <Route path="/expense-manager/profile" element={<PageNotFound />} />
        )}
        {authContext.isLoggedIn ? (
          <Route path="/expense-manager/user/edit/:userId" element={<EditProfile />} />
        ) : (
          <Route path="/expense-manager/user/edit/:userId" element={<PageNotFound />} />
        )}

        {authContext.isLoggedIn ? (
          <Route path="/expense-manager/user/expenseOverview" element={<ExpenseOverview />} />
        ) : (
          <Route path="/expense-manager/user/expenseOverview" element={<PageNotFound />} />
        )}

        {authContext.isLoggedIn ? (
          <Route path="/expense-manager/user/expenses/report" element={<Report />} />
        ) : (
          <Route path="/expense-manager/user/expenses/report" element={<PageNotFound />} />
        )}
      </Routes>
    </div>
  );
}
