import React, { Fragment } from 'react';
import {Context} from '../Api/appContext'


const LoggedIn = () => {
    return(
        <Context.Consumer>
            {({user, logout}) => (
                <div>
                    <p> Hello {user.name} </p>
                    <ul>
                        <li>Dashboard</li>
                        <li onClick={logout}>Logout</li>
                    </ul>
                </div>
            )}
        </Context.Consumer>
    )
}


const LoggedOut = () => {
    return(
        <Context.Consumer>
            {({login}) => (
                <div>
                    <p>Please Login</p>
                    <ul>
                        <li onClick={login}>Login</li>
                        <li>Register</li>
                    </ul>
                </div>
            )}
        </Context.Consumer>
    )
}

const BasicNav = () => {
    
    return(
        <Context.Consumer>
            {({isAuthenticated}) => (
                <Fragment>
                    {isAuthenticated && <LoggedIn/>}
                    {!isAuthenticated && <LoggedOut/>}
                </Fragment>
            )}
        </Context.Consumer>
    )
    

    

}

export default BasicNav;