import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {useStyles} from "./style";

const Carde = () => {
    const classes=useStyles()
    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container justifyContent='space-between'>
                    <Grid item xs={12} sm={6} md={5} spacing={3} className={`${classes.spacingTrues} ${classes.CardeRewrites}`}>
                        <Card className={classes.cardOnly}>
                            <CardMedia
                                image="https://www.starbucks.fr/sites/starbucks-fr/files/styles/c06_cards_grid_560x321/public/2020-08/Order-Ahead-Hero-Image-C06-RESIZED.jpg"
                                className={classes.cardMedia}
                                title='1'
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    Appli Starbucks France
                                </Typography>
                                <Typography variant="body1">
                                    Gagnez du temps grâce au Click & Collect et cumulez vos étoiles 🌟
                                    Commander n'aura jamais été aussi simple.
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardAction} >
                                <a href="">
                                    En savoir plus
                                </a>
                             </CardActions>
                        </Card>
                    </Grid>
                    {/*1*/}
                    <Grid item className={classes.spacingTrues } xs={12} sm={6} md={5} spacing={3}>
                        <Card>
                            <CardMedia
                                image="https://www.starbucks.fr/sites/starbucks-fr/files/styles/c06_cards_grid_560x321/public/2021-08/SBX%20Delivers%20Generic-Handoff_SO%20560x321px.jpg"
                                className={classes.cardMedia}
                                title="2"
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    Starbucks Delivers
                                </Typography>
                                <Typography variant="body1">
                                    Faites-vous livrer vos plats et boissons préférés à votre porte.
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardAction} >
                                <a href="">
                                    <span>Commander sur UberEats</span>
                                    <span>
                                        <svg viewBox="0 0 24 24" >
                                            <path d="M14.75 18H7.875A1.876 1.876 0 0 1 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11a.5.5 0 0 1 0 1h-5.11A.875.875 0 0 0 7 9.25v6.875c0 .483.392.875.875.875h6.875a.875.875 0 0 0 .875-.875V11a.5.5 0 0 1 1 0v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V7.72l-4.66 4.74a.5.5 0 0 1-.71-.702L16.307 7H14.5a.5.5 0 0 1-.5-.5z"></path>
                                        </svg>
                                    </span>
                                </a>
                                <a href="">
                                    <span>Commander sur Deliveroo</span>
                                    <span>
                                        <svg viewBox="0 0 24 24" >
                                            <path d="M14.75 18H7.875A1.876 1.876 0 0 1 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11a.5.5 0 0 1 0 1h-5.11A.875.875 0 0 0 7 9.25v6.875c0 .483.392.875.875.875h6.875a.875.875 0 0 0 .875-.875V11a.5.5 0 0 1 1 0v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V7.72l-4.66 4.74a.5.5 0 0 1-.71-.702L16.307 7H14.5a.5.5 0 0 1-.5-.5z"></path>
                                        </svg>
                                    </span>
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                    {/*2*/}
                    <Grid item className={`${classes.spacingTrues} ${classes.CardeRewrites}`} xs={12} sm={6} md={5} spacing={3}>
                        <Card className={classes.cardOnly} >
                            <CardMedia
                                image="https://www.starbucks.fr/sites/starbucks-fr/files/styles/c06_cards_grid_560x321/public/2020-08/About-Us-Card-Image-C06-RESIZED%20%282%29_0.jpg"
                                className={classes.cardMedia}
                                title="3"
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    A propos
                                </Typography>
                                <Typography variant="body1">
                                    Découvrez notre entreprise et notre histoire.
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardAction} >
                                <a href="">
                                    <span>Plus d’infos</span>
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                    {/*3*/}
                    <Grid item className={classes.spacingTrues } xs={12} sm={6} md={5} spacing={3}>
                        <Card>
                            <CardMedia
                                image="https://www.starbucks.fr/sites/starbucks-fr/files/styles/c06_cards_grid_560x321/public/2020-08/Starbucks-Stories-Card-Image-C06-RESIZED.jpg"
                                className={classes.cardMedia}
                                title="3"
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    Starbucks Stories
                                </Typography>
                                <Typography variant="body1">
                                    Soyez informés de nos dernières nouveautés et actualités.
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardAction} >
                                <a href="">
                                    <span>Plus d’infos</span>
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Carde;