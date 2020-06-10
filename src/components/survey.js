import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link} from 'react-router-dom';

import Philips from './images/Philips.png';
import PhilipsLogo from './images/PhilipsLogo.png'
import Create from './images/Create.png';
import Pdance from './images/Pdance.gif';
import Iframe from 'react-iframe'
import Pgreat from './images/Pgreat.gif';
import Ptired from './images/Ptired.gif';
import Pangry from './images/Pangry.gif';
import Pquestion from './images/Pquestion.gif';
import Surprise from './images/Surprise.gif';
import Terror from './images/Terror.gif';


class User1 extends Component {
  render() {

    return (
      <div className="MainFormat">
        <div className="GridBar">
          <div className="PaddingBar HidePC" style={{textAlign:'center'}}>
            <Link className="LinkStyle HidePC" to="/test.github.io/project">
              <p className="IconStyle"><i class="fa fa-caret-left" aria-hidden="true"></i></p>
            </Link>
          </div>
          <div className="PaddingBar HidePC" style={{textAlign:'center'}}>
            <Link className="LinkStyle HidePC" to="/test.github.io/project">
              <p className="IconStyle">Back</p>
            </Link>
          </div>
        </div>
        <div className="GridMain">
          <div className="GPcombine GPLeft HidePhone">
            <Link className="LinkStyle" to="/test.github.io/project">
              <p className="IconStyle"><i class="fa fa-caret-left" aria-hidden="true"> </i> Back</p>
            </Link>
          </div>
          <div className="Grid4 GPcombine" style={{width: "90%", paddingRight:"5%", paddingLeft:"5%"}}>
            <div>
                <img src={Pdance} style={{padding:'1em', height:'10em', width:'auto', borderRadius:'2em'}}/><p className="ButtonSelec">Image 1</p>
            </div>
            <div>
                <img src={Pgreat} style={{padding:'1em', height:'10em', width:'auto', borderRadius:'2em'}}/><p className="ButtonSelec">Image 2</p>
            </div>
            <div>
                <img src={Ptired} style={{padding:'1em', height:'10em', width:'auto', borderRadius:'2em'}}/><p className="ButtonSelec">Image 3</p>
            </div>
            <div>
                <img src={Pangry} style={{padding:'1em', height:'10em', width:'auto', borderRadius:'2em'}}/><p className="ButtonSelec">Image 4</p>
            </div>
            <div>
                <img src={Pquestion} style={{padding:'1em', height:'10em', width:'auto', borderRadius:'2em'}}/><p className="ButtonSelec">Image 5</p>
            </div>
            <div>
                <img src={Terror} style={{padding:'1em', height:'10em', width:'auto', borderRadius:'2em'}}/><p className="ButtonSelec">Image 6</p>
            </div>
            <div>
                <img src={Surprise} style={{padding:'1em', height:'10em', width:'auto', borderRadius:'2em'}}/><p className="ButtonSelec">Image 7</p>
            </div>
            <div>
                <img src={Pquestion} style={{padding:'1em', height:'10em', width:'auto', borderRadius:'2em'}}/><p className="ButtonSelec">Image 8</p>
            </div>
          </div>
        </div>
        <div style={{display:'flex', justifyContent: 'center', height:'100vh'}}>
          <Iframe width="100%" height= "100%" src= "https://forms.office.com/Pages/ResponsePage.aspx?id=LXpAGnV2F02GkrOsKFMG5NSkRh-SxMlAm7qH-q5QKTRUNDlUMU40VVlVOVFZMVhRTVo3WkQ5TU1ZWS4u&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" style= "border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </Iframe>
        </div>
      </div>
    );
  }
  }
export default User1;
