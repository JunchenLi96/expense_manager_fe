import {create} from 'apisauce';

const api = create({
  baseURL:
    'https://us-east4-expense-manager-322623.cloudfunctions.net/expense_manager',
});
api.get('/').then(Response => {
  if (!Response.ok) {
    Response.problem;
  }
});

export default api;
