const sizes = {
  mobile: "37.5em",
  tabPort: "56.25em",
  tabLand: "75em",
  bigDesktop: "112.5em",
};

const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  tabPort: `(max-width: ${sizes.tabPort})`,
  tabLand: `(max-width: ${sizes.tabLand})`,
  bigDisktop: `(max-width: ${sizes.bigDesktop})`,
};

export default devices;
