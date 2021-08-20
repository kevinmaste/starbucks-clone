import {colors, makeStyles} from "@material-ui/core";
import * as url from "url";


export const useStyles = makeStyles((theme) => ({
    /*--------------Navbar style ----------------------*/
    hearder:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:'5.9rem',
    },
    spanlogo:{
        '& > svg':{
            height:"3.2rem",
            width:"3.2rem",
        }
    },
    ulstyle:{
        display:"flex",
        height:'5.8rem',
        alignItems:'center',
        width:'88%',
        justifyContent:"space-between",
        "& > ul":{
          display:"flex",
        },

    },
    firstlist:{
        '& li':{
            listStyle:"none",
        },
        "& li > a":{
            height:'100%',
            textDecoration:"none",
            display:'inline-flex',
            marginRight:'20px',
            //marginLeft:'10px',
        },

    },
    secondelist: {
        '& li': {
            listStyle: "none",
        },
        "& li > a": {
            textDecoration: "none",
            display: 'inline-flex',
            marginRight: '10px',
            width:'100%',
        }
    },
    firstBottom:{
        border:'1px solid black',
        borderRadius:'10px',
        justifyContent:'center',
        textAlign:'center',
        position:"relative",
        right:"5px"
    },
    secondBottom:{
        border:'1px solid black',
        color:'white',
        background:'black',
        borderRadius:'10px',
        justifyContent:'center',
        textAlign:'center'
    },


    /*-----------------body style--------------*/

    bodyContainer: {
        display:"flex",
        background:"#f7f7f7",
    },
    leftSideImage: {
        width:"88%",
        '& > img':{
            position:"relative",
            height:"100%",
            objectFit:'cover',
            maxWidth:"100%",
            objectPosition:'top',
        }
    },
    rightSideImage: {
        overflow:"hidden",
        '& > img':{
            width:"100%",
        }
    },
    underContainer: {
        display:"flex",
        marginLeft:"6%",
        width:"100%",
    },
    underPicture: {
        marginLeft:"10px",
        '& span > a':{
            display:"flex"
        }
    },
    otherBigDiv:{
        paddingTop:'3.1rem',
        paddingBottom:'3.1rem',
        marginLeft:'14px',
    },
    pDiv: {
        display:"flex",
        marginLeft:'6%',
        marginBottom:'15px',
        '& > p':{
            fontSize:"12px",
            fontWeight:800,
        },
    },
    content0: {
        display:"flex",
        marginLeft:"6%",
        '& :before':{
            content:''
        },
        '& + div':{
          width:'100%'
        },
        '& > div > img':{
            width:'100%'
        }
    },
    //don't worry about this
    leftImageAfter:{
        marginLeft:'45px',
        '& span >a':{
            display:"flex",
            border:'1px solid green',
            color:'green',
            borderRadius:'10px',
            justifyContent:'center',
            textAlign:'center',
            position:"relative",
            textDecoration: "none",
            width:"38%"

        }
    },
    thediv:{
        position:'relative',
        top:"-8px",
        '& + p':{
          width:'87%'
        },
        '& >p':{
            fontSize:"15px",
        },
        '& > h1':{
            fontSize:"21px",
        }
    },
    cardPart: {
        marginLeft:'7%',
    },
    cardSections: {
        marginTop:"54px",
        paddingLeft:"4%",
        paddingTop:"14px",
        background:"white",
        '& > ul > li':{
            listStyle:"none",
        },
        '& > ul >li > div':{
            display:"flex",
            textDecoration: "none",
            justifyContent:"space-between",
            marginBottom: "43px",
            marginRight:"3%",
            cursor: "pointer",
        }
    },
    hr:{
        width:"92%",
    },
    //carte media heigth
    cardMedia: {
        height:'250px',
    },
    cardAction: {
        alignItems:'flex-start',
        flexDirection:"column",
        '& >a':{
            display:'flex',
            alignItems:'center',
            width:'100%',
            justifyContent:"space-between"
        },
        '& > a > span > svg':{
            width:'50px',
        },
        '& :nth-child(2)':{
            margin:0,
        },

    },
    socialMedia: {
        display:"flex",
        transform:'scale(1.8)',
        position:"relative",
        width:'7%',
        marginTop:'27px',
    },
    footerThing:{
        marginTop:'27px',
        '& >li':{
            marginTop:"15px",
        },
        '& li > a':{
            textDecoration: "none",
        }
    },
    copyright:{
        marginTop:'38px',
        fontSize:'13px',
    },
    //test
    cardOnly:{
        boxShadow:"none"
    },
    spacingTrues:{
        margin:"5px"
    },
    CardeRewrites: {
        background:"white",
        boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%),\
                    0px 1px 1px 0px rgb(0 0 0 / 14%), \
                    0px 1px 3px 0px rgb(0 0 0 / 12%)",
        borderRadius:'4px',
    },


}))