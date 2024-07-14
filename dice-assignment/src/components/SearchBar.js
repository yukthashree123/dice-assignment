import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginY: 2 }}>
      <TextField
        variant="outlined"
        fullWidth
        label="Search for repositories"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSearch} 
        sx={{ marginLeft: 2 }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
