import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'Food',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount) return;
    
    const newExpense = {
      ...formData,
      amount: parseFloat(formData.amount),
    };
    
    onAddExpense(newExpense);
    setFormData({ description: '', amount: '', category: 'Food' });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        min="0"
        step="0.01"
        required
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="Food">Food</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Transportation">Transportation</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;