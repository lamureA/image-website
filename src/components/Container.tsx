import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: "0 auto",
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    maxWidth: 1400 - theme.spacing.unit * 4,
  },
}));

export default function Container({
  className,
  ...otherProps
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & { className?: string }) {
  const styles = useStyles();

  return (
    <div {...otherProps} className={classNames(styles.container, className)} />
  );
}
