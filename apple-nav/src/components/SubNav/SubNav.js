import React from "react";

function SubNav(props) {
  const apl = apls.find(({ name }) => name === matchMedia.params.name)
  return 
  //props.apl
  //   .find(a => a.name === props.match.params.name)
    .subLinks.map(apl => (
      <div>
        <img src={apl.img} alt="" />
        {/*<Link to={`/${linkName}/${apl.name}`}>{apl.name}</Link>*/}
      </div>
    ));
}

export default SubNav;
