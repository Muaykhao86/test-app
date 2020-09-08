import * as React from "react";

function Arrow(props) {
  return (
    <svg width="9px" height="12px" viewBox="0 0 9 12" {...props}>
      <path
        d="M.447.248A.78.78 0 011.455.134l.075.059 5.966 5.25a.738.738 0 01.067 1.047l-.067.067-5.966 5.25a.78.78 0 01-1.083-.055.738.738 0 01-.01-.992l.067-.067 5.332-4.694L.504 1.307A.738.738 0 01.387.322l.06-.074z"
        transform="translate(-633 -389) translate(439 371) translate(81.12 10) translate(113.179 8)"
        fill="#FFF"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Arrow;