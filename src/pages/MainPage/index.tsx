import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { Alert, AlertTitle, Card, CardContent, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect } from 'react';
import CustomCircularProgress from '../../components/CustomCircularProgress';
import { Eanalytics_Orgs } from '../../models/GQLmodels';
import { userSettingsVar } from '../../models/UserSettings';
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

const SAMPLE_QUERY = gql`
  query MyQuery {
    eanalytics_orgs {
      orgnm
      orgid
      locations {
        addressline1
        locationid
        country
      }
    }
  }
`;

export const MainPage = () => {
  const classes = useStyles();
  const { error, data } = useQuery(SAMPLE_QUERY, {
    onCompleted: (dat) => {
      console.log(dat);
    },
  });

  //this can be used to get data from the url, such as if an ID is included there
  // const params = useParams();

  const userSettings = useReactiveVar(userSettingsVar);
  useEffect(() => {
    if (data && data.eanalytics_orgs && data.eanalytics_orgs.length) {
      userSettingsVar({ ...userSettings, orgsLoaded: data.eanalytics_orgs.length });
    }
  }, [data]);

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
                      <Typography variant="h6">
                        Loaded {userSettings.orgsLoaded} orgs for {userSettings.username}:
                      </Typography>
                      {data?.eanalytics_orgs?.map((org: Eanalytics_Orgs, index: number) =>
                        org.locations?.length ? (
                          <Card className={classes.recommendationCard} key={index}>
                            {/* <CardMedia
                            component="img"
                            alt={character.name || ''}
                            height="140"
                            image={character.image || ''}
                            title={character.name || ''}
                          /> */}
                            <CardContent>
                              <Typography variant="h6">{org.orgnm}</Typography>

                              <Typography>
                                {org.locations[0]?.addressline1 + ', ' + org.locations[0]?.country + '. '}
                              </Typography>
                            </CardContent>
                          </Card>
                        ) : null,
                      )}
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
