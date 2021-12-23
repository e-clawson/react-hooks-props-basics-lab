import React from "react";

function Links({github, linkedin}) {
  return (
    <>
      <h3>Links</h3>
      <a href={linkedin}> {linkedin}</a>
      <a href={github}> {github} </a>
    </>
  );
}

export default Links;