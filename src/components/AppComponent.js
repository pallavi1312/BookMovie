/**
 * Created by srivaspa on 22/04/18.
 */

import React from "react";
import Header from "./common/header"

export default class App extends React.Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <div >{this.props.children}</div>
            </div>
    )
    }
}
