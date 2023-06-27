import React from 'react'
// import { Switch, Route } from 'react-router-dom'

// auth
import ConfirmMail from '../views/dashboard/auth/confirm-mail'
import LockScreen from '../views/dashboard/auth/lock-screen'
import EditPassword from '../views/dashboard/auth/EditPassword';

import SignIn from '../views/dashboard/auth/sign-in'
import SignUp from '../views/dashboard/auth/sign-up'

// const SimpleRouter = () => {
//     return (
//             <>
//             <Switch>

//                 {/* auth */}
//                 <Route exact path="/auth/confirm-mail" component={ConfirmMail}/>
//                 <Route exact path="/auth/lock-screen"  component={LockScreen}/>
//                 <Route exact path="/auth/recoverpw"    component={Recoverpw}/>
//                 <Route exact path="/auth/sign-in"      component={SignIn}/>
//                 <Route exact path="/auth/sign-up"      component={SignUp}/>  
//                 {/* error */}
//                 <Route exact path="/errors/error404"   component={Error404}/>  
//                 <Route exact path="/errors/error500"  component={Error500}/>
//                 <Route exact path="/errors/maintenance" component={Maintenance}/>
//             </Switch>

//             </>
//     )
// }

export const SimpleRouter = [
    {
        path: 'auth/sign-in',
        element: <SignIn />
    },
    {
        path: 'auth/sign-up',
        element: <SignUp />
    },
    {
        path: 'auth/confirm-mail',
        element: <ConfirmMail />
    },
    {
        path: 'auth/lock-screen',
        element: <LockScreen />
    },
    
    {
        path: '/auth/EditPassword',
        element: <EditPassword />
    }
   
   
]
