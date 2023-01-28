import React from 'react';
/*importalni kell a logot meg a kepeket elöszor nem eleg ha csak a hrefbe/src -be 
belerakom es a src={logo} */
import logo from '../images/logo.svg';
/*data.js bol importalt  */
import { pageLinks, socialLinks } from '../data';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/*a data.js-ben letrehoztam egy pagelinks nevu export const-ot ami egy map de kinezete
egy tömb amiben objektumok vannak de itt map-kent kezelem. ezert letrehozom itt li tagre
a pagelinks.map aminek elnevezek egy parametert (link) amivel vegig megyek a tömb elemein. 
ez egy callback function amit return-val visszaadok.Tehat egyszer keszitettem el ezt a funkciot
de annyiszor kesziti el a li taget ahany a pageLinks tombbe talalhato objektumok szama*/}
        <ul className="nav-links" id="nav-links">
          {/*-------------------------------------------------- */}

          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link"> {link.text} </a>
              </li>
            );
          })}

          {/*-------------------------------------------------
          a masik valtozat amikor a return ele egy constban beleteszem a map dolgait 
          de igy mar nem kell link.id pl hivatkozni eleg {id} mert mar kinyertem 
          --------------------------------------------------- */}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {

            const { id, href, icon } = link

            return (
              <li key={id}>
                <a href={href} target="_blank" className="nav-icon"
                ><i className={icon}></i></a>
              </li>
            );
          })}

        </ul>
      </div>
    </nav>
  );
}


export default Navbar