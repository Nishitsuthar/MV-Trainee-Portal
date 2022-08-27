import { LightningElement } from 'lwc';
import mtpCoursePage1Img1 from '@salesforce/resourceUrl/mtp_CoursePage1_Img1';
import mtpCoursePage1Img2 from '@salesforce/resourceUrl/mtp_CoursePage1_Img2';
import mtpCoursePage1Img3 from '@salesforce/resourceUrl/mtp_CoursePage1_Img3';
import mtpCoursePage1Img4 from '@salesforce/resourceUrl/mtp_CoursePage1_Img4';



export default class Mtp_CoursePage1 extends LightningElement {

    cpImg1 = mtpCoursePage1Img1;    //Image beside professional couse text
    cpImg2 = mtpCoursePage1Img2;    //Cat Image
    cpImg3 = mtpCoursePage1Img3;    //Image beside cat
    cpImg4 = mtpCoursePage1Img4;    //Small airplane image

}