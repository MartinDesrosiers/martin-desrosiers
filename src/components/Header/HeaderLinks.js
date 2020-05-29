/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import AttachmentIcon from '@material-ui/icons/Attachment';
import ComputerIcon from '@material-ui/icons/Computer';

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

import { useTranslation, withTranslation, Trans } from 'react-i18next';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          title={t('menu.resumeTooltip')}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            className={classes.navLink}
            color="transparent"
            href={process.env.PUBLIC_URL + '/assets/pdf/CV-Martin-Desrosiers.pdf'}
            startIcon={<AttachmentIcon />}
            >
               {t('menu.resume')}
            </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          title={t('menu.linkedInTooltip')}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            className={classes.navLink}
            color="transparent"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/martin-desrosiers-dev"
            >
              LinkedIn
            </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          title={t('menu.emailTooltip')}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            className={classes.navLink}
            color="transparent"
            startIcon={<MailIcon />}
            href="mailto:martin.desrosiers@campjv.com"
            >
              {t('menu.email')}
            </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
