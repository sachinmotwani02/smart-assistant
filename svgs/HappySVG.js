import React from "react";
import { SvgXml } from "react-native-svg";

export default function HappySVG(){

    const happy = `<svg width="428" height="428" viewBox="0 0 428 428" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="428" height="428" fill="white"/>
    <path d="M318.831 285.517C278.175 399.219 139.692 357.817 129.504 284.261C129.111 281.422 131.408 279 134.274 279H314.222C317.588 279 319.965 282.347 318.831 285.517Z" fill="#505050" stroke="#505050" stroke-width="3"/>
    <ellipse cx="92" cy="237.5" rx="31" ry="20.5" fill="#FFE7E7" fill-opacity="0.65"/>
    <ellipse cx="342" cy="237.5" rx="31" ry="20.5" fill="#FFE7E7" fill-opacity="0.65"/>
    <path d="M174.5 290.166V286.221C174.5 285.117 175.395 284.221 176.5 284.221L274.641 284.221C275.575 284.221 276.385 284.868 276.592 285.78L277.937 291.729C278.223 292.996 277.244 294.195 275.946 294.169L176.46 292.165C175.371 292.143 174.5 291.255 174.5 290.166Z" fill="white"/>
    <path d="M116.188 76.8499C96.9468 73.3464 65.0476 75.5683 44.289 106.091" stroke="#505050" stroke-width="2.5"/>
    <path d="M304.023 77.2844C323.264 73.781 355.163 76.0029 375.922 106.525" stroke="#505050" stroke-width="2.5"/>
    <path d="M153.27 166.992C125.132 113.261 54.4999 134 48.4999 174.001C48.603 175.822 45.0079 188.981 61.9997 170.001C81 154 93 139.5 120 152.001C132.782 157.918 137.605 165.106 141.5 169C145.499 173 152.17 175.909 153.27 174C154.15 172.473 153.872 169.054 153.27 166.992Z" fill="#505050" stroke="#505050" stroke-width="4"/>
    <path d="M269.908 166.844C298.046 113.114 368.678 133.853 374.678 173.853C374.575 175.674 378.17 188.834 361.178 169.854C344 152.5 326.5 141 304.5 151.5C291.785 157.569 286.894 165.105 283 169C279 173 271.008 175.762 269.908 173.853C269.028 172.326 269.306 168.906 269.908 166.844Z" fill="#505050" stroke="#505050" stroke-width="4"/>
    </svg>`;

    const HappySVG = () => <SvgXml xml={happy} width='100%' />;

    return <HappySVG />;
}