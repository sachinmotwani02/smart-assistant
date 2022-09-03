import React from "react";
import { SvgXml } from "react-native-svg";

export default function SadSVG(){

    const sad = `<svg width="428" height="428" viewBox="0 0 428 428" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="428" height="428" fill="white"/>
    <circle cx="105" cy="162.721" r="39.5" fill="#505050"/>
    <circle cx="327" cy="162.721" r="39.5" fill="#505050"/>
    <path d="M308.076 335.004C269.218 238.736 143.554 272.899 130.939 335.691C130.243 339.155 133.639 341.791 137.02 340.763C149.319 337.024 163.671 333.602 188.919 328.429C224.742 324.013 240.768 324.455 271.878 331.961C285.28 335.195 295.831 338.528 302.859 340.702C306.494 341.826 309.5 338.532 308.076 335.004Z" fill="#505050" stroke="#505050" stroke-width="3"/>
    <circle cx="114.5" cy="154.5" r="14.5" fill="white"/>
    <ellipse cx="337" cy="154.5" rx="14" ry="14.5" fill="white"/>
    <path d="M195 293.59V292C195 290.896 195.895 290 197 290L243.183 290C244.167 290 245.005 290.715 245.159 291.687L245.623 294.619C245.819 295.856 244.842 296.967 243.59 296.931L196.943 295.589C195.861 295.558 195 294.672 195 293.59Z" fill="white"/>
    <path d="M44.6979 105.745C59.3931 108.856 99.2242 103.015 113.792 72.0587" stroke="#505050" stroke-width="2.5"/>
    <path d="M376.429 105.594C361.479 108.637 320.917 102.731 306 71.9991" stroke="#505050" stroke-width="2.5"/>
    <ellipse cx="102" cy="247" rx="29" ry="19" fill="#FFE7E7" fill-opacity="0.65"/>
    <ellipse cx="335" cy="247" rx="29" ry="19" fill="#FFE7E7" fill-opacity="0.65"/>
    <circle cx="91" cy="182" r="5" fill="white"/>
    <circle cx="313" cy="182" r="5" fill="white"/>
    </svg>`;

    const SadSVG = () => <SvgXml xml={sad} width='100%' />;

    return <SadSVG />;
}