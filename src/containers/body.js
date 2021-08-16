import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Body = () => {
    return (
        <div>
            <div className='container'>
                <div className="left-side">
                    <img src="https://www.starbucks.fr/sites/starbucks-fr/files/styles/c01_vertical_card_724x1009/public/2021-06/030612%20FR%20MOP%20Launch%20assets_Website_827x900_v02.jpg?h=31892f93&itok=96JhToC-" alt="photo"/>
                </div>
                <div className="right-side">
                    <img src="https://www.starbucks.fr/sites/starbucks-fr/files/styles/c02_horizontal_card_mobile_563x225/public/2021-07/290612_SUM21_FR_Frappuccino_Homepage_Hero_1335x534_v01.jpg?h=7025b037&itok=qwt89Uhj" alt="photo explicatif"/>
                    <div className='container'>
                        <div className='under-picture'>
                            <h2>Un été haut en couleurs !</h2>
                            <p>Découvrez notre gamme de Refresha® et commencez l'été sous le signe de la fraîcheur !</p>
                            <span>
                                <a>Trouvez votre salon le plus proche</a>
                            </span>
                        </div>
                    </div>
                    {/* the second div */}
                    <div className='other big div'>
                        <div className='p-div'><h2>STARBUCKS REWARDS</h2></div>
                        <div className='content0'>
                            {/*let's doing the before css tricks*/}
                            <div className='left-text'>
                                <h1>Nouveau: Click & Collect</h1>
                                <p>Avec l'application Starbucks® France, vous pouvez commander sur le pouce. Parfait pour les longues journées d'été !

                                Commandez à l'avance et cumulez les étoiles.
                                </p>
                                <span>
                                    <a href="">
                                        Télécharger l'appli
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-part">
                    {/* We can add the materiaux ui card */}
                    <h1 style={{textAlign: 'center',border:'2px solid black',color:"blue",fontSize:15,fontStyle:'bold'}}>
                        put the marteriaux UI card or your own design
                    </h1>
                </div>
                <div className="card-section">
                    <ul className="about us">
                        <li>
                            <div>
                                <span>À propos</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>Carrière</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>Impact Social</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>Carte Starbucks</span>
                            </div>
                        </li>
                    </ul>
                    <hr/>
                    <ul className='reseaux sociaux'>
                        <li><a><FacebookIcon/></a></li>
                        <li><a><InstagramIcon/></a></li>
                        <li><a><TwitterIcon/></a></li>
                    </ul>
                    <ul className="">
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
                        <span className="copyright">© 2020 Starbucks Coffee Corporation. Tous droits réservés</span>
                    </ul>

                </div>
            </div>  
        </div>
    );
};
export default Body;