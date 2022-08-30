import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import mtb_Login_Images from '@salesforce/resourceUrl/mtb_Login_Images';
import mtp_CourcePage2_Css from '@salesforce/resourceUrl/mtp_CourcePage2_Css';

export default class Mtp_CoursePage2 extends LightningElement {

    Mod_1 = mtb_Login_Images + '/Mod_1.png';
    Mod_2 = mtb_Login_Images + '/Mod_2.png';
    Mod_3 = mtb_Login_Images + '/Mod_3.png';
    Mod_4 = mtb_Login_Images + '/Mod_4.png';
    Mod_5 = mtb_Login_Images + '/Mod_5.png';
    Mod_6 = mtb_Login_Images + '/Mod_6.png';
    image_72 = mtb_Login_Images + '/image_72.png';
    image_73 = mtb_Login_Images + '/image_73.png';

    connectedCallback(){

    }

    renderedCallback(){
        Promise.all([
            loadStyle(this, mtp_CourcePage2_Css)
        ]).then(() => {
            console.log('Css loaded');
        })
        .catch(error => {
            console.log({error});
        });
    }
    
    // Get Background Image
    get backgroundImage() {
        return `background-image:url(${mtb_Login_Images + '/course_image.png'})`;
    }

}