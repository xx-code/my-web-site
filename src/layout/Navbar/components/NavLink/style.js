import { SOOMTH_BLACK,
         WHITE,
         BlACK,
         PRIMARY_COLOR } from '../../../../config/Color';

export default {
    navTitle : {
        fontWeight: 600,
        padding: '10px',
        margin: 0,
        color: WHITE,
        '@media screen and (max-width: 792px)' : {
            color: SOOMTH_BLACK,
            margin: 0 
        }
    },
    navLink : {
        textDecoration: 'none',
        color: 'inherit'
    },
    navActive : {
        backgroundColor: PRIMARY_COLOR,
        borderRadius: '20px',
        color: WHITE,
        '@media screen and (max-width: 792px)' : {
            backgroundColor: PRIMARY_COLOR,
            borderRadius: 0,
            color: WHITE
        }
    },
    navTitleScroll : {
        fontWeight: 600,
        padding: '10px',
        margin: 0,
        color: BlACK
    }
}