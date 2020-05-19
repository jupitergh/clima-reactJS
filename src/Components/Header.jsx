import React from 'react'
import propTypes from 'prop-types';


const Header = ({ titulo }) => {
     return (
          <nav>
               <div className="nav-wrapper light-blue darken-2">
                    <a href="#!" className="brand-logo">{titulo}</a>
               </div>
          </nav>

     );
}

Header.propTypes = {
     titulo: propTypes.string.isRequired
}

export default Header;