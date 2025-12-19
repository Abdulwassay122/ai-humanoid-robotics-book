import React, { useState, useEffect } from 'react';

const SelectionHandler = ({ onSelectionChange }) => {
  const [selectedText, setSelectedText] = useState('');

  useEffect(() => {
    const handleSelection = () => {
      const text = window.getSelection().toString().trim();
      setSelectedText(text);
      onSelectionChange(text);
    };

    document.addEventListener('selectionchange', handleSelection);
    document.addEventListener('mouseup', handleSelection);

    return () => {
      document.removeEventListener('selectionchange', handleSelection);
      document.removeEventListener('mouseup', handleSelection);
    };
  }, [onSelectionChange]);

  return null; // This component doesn't render anything
};

export default SelectionHandler;