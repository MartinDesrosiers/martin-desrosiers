import "typeface-roboto";

/* Icons */
import CodeIcon from "@material-ui/icons/Code";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import Fade from "@material-ui/core/Fade";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
/* Material-UI components*/
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import NavPills from "../../components/NavPills/NavPills.js";
import Parallax from "../../components/Parallax/Parallax.js";
import React from "react";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import afp from "../../assets/img/frontend/afp.png";
// Concatenates classes library
import classNames from "classnames";
import game1 from "../../assets/img/jeuxvideo/tla.jpg";
import game2 from "../../assets/img/jeuxvideo/top.png";
import game3 from "../../assets/img/jeuxvideo/tla2.jpg";
import game4 from "../../assets/img/jeuxvideo/toprunners1.png";
import game5 from "../../assets/img/jeuxvideo/toprunners2.png";
import { makeStyles } from "@material-ui/core/styles";
import onmo from "../../assets/img/frontend/onmo.png";
/* Images */
import profile from "../../assets/img/martin-desrosiers.png";
import rob0 from "../../assets/img/frontend/rob0.png";
import studio1 from "../../assets/img/frontend/maj.png";
import studio2 from "../../assets/img/frontend/compass2.jpg";
import studio4 from "../../assets/img/frontend/intelia.webp";
import studio5 from "../../assets/img/frontend/rodeo.png";
/* Custom styles */
import styles from "../../assets/jss/material-kit-react/views/profilePage.js";
import teaching1 from "../../assets/img/enseignement/campjv1.jpg";
import teaching2 from "../../assets/img/enseignement/campjv2.jpg";
import teaching3 from "../../assets/img/enseignement/animation.png";
import teaching4 from "../../assets/img/enseignement/blender.png";
import teaching5 from "../../assets/img/enseignement/pixel.png";
import teaching6 from "../../assets/img/enseignement/musique.png";
import teaching7 from "../../assets/img/enseignement/construct.png";
import teaching8 from "../../assets/img/enseignement/studioxx.jpg";
// Translation
import { useTranslation } from "react-i18next";
import web6 from "../../assets/img/frontend/dev.png";
import web7 from "../../assets/img/frontend/katy.png";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const { t } = useTranslation();

  const appear = true;
  const classes = useStyles();
  const { ...rest } = props;
  const navImageClasses = classNames(
    classes.imgRounded,
    classes.imgRaised,
    classes.imgGallery
  );
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div className={classes.app}>
      <Fade in={appear}>
        <Header
          brand="Martin Desrosiers"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
      </Fade>
      <Parallax image={require("../../assets/img/maj.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Martin Desrosiers</h1>
                <h3 className={classes.subtitle}>{t("title")}</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.profile}>
              <div>
                <img src={profile} alt="..." className={imageClasses} />
              </div>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center" className={classes.container}>
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.titleAbout}>{t("description.part1")}</h2>
            <div className={classes.description}>
              <p>{t("description.part2")}</p>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center" className={classes.container}>
          <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: t("services.web"),
                  tabIcon: CodeIcon,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={12}>
                        <p></p>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <a href="https://rob0.io/">
                          <img
                            alt="rob0"
                            src={rob0}
                            className={navImageClasses}
                          />
                        </a>
                        <a href="https://www.museejoliette.org/">
                          <img
                            alt="Maj"
                            src={studio1}
                            className={navImageClasses}
                          />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.intelia.compassapp">
                          <img
                            alt="Compass"
                            src={studio2}
                            className={navImageClasses}
                          />
                        </a>
                        <a href="https://github.com/MartinDesrosiers">
                          <img
                            alt="Github"
                            src={web6}
                            className={navImageClasses}
                          />
                        </a>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <a href="https://www.onmobile.com/">
                          <img
                            alt="onmo"
                            src={onmo}
                            className={navImageClasses}
                          />
                        </a>
                        <a href="https://rodeocreatif.com/">
                          <img
                            alt="Rodeo"
                            src={studio5}
                            className={navImageClasses}
                          />
                        </a>
                        <a href="https://www.intelia.com/">
                          <img
                            alt="Intelia"
                            src={studio4}
                            className={navImageClasses}
                          />
                        </a>
                        <a href="https://afplanaudiere.org/">
                          <img
                            alt="AFP"
                            src={afp}
                            className={navImageClasses}
                          />
                        </a>
                        <a href="https://katyduperenotaire.com/">
                          <img
                            alt="Katy"
                            src={web7}
                            className={navImageClasses}
                          />
                        </a>
                      </GridItem>
                    </GridContainer>
                  ),
                },
                {
                  tabButton: t("services.game"),
                  tabIcon: VideogameAssetIcon,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={6}>
                        <a href="https://store.steampowered.com/app/985600/The_Last_Aura/">
                          <img
                            alt="TLA"
                            src={game1}
                            className={navImageClasses}
                          />
                        </a>
                        <a href="http://theoldestgame.com/">
                          <img
                            alt="TOG"
                            src={game2}
                            className={navImageClasses}
                          />
                        </a>
                        <a href="http://leylinegames.com/">
                          <img
                            alt="LeylineGames"
                            src={game3}
                            className={navImageClasses}
                          />
                        </a>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <a href="https://twitter.com/toprunnersgame">
                          <img
                            alt="Toprunners"
                            src={game4}
                            className={navImageClasses}
                          />
                        </a>
                        <a href="https://www.facebook.com/ToprunnersGame/">
                          <img
                            alt="Toprunners"
                            src={game5}
                            className={navImageClasses}
                          />
                        </a>
                      </GridItem>
                    </GridContainer>
                  ),
                },
                {
                  tabButton: t("services.teach"),
                  tabIcon: EmojiObjectsIcon,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={6}>
                        <a href="http://campjv.com/">
                          <img
                            alt="CampJV"
                            src={teaching1}
                            className={navImageClasses}
                          />
                        </a>
                        <a href="https://recit.cssamares.qc.ca/bjoliette/spip.php?rubrique155&var_mode=recalcul">
                          <img
                            alt="Multimedia"
                            src={teaching2}
                            className={navImageClasses}
                          />
                        </a>
                        <a href="https://youtu.be/rTGLKjEEZXg">
                          <img
                            alt="YouTube"
                            src={teaching5}
                            className={navImageClasses}
                          />
                        </a>
                        <a href="https://www.facebook.com/events/s/complet-realite-virtuelle-vide/557558464790443/?ti=cl">
                          <img
                            alt="YouTube"
                            src={teaching8}
                            className={navImageClasses}
                          />
                        </a>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <a href="https://youtu.be/f6F3qKVKH2Q">
                          <img
                            alt="YouTube"
                            src={teaching3}
                            className={navImageClasses}
                          />
                        </a>
                        <a href="https://youtu.be/FOcqj2lVXXU">
                          <img
                            alt="YouTube"
                            src={teaching4}
                            className={navImageClasses}
                          />
                        </a>
                        <a href="https://youtu.be/v-LIVV4tNLM">
                          <img
                            alt="YouTube"
                            src={teaching6}
                            className={navImageClasses}
                          />
                        </a>
                        <a href="https://youtu.be/EZB9k65l8Zg">
                          <img
                            alt="YouTube"
                            src={teaching7}
                            className={navImageClasses}
                          />
                        </a>
                      </GridItem>
                    </GridContainer>
                  ),
                },
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
}
