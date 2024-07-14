import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const RepoCard = ({ repo }) => (
  <><Card sx={{ maxWidth: 345, margin: 2 }}>
    <Grid container m={2} direction={"row"}>
      <Grid>
        <Avatar alt="repository owner avatar" src={repo.owner.avatar_url} />
      </Grid>
      <Grid marginLeft={2}>
        <Typography gutterBottom variant="h5" component="div">
          {repo.name}
        </Typography>
      </Grid>
    </Grid>
    <Box sx={{
      height: '400px', overflow: 'auto'
    }}>

      <CardContent>

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
  </Card >
  </>
);

export default RepoCard;
