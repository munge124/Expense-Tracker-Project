import React from 'react'

function SortControls({ onRequestSort }) {
    return (
      <div className="sort-controls">
        <button onClick={() => onRequestSort('description')}>Sort by Description</button>
        <button onClick={() => onRequestSort('category')}>Sort by Category</button>
      </div>
    );
  }

export default SortControls
