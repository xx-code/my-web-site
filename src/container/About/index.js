import React, { Component } from 'react';
// components 
import ProfileInfo from './components/ProfileInfo';
import { MainLoad } from './../../common/Loading';
import ProfilePicture from './components/ProfilePicture';
import { PrimaryButton } from '../../common/Buttons';
import { SocialLinkList } from '../../common/SocialLink';
// data & firebase
import { firebaseConnect } from 'react-redux-firebase';
import { socialLinks } from '../../utils/StaticData';
// style
import styles from './styles'
import Radium from 'radium';


class About extends Component{

    constructor(props){
        super(props)
        this.state = {
            profile : null
        }
    }

    componentDidMount(){
        this.getProfile();
    }

    getProfile = () => {
        const { firebase : { storage } } = this.props;
        const storageRef = storage().ref();
        const img = storageRef.child('img_profile/pp_2.jpg');
        img.getDownloadURL().then(url => {
            this.setState({profile: url});
        }).catch(err => {
            this.setState({profile : 'error'});
        })
    }

    verifyStateProfile = profile => {
        let done = null;

        if(profile === null) {
            done = <MainLoad />
         } else if(profile === 'error') {
            done = <div>Image Indisponible verifié votre connexion internet</div>
         } else {
            done = <ProfilePicture src = {profile} />
         }

        return done;
    }

    render(){

        const {profile} = this.state;

        let profileContent = this.verifyStateProfile(profile);

        return(
            <section 
                name = "ABOUT" 
                className = "container-fluid"
                style = {styles.about}>
                <div className = "container"> 
                    <div className = "row">
                        <div className = "col-xs-12 col-sm-5">
                        {
                            profileContent
                        }
                        </div>
                        <div className = "col-xs-12 col-sm-7">
                            <ProfileInfo />
                            <SocialLinkList socialLinks  = {socialLinks} />
                            <div style = {styles.actionAbout}>
                                <PrimaryButton 
                                    title = "CONTACT ME"
                                    styleOptions = {styles.actionAboutBtn} 
                                />
                                <PrimaryButton 
                                    title = "DOWNLOAD CV" 
                                    styleOptions = {styles.actionAboutBtn}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default firebaseConnect()(Radium(About))
