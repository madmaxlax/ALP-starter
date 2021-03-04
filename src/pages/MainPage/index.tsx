import { gql, useQuery } from '@apollo/client';
import { Alert, AlertTitle, Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import CustomCircularProgress from '../../components/CustomCircularProgress';
import { Character } from '../../models/types';
import { CustomTheme } from '../../theme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: CustomTheme) => ({
  root: {},
  welcomeHeader: {
    borderBottom: '.5px solid ' + theme.palette.grey[300],
  },
  content: {},
  recommendationCard: {
    '&.MuiCard-root': {
      background: theme.palette.common.white,
      marginBottom: theme.spacing(2),
    },
  },
}));

const CHARACTERS_QUERY = gql`
  query myQuery {
    characters {
      results {
        id
        name
        gender
        image
      }
    }
  }
`;

export const MainPage = () => {
  const classes = useStyles();
  const { error, data } = useQuery(CHARACTERS_QUERY, {
    onCompleted: (dat) => {
      console.log(dat);
    },
  });
  // const params = useParams();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <img src={'/img/placeholder-topbar.png'} alt="topbarplaceholder" style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={12} className={classes.welcomeHeader}>
        <Container>
          <img src={'/img/placeholder-welcomeheader.png'} alt="placeholder" style={{ height: 100, width: '100%' }} />
        </Container>
      </Grid>

      <Grid item xs={12} className={classes.content}>
        <Container>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={8}>
              <img src={'/img/placeholder-locationoverview.png'} alt="placeholder" style={{ width: '100%' }} />
              <Grid container spacing={2} justifyContent="space-between">
                <Grid item xs={6}>
                  {error ? (
                    <Alert severity="error">
                      <AlertTitle>Error</AlertTitle>
                      {error}
                    </Alert>
                  ) : data ? (
                    <>
                      <Typography variant="h6">Rick and Morty Characters</Typography>
                      {data?.characters?.results.map((character: Character, index: number) => (
                        <Card className={classes.recommendationCard} key={index}>
                          <CardMedia
                            component="img"
                            alt={character.name || ''}
                            height="140"
                            image={character.image || ''}
                            title={character.name || ''}
                          />
                          <CardContent>
                            {character.name}: {character.gender}
                          </CardContent>
                        </Card>
                      ))}
                    </>
                  ) : (
                    <CustomCircularProgress color="secondary" text="Loading query" />
                  )}
                </Grid>
                <Grid item xs={6}>
                  <img src={'/img/placeholder-learningaboutloss.png'} alt="placeholder" style={{ width: '100%' }} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <img src={'/img/placeholder-quicklinks.png'} alt="placeholder" style={{ width: '100%' }} />
              <img src={'/img/placeholder-upcoming.png'} alt="placeholder" style={{ width: '100%' }} />
              <img src={'/img/placeholder-videofollowup.png'} alt="placeholder" style={{ width: '100%' }} />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};
