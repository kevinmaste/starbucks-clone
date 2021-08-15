import {colors, makeStyles} from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
    /*--------------Navbar style ----------------------*/
    navroot:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        width:'1.3cm',
        height:'1.3cm'
    },
    navcontent: {
        display:"flex"
    },
    hidding: {
      width:'15em'
    },
    styleLists:{
        display:"flex",
        listStyleType:'none',
        alignItems: 'center',
        padding: '17px',
        '& li > a':{
            textDecoration:'none',
            color:'black',
            paddingLeft: '20px',
            marginLeft: '5px'
        },"& li > a:hover":{
            color:'green',
        }
    },
    specialink:{
        display:"flex",
    },
    buttonstyle: {
        border:'1px solid black',
        borderRadius: '2.5rem',
        padding:'0.5rem'
    },
    bOne:{
        background:'white',
        '&:hover':{
            background:'rgba(180, 180, 180,0.8)',
        }
    },
    btwo:{
        background:'black',
        color:'white !important',
        '&:hover':{
            background:'rgba(180, 180, 180,0.8)',
        }
    },
    bfirst:{
        '&:hover':{
            color:'gray !important',
        }
    }
}))