import React, { useState } from 'react'
import './main.css'

const Main = () => {

    

    const [dropDown, setDropDown] = useState(false);
    const [flagDropDown, setFlagDropDown] = useState(false);

  return (
    <div className="mainparent">
        <div className="header">
            <div className="hederLeft">
            <div className="profileImg"><div><img src="" alt="" /></div></div>
            <span className="profileName"><div>حسین درودی</div></span>
            
            <div className="logOut" onClick={()=>{setDropDown(!dropDown); setFlagDropDown(false);}}>
                <div className="logOutReletive">
                    <i classnName="fa fa-sign-out" aria-hidden="true"></i>
                    <div className="dropdown-content"  style={{display : dropDown ? 'flex' : 'none'}}>
                        <div>
                            
                            <img src="" alt="" className="dropImg" />
                            <a className='dropDownLink' href="#home">پروفایل</a>
                        </div>
                        
                        <div>
                            
                            <img src="" alt="" className="dropImg" />
                            <a className='dropDownLink' href="#home">خروج</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Icon"></div>
             </div>
            <div className="headerMid"></div>
            <div className="headerRight">
            
                <div className="forthIcon" onClick={()=>{setFlagDropDown(!flagDropDown); setDropDown(false);}}>
                    <div className='flagReletive'>
                        <i className="fa fa-flag" aria-hidden="true"></i>
                            <div className="dropdown-content-flag" style={{display : flagDropDown ? 'flex' : 'none'}}>
                                <div>
                                    
                                    <a className='dropDownFlagLink' href="#home">Fa</a>
                                </div>
                                
                                <div>
                                    
                                    <a className='dropDownFlagLink' href="#home">En</a>
                                </div>
                                <div>
                                    
                                    <a className='dropDownFlagLink' href="#home">Ar</a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="thirdIcon"><div><i className="fa fa-bell" aria-hidden="true"></i></div></div>
                <div className="secondIcon"><div><i className="fa fa-home" aria-hidden="true"></i></div></div>
                <div className="firstIcon"><div><i className="fa fa-bars" aria-hidden="true"></i></div></div>

            </div>
        </div>
        <div className="main">
           
            <div className="mainRight">
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
                <div>right</div>
            </div>
            <div className="mainLeft">
                
                <div></div>
                

            </div>
        </div>
        <div className="footer">
            <div className="rightFooter">راست</div>
            <div className="middleFooter">وسط</div>
            <div className="leftFooter">چپ</div>
        </div>
    </div>
  )
}

export default Main