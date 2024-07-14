import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const RepoCard = ({ repo }) => (
  <Card sx={{ maxWidth: 345, margin: 2 }}>
    <CardMedia
      component="img"
      alt="repository owner avatar"
      height="140"
      image={repo.owner.avatar_url}
    />
    <Box sx={{
      height: '400px', overflow: 'auto'
    }}>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {repo.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {repo.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Language: {repo.language}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stars: {repo.stargazers_count} <StarIcon fontSize="small" />
        </Typography>
      </CardContent>
    </Box>
  </Card>
);

export default RepoCard;
