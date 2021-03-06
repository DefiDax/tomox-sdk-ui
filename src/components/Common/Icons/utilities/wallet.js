import React from 'react'

const SvgWallet = props => (
    <svg
        width={props.width || 20}
        height={props.height || 20}
        viewBox="0 0 20 20"
        >
        <path
            style={{
                stroke: "none",
                fillRule: "nonzero",
                fill:"#6E7793",
                fillOpacity: 1,
            }}
            d="M18.828 10.727V9.96a2.93 2.93 0 0 0-1.172-2.344V6.445a2.933 2.933 0 0 0-2.93-2.93h-.585V1.759A1.76 1.76 0 0 0 12.383 0h-7.11a1.76 1.76 0 0 0-1.757 1.758v1.758H2.344A2.346 2.346 0 0 0 0 5.859V17.07A2.93 2.93 0 0 0 2.93 20h12.968a2.93 2.93 0 0 0 2.93-2.93v-.687A1.756 1.756 0 0 0 20 14.727v-2.344c0-.746-.469-1.406-1.172-1.656zm-4.754-5.91h.555c.918 0 1.668.745 1.668 1.663v.56h-2.223zM9.258 1.108h3.101c.332 0 .606.266.606.594V7.04H9.258zm-2.219 0h1.11v5.93h-1.11zm-2.223.594c0-.328.247-.594.555-.594h.555v5.93h-1.11zM2.223 4.816h1.109V7.04h-1.11A1.12 1.12 0 0 1 1.11 5.926c.004-.614.5-1.11 1.114-1.11zm15.554 12.286c0 .988-.797 1.789-1.777 1.789H2.887c-.977 0-1.778-.801-1.778-1.79V7.778c.364.211.77.32 1.188.32H16c.98 0 1.777.801 1.777 1.786v.676H16a2.972 2.972 0 0 0-2.96 2.972A2.972 2.972 0 0 0 16 16.508h1.777zm1.114-2.473c0 .309-.274.555-.602.555h-2.41c-.996 0-1.805-.746-1.805-1.664 0-.922.809-1.668 1.805-1.668h2.41c.332 0 .602.25.602.554zm0 0"
            />
        <path
            style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "#6E7793",
                fillOpacity: 1,
            }}
            d="M17.191 13.508a.524.524 0 1 1-1.05 0 .524.524 0 0 1 1.05 0zm0 0"
            />
    </svg>
)

export default SvgWallet