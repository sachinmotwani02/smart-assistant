import React from "react";
import { SvgXml } from "react-native-svg";

export default function SmileSVG(){

    const smile = `<svg width="428" height="428" viewBox="0 0 428 428" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="428" height="428" fill="white"/>
    <circle cx="105" cy="162.721" r="39.5" fill="#505050"/>
    <circle cx="325" cy="162.721" r="39.5" fill="#505050"/>
    <path d="M137.5 140.221C129.077 128.989 111.815 113.502 83.281 131.229C82.7698 131.547 82.2947 131.941 81.8898 132.386C79.3864 135.138 73.4432 141.985 67.5 152.5" stroke="#505050" stroke-width="1.5"/>
    <path d="M293.5 139.22C301.987 128.593 319.446 114.39 348.366 131.64C348.453 131.693 348.538 131.745 348.622 131.803C349.636 132.499 356.718 137.545 359.5 144.5" stroke="#505050" stroke-width="1.5"/>
    <circle cx="116.5" cy="152.221" r="12" fill="white"/>
    <circle cx="337.5" cy="152.221" r="12" fill="white"/>
    <path d="M114.5 83.2209C95 81.7206 63.5 87.2206 46 119.721" stroke="#505050" stroke-width="2.5"/>
    <path d="M314.5 83.4416C334 81.9413 365.5 87.4413 383 119.942" stroke="#505050" stroke-width="2.5"/>
    <path d="M65.5 129L75.5 139" stroke="#505050" stroke-width="3"/>
    <path d="M362.439 129L352.439 139" stroke="#505050" stroke-width="3"/>
    <path d="M83 115.5L88.4438 128.412" stroke="#505050" stroke-width="3"/>
    <path d="M344.939 115.5L339.496 128.412" stroke="#505050" stroke-width="3"/>
    <path d="M104 112L104.775 127.106" stroke="#505050" stroke-width="3"/>
    <path d="M323.939 112L323.164 127.106" stroke="#505050" stroke-width="3"/>
    <path d="M267.786 270.519C242.499 325.649 170.575 299.398 161.123 268.459C161.13 266.635 165.896 272.991 179.442 281.128C200.317 294.415 217.3 299.903 242.54 284.462C254.555 277.111 255.612 271.098 258.923 266.697C262.234 262.295 266.871 260.549 268.07 262.398C269.028 263.877 268.28 268.428 267.786 270.519Z" fill="#505050" stroke="#505050" stroke-width="4"/>
    <ellipse cx="101" cy="247" rx="29" ry="19" fill="#FFE7E7" fill-opacity="0.65"/>
    <ellipse cx="333" cy="247" rx="29" ry="19" fill="#FFE7E7" fill-opacity="0.65"/>
    </svg>`;

    const SmileSVG = () => <SvgXml xml={smile} width='100%' />;

    return <SmileSVG />;
}