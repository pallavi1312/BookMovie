/**
 * Created by srivaspa on 22/04/18.
 */

import React from "react";
import { Link, IndexLink } from "react-router";

const Header = () => {

    return(
        <nav>
            <IndexLink to="/">Home</IndexLink>
            |
            <Link to="/bookmovie" > Book Movie </Link>
        </nav>
    )
}

export default Header;