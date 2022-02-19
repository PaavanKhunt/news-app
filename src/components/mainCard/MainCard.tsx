import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Divider } from '@material-ui/core';
import { Button } from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const MainCard = (props: any) => {
  let articles = props.articles;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [likecolor, setlikecolor] = useState('disabled');

  const likebutton = () => {
    if (likecolor === 'disabled') {
      setlikecolor('secondary');
    } else if (likecolor === 'secondary') {
      setlikecolor('disabled');
    }
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {articles.author && articles.author.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={articles.title.substring(0, 50) + '...'}
        subheader={moment(articles.publishedAt).fromNow()}
      />
      <CardMedia
        className={classes.media}
        image={articles.urlToImage}
        title="Paella dish"
      />
      <CardContent>
        <Typography color="textSecondary" component="p">
          {articles.description && articles.description.substring(0, 120)}...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={likebutton}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Divider />
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>{articles.title}</Typography>
          <Typography paragraph>{articles.content}</Typography>
          <Typography paragraph>Author: {articles.author}</Typography>
          <Button
            variant="contained"
            href={articles.url}
            target="_blank"
            color="primary"
          >
            More
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
  // });
};
