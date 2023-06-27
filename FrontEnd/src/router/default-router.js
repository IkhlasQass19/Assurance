import React from 'react'
import Index from '../views/dashboard/index'
// import { Switch, Route } from 'react-router-dom'
// user
import UserProfile from '../views/dashboard/app/user-profile';
import UserAdd from '../views/dashboard/app/user-add';
import UserList from '../views/dashboard/app/user-list';
// import userProfileEdit from '../views/dashboard/app/user-privacy-setting';
import UserEdit from '../views/dashboard/app/user-edit';
import AdhEdit from '../views/dashboard/app/Adh-edit';
// Form
import FormValidation from '../views/dashboard/from/form-validation';
import FormWizard from '../views/dashboard/from/form-wizard';
// table
import BootstrapTable from '../views/dashboard/table/bootstrap-table';
import Etudosagent from '../views/dashboard/table/etudosagent';
import Timelinee from '../views/dashboard/table/Timeline';
import TimeAdmin from '../views/dashboard/table/TimeAdln';
import DosAdmAcc from '../views/dashboard/table/dosAdmAcc';
import DosAdmRef from '../views/dashboard/table/dosAdmRef';

import AjouterAdherent from '../views/dashboard/app/Adh-add';
import Pdf from '../views/dashboard/table/voirpdf';
import ListAdherent from '../views/dashboard/app/Adh-list';
//extra
// import PrivacyPolicy from '../views/dashboard/extra/privacy-policy';
// import TermsofService from '../views/dashboard/extra/terms-of-service';

//TransitionGroup
// import { TransitionGroup, CSSTransition } from "react-transition-group";
//Special Pages


//admin

import Default from '../layouts/dashboard/default';


export const DefaultRouter = [
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: 'dashboard',
                element: <Index />
            },


            {
                path: 'dashboard/app/user-profile',
                element: <UserProfile />
            },
            {
                path: 'dashboard/app/user-add',
                element: <UserAdd />
            },

            {
                path: 'dashboard/app/user-edit',
                element: <UserEdit />
            },
            {
                path: 'dashboard/app/user-list',
                element: <UserList />
            },
            {
                path: 'dashboard/app/Adh-add',
                element: <AjouterAdherent />
            },
            {
                path: 'dashboard/app/Adh-list',
                element: <ListAdherent />
            },
            {
                path: 'dashboard/app/adh-edit',
                element: <AdhEdit />
            },


            {
                path: 'dashboard/AddDemmande',
                element: <FormWizard />
            },
            {
                path: 'dashboard/form/form-validation',
                element: <FormValidation />
            },
            // Table
            {
                path: 'dashboard/suivi',
                element: <BootstrapTable />
            },
            {
                path: 'dashboard/historique',
                element: <Timelinee />
            },
            {
                path: 'dashboard/dosAdmAcc',
                element: <DosAdmAcc />
            },

            //dosAdmRef
            {
                path: 'dashboard/dosAdmRef',
                element: <DosAdmRef />
            },
            //agent
            {
                path: 'dashboard/traiterdos',
                element: < Etudosagent />
            },
            //  voir pdf
            {
                path: 'dashboardAgent/pdf',
                element: < Pdf />
            },
            {
                path: 'dashboard/table/TimeAdmin',
                element: <TimeAdmin />
            },

        ]
    }
]
// const DefaultRouter = () => {
//     return (
//         <TransitionGroup>
//             <CSSTransition classNames="fadein" timeout={300}>
//                 <Switch>
//                     <Route path="/dashboard" exact component={Index} />
//                     {/* user */}
//                     <Route path="/dashboard/app/user-profile"     exact component={UserProfile} />
//                     <Route path="/dashboard/app/user-add"         exact component={UserAdd}/>
//                     <Route path="/dashboard/app/user-list"        exact component={UserList}/>
//                     <Route path="/dashboard/app/user-privacy-setting" exact component={userProfileEdit}/>
//                      {/* widget */}
//                      <Route path="/dashboard/widget/widgetbasic"   exact component={Widgetbasic}/>
//                      <Route path="/dashboard/widget/widgetcard"    exact component={Widgetcard}/>
//                      <Route path="/dashboard/widget/widgetchart"   exact component={Widgetchart}/>
//                      {/* icon */}
//                      <Route path="/dashboard/icon/solid"           exact component={Solid}/>
//                      <Route path="/dashboard/icon/outline"         exact component={Outline}/>
//                      <Route path="/dashboard/icon/dual-tone"       exact component={DualTone}/>
//                      {/* From */}
//                      <Route path="/dashboard/form/form-element"    exact component={FormElement}/>
//                      <Route path="/dashboard/form/form-validation" exact component={FormValidation}/>
//                      <Route path="/dashboard/form/form-wizard"     exact component={FormWizard}/>
//                      {/* table */}
//                      <Route path="/dashboard/table/bootstrap-table" exact component={BootstrapTable}/>
//                      <Route path="/dashboard/table/table-data"      exact component={TableData}/>
//                      {/*special pages */}
//                      <Route path="/dashboard/special-pages/billing" exact component={Billing}/>
//                      <Route path="/dashboard/special-pages/kanban" exact component={Kanban}/>
//                      <Route path="/dashboard/special-pages/pricing" exact component={Pricing}/>
//                      <Route path="/dashboard/special-pages/timeline" exact component={Timeline}/>
//                      <Route path="/dashboard/special-pages/calender" exact component={Calender}/>
//                      {/* map */}
//                      <Route path="/dashboard/map/vector" exact component={Vector}/>
//                      <Route path="/dashboard/map/google" exact component={Google}/>
//                      {/* extra */}
//                      <Route path="/dashboard/extra/privacy-policy" exact component={PrivacyPolicy}/>
//                      <Route path="/dashboard/extra/terms-of-service" exact component={TermsofService}/>
//                      {/*admin*/}
//                      <Route path="/dashboard/admin/admin" exact component={Admin}/>
//                 </Switch>
//             </CSSTransition>
//         </TransitionGroup>
//     )
// }

// export default DefaultRouter
