import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStyles} from "./style";
import Carde from "./card";


const Body = () => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.bodyContainer}>
                <div className={classes.leftSideImage}>
                    {/*you can put source */}
                    <img src="https://www.starbucks.fr/sites/starbucks-fr/files/styles/c01_vertical_card_724x1009/public/2021-06/030612%20FR%20MOP%20Launch%20assets_Website_827x900_v02.jpg?h=31892f93&itok=96JhToC-" alt="photo"/>
                </div>
                <div className={classes.rightSideImage}>
                    <img src="https://www.starbucks.fr/sites/starbucks-fr/files/styles/c02_horizontal_card_mobile_563x225/public/2021-07/290612_SUM21_FR_Frappuccino_Homepage_Hero_1335x534_v01.jpg?h=7025b037&itok=qwt89Uhj" alt="photo explicatif"/>
                    <div className={classes.underContainer}>
                        <div className={classes.underPicture}>
                            <h2>Un été haut en couleurs !</h2>
                            <p>Découvrez notre gamme de Refresha® et commencez l'été sous le signe de la fraîcheur !</p>
                            <span>
                                <a>Trouvez votre salon le plus proche</a>
                            </span>
                        </div>
                    </div>
                    {/* the second div */}
                    <div className={classes.otherBigDiv}>
                        <div className={classes.pDiv}><p>STARBUCKS REWARDS</p></div>
                        <div className={classes.content0}>
                            {/*let's doing the before css tricks*/}
                            <div className='image'>
                                <img
                                    src="https://www.starbucks.fr/sites/starbucks-fr/files/styles/c10_2_col_text_560x467/public/2021-06/030612_Starbucks_MOP_FR_v01_0.jpg?h=b044a8f9&itok=GfROd6jU"
                                    alt="startbucks image"
                                />
                            </div>
                            <div className={classes.leftImageAfter}>
                                <div className={classes.thediv}>
                                    <h1>Nouveau: Click & Collect</h1>
                                    <p>
                                        Avec l'application Starbucks® France, vous pouvez commander sur le pouce. Parfait pour les longues journées d'été !
                                    </p>
                                    <p> Commandez à l'avance et cumulez les étoiles.</p>
                                </div>
                                <span>
                                    <a href="">
                                        Télécharger l'appli
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.cardPart}>
                        {/* We can add the materiaux ui card */}
                        <Carde/>
                    </div>
                    <div className={classes.cardSections}>
                        <ul className="about us">
                            <li>
                                <div>
                                    <span>À propos</span>
                                    <span><ExpandMoreIcon/></span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Carrière</span>
                                    <span><ExpandMoreIcon/></span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Impact Social</span>
                                    <span><ExpandMoreIcon/></span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Carte Starbucks</span>
                                    <span><ExpandMoreIcon/></span>
                                </div>
                            </li>
                        </ul>
                        <hr className={classes.hr}/>
                        <ul className={classes.socialMedia}>
                            <li><a><FacebookIcon/></a></li>
                            <li><a><InstagramIcon/></a></li>
                            <li><a><TwitterIcon/></a></li>
                        </ul>
                        <ul className={classes.footerThing}>
                            <li>
                                <a href="">
                                    <span>Politique de Confidentialité</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>  Conditions d’utilisations et Mentions Légales</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>Avis relatif aux cookies</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>Conditions générales du programme de fidélité Starbucks® Rewards</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>Cookies</span>
                                </a>
                            </li>
                            <p className={classes.copyright}>© 2020 Starbucks Coffee Corporation. Tous droits réservés</p>
                        </ul>
                    </div>
                </div>
            </div>  
        </div>
    );
};
export default Body;