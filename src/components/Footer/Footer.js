/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Translation
import { useTranslation, withTranslation, Trans } from 'react-i18next';

import styles from "../../assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Button
                onClick={() => changeLanguage('en')}
                className={classes.block}
                target="_blank"
              >
                English
              </Button>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Button
                onClick={() => changeLanguage('fr')}
                className={classes.block}
                target="_blank"
              >
                Français
              </Button>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
        &copy; {1900 + new Date().getYear()},{" "} {t('footer')}{" "}
          <a
            href="https://www.linkedin.com/in/martin-desrosiers-dev"
            className={aClasses}
            target="_blank"
          >
            Martin Desrosiers
          </a>{" "}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
