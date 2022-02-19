import React, { useEffect, useState } from 'react';
import MainCard from '../mainCard';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

export const FormRow = () => {
  const [newsdata, setData] = useState<any[]>([]);
  const getData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}`;
    await axios
      .get(url)
      .then((response) => {
        setData(response.data.articles);
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Grid
        container
        spacing={1}
        style={{ display: 'inline-grid', justifyItems: 'center' }}
      >
        <Grid container item xs={12} spacing={3}>
          {newsdata &&
            newsdata.map((i) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                style={{ display: 'inline-grid', justifyItems: 'center' }}
                key={i.title}
              >
                <MainCard articles={i} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </div>
  );
};
