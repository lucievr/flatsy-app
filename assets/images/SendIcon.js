import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M27.4028 4.5C27.4207 4.44643 27.4296 4.39286 27.4296 4.33928C27.4296 4.28571 27.4207 4.23214 27.4028 4.17857L27.3493 4.01786C27.135 3.05357 26.4475 2.57143 25.2868 2.57143H3.00104C2.46532 2.57143 1.95193 2.66964 1.46086 2.86607C0.969788 3.0625 0.599252 3.33036 0.349252 3.66964L0.215323 3.80357C0.0367519 4 -0.0257481 4.23214 0.0278233 4.5C0.00996617 4.53571 0.0010376 4.57143 0.0010376 4.60714V18.4286C0.0010376 19.1429 0.322466 19.8214 0.965323 20.4643C1.60818 21.1071 2.28675 21.4286 3.00104 21.4286H25.2868C25.9475 21.4286 26.4698 21.125 26.8537 20.5179C27.2376 19.9107 27.4296 19.2143 27.4296 18.4286V4.56696L27.4028 4.5ZM3.00104 4.28571H25.2868L13.7153 13.5268L2.17068 4.3125C2.31354 4.29464 2.59032 4.28571 3.00104 4.28571ZM25.2868 19.7143H3.00104C2.84032 19.7143 2.65729 19.6429 2.45193 19.5C2.24657 19.3571 2.07247 19.183 1.92961 18.9777C1.78675 18.7723 1.71532 18.5893 1.71532 18.4286V6.16071L13.1528 15.2946C13.3135 15.4375 13.501 15.5089 13.7153 15.5089C13.9296 15.4911 14.1171 15.4196 14.2778 15.2946L25.7153 6.16071V18.5357C25.7153 19.3214 25.5725 19.7143 25.2868 19.7143Z" fill="#3F3D56"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="27.4306" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const SendIcon = () => <SvgXml xml={xml} />;

export default SendIcon;