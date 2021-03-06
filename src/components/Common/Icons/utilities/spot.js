import React from "react"

function Spot(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
    >
      <defs>
        <path
          id="path-1"
          d="M0 0.11721875L11.3177674 0.11721875 11.3177674 11.5234687 0 11.5234687z"
        ></path>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-20 -230)">
          <g transform="translate(20 230)">
            <g>
              <mask id="mask-2" fill={props.color || "#fff"}>
                <use xlinkHref="#path-1"></use>
              </mask>
              <path
                fill={props.color || "#4b5267"}
                d="M11.314.975V.963a.924.924 0 00-.022-.123c-.001-.008-.004-.015-.006-.023a.934.934 0 00-.039-.12V.695a.925.925 0 00-.142-.238l-.001-.001a.927.927 0 00-.083-.087l-.02-.02a.935.935 0 00-.096-.074l-.003-.002a.932.932 0 00-.39-.147.943.943 0 00-.124-.01H5.426c-.513 0-.93.42-.93.938 0 .517.417.937.93.937h2.716L.272 9.923a.942.942 0 000 1.326.923.923 0 001.316 0l7.87-7.931v2.58c0 .518.416.938.93.938.513 0 .93-.42.93-.938V1.055a.958.958 0 00-.004-.08"
                mask="url(#mask-2)"
              ></path>
            </g>
            <path
              fill={props.color || "#4b5267"}
              d="M18.45 17.89c0 .301-.245.547-.543.547a.546.546 0 01-.543-.546V8.203c0-.3.245-.547.543-.547.298 0 .543.246.543.547v9.688zm-.543-11.953a2.101 2.101 0 00-2.093 2.11v9.844c0 1.165.937 2.109 2.093 2.109A2.101 2.101 0 0020 17.89V8.048c0-1.165-.937-2.11-2.093-2.11z"
            ></path>
            <path
              fill={props.color || "#4b5267"}
              d="M10.543 17.852c0 .3-.245.546-.543.546a.546.546 0 01-.543-.546V12.07c0-.3.245-.547.543-.547.298 0 .543.247.543.547v5.782zM10 10a2.101 2.101 0 00-2.093 2.11v5.78c0 1.166.937 2.11 2.093 2.11a2.101 2.101 0 002.093-2.11v-5.78c0-1.166-.937-2.11-2.093-2.11z"
            ></path>
            <path
              fill={props.color || "#4b5267"}
              d="M2.636 17.89c0 .301-.245.547-.543.547a.546.546 0 01-.543-.546v-2.032c0-.3.245-.546.543-.546.298 0 .543.246.543.546v2.032zm-.543-3.984A2.101 2.101 0 000 16.016v1.875C0 19.056.937 20 2.093 20a2.101 2.101 0 002.093-2.11v-1.874c0-1.165-.937-2.11-2.093-2.11z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Spot
