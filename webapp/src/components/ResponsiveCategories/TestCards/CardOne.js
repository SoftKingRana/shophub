import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
// import styles from "../styles.module.scss";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  cardx: {
    maxWidth: 300,
    minWidth: 200,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SampleCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>â¢</span>;

  return (
    <Card className={`cardx ${classes.cardx} ${props.risky ? "risky" : ""}`}>
      <div
        style={{
          backgroundColor: "#333",
        }}
      >
        <CardContent>
          <Typography
            className={classes.title}
            style={{
              color: "#fff8",
            }}
            gutterBottom
          >
            Sample Card
          </Typography>
          <Typography
            style={{
              color: "#fff",
            }}
            variant="h5"
            component="h2"
          >
            Category
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            style={{
              color: "#fff",
            }}
            size="small"
          >
            More
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default SampleCard;
