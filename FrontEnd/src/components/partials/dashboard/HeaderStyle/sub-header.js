import React, {memo,Fragment} from 'react'

//img
import topHeader from '../../../../assets/images/dashboard/top-header.jpg'
import topHeader1 from '../../../../assets/images/dashboard/top-header1.png'
import topHeader2 from '../../../../assets/images/dashboard/top-header2.png'
import topHeader3 from '../../../../assets/images/dashboard/top-header3.png'
import topHeader4 from '../../../../assets/images/dashboard/top-header4.png'
import topHeader5 from '../../../../assets/images/dashboard/top-header5.png'


const SubHeader = memo((props) => {


    return (
        <Fragment>
            <div className="iq-navbar-header" style={{height: "215px"}}>
               
                {/* {{!-- rounded-bottom if not using animation --}} */}
                <div className="iq-header-img">
                    <img src={topHeader} alt="header" className="theme-color-default-img img-fluid w-100 h-100 animated-scaleX"/>
                    <img src={topHeader1} alt="header" className=" theme-color-purple-img img-fluid w-100 h-100 animated-scaleX"/>
                    <img src={topHeader2} alt="header" className="theme-color-blue-img img-fluid w-100 h-100 animated-scaleX"/>
                    <img src={topHeader3} alt="header" className="theme-color-green-img img-fluid w-100 h-100 animated-scaleX"/>
                    <img src={topHeader4} alt="header" className="theme-color-yellow-img img-fluid w-100 h-100 animated-scaleX"/>
                    <img src={topHeader5} alt="header" className="theme-color-pink-img img-fluid w-100 h-100 animated-scaleX"/>
                </div>
            </div>
        </Fragment>
    )
})

export default SubHeader
