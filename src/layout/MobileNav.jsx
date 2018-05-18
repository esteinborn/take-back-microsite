// import React from "react";
// import IconMenu from "material-ui/IconMenu";
// import MenuItem from "material-ui/MenuItem";
// import IconButton from "material-ui/IconButton";
// import HamburgerIcon from "material-ui/svg-icons/image/dehaze";
//
// const navOptions = [
//   { text: "Find a Location", link: "map" },
//   { text: "Texting Service", link: "text" },
//   { text: "FAQ", link: "faq" },
//   { text: "Toolkit", link: "toolkit" },
//   { text: "About the Opioid Crisis", link: "about" },
//   { text: "An Initiative of NY AG Schneiderman", link: "nyag" },
// ];
//
// const generateNavOptions = () => {
//   return navOptions.map(option => {
//     return <MenuItem primaryText={option.text} />;
//   });
// };
//
// const MobileNav = () => {
//   return (
//     <div>
//       <IconMenu
//         iconButtonElement={
//           <IconButton>
//             <HamburgerIcon />
//           </IconButton>
//         }
//         anchorOrigin={{ horizontal: "left", vertical: "top" }}
//         targetOrigin={{ horizontal: "left", vertical: "top" }}
//       >
//         {generateNavOptions()}
//       </IconMenu>
//     </div>
//   );
// };
//
// export default MobileNav;

import React from "react";
import IconButton from "material-ui/IconButton";
import Menu, { MenuItem } from "material-ui/Menu";
import HamburgerIcon from "material-ui-icons/Dehaze";
import { Link } from "react-scroll";

const options = [
  { text: "Find a Location", link: "map" },
  { text: "Get a Reminder", link: "text" },
  { text: "FAQ", link: "faq" },
  // { text: "Toolkit", link: "toolkit" },
  { text: "About the Opioid Crisis", link: "about" },
  { text: "An Initiative of the New York AG's Office", link: "nyag" },
];

const ITEM_HEIGHT = 70;

class MobileNav extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    const iconStyle = {
      fontSize: 40,
    };

    return (
      <div id="mobile-nav">
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? "long-menu" : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <HamburgerIcon style={iconStyle} />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              // width: 200,
            },
          }}
        >
          {options.map(option => (
            <Link
              to={option.link}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-60}
              duration={500}
              isDynamic={true}
              key={option.text}
            >
              <MenuItem key={option.text} onClick={this.handleClose}>
                {option.text}
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </div>
    );
  }
}

export default MobileNav;
