import React from "react";

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = React.useState({
    description: '',
    amount: '',
    category: 'Food'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({
      ...formData,
      amount: parseFloat(formData.amount),
      id: Date.now()
    });
    setFormData({ description: '', amount: '', category: 'Food' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
        placeholder="Description"
      />
      <input
        type="number"
        value={formData.amount}
        onChange={(e) => setFormData({...formData, amount: e.target.value})}
        placeholder="Amount"
      />
      <select
        value={formData.category}
        onChange={(e) => setFormData({...formData, category: e.target.value})}
      >
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;