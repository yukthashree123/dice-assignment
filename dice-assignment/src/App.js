import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import RepoCard from './components/RepoCard';
import { Container, Grid, Select, MenuItem, InputLabel, FormControl, Typography, CircularProgress, Box } from '@mui/material';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [sort, setSort] = useState('stars');
  const [query, setQuery] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [query, sort]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/search/repositories`, {
        params: {
          q: query,
          sort: sort,
          order: 'desc'
        },
        headers: {
          Authorization: `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`
        }
      });
      setRepos(response.data.items);
      setNoResults(response.data.items.length === 0);

    } catch (error) {
      console.error('Error fetching data from GitHub API:', error);
    }
    finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      <FormControl fullWidth variant="outlined" sx={{ marginY: 2 }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          label="Sort By"
        >
          <MenuItem value="stars">Stars</MenuItem>
          <MenuItem value="watchers_count">Watchers</MenuItem>
          <MenuItem value="score">Score</MenuItem>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="created_at">Created At</MenuItem>
          <MenuItem value="updated_at">Updated At</MenuItem>
        </Select>
      </FormControl>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
          <CircularProgress />
        </Box>
      ) : noResults ? (
        <Typography variant="h6" align="center" sx={{ marginY: 2 }}>
          No repositories found for the given search query.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {repos.map(repo => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={repo.id}>
              <RepoCard repo={repo} />
            </Grid>

          ))}
        </Grid>)}
    </Container>
  );
};

export default App;