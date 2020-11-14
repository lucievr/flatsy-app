import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="300" height="153" viewBox="0 0 300 153" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M64.5588 138.503C70.2951 138.503 74.9452 129.015 74.9452 117.311C74.9452 105.606 70.2951 96.118 64.5588 96.118C58.8225 96.118 54.1724 105.606 54.1724 117.311C54.1724 129.015 58.8225 138.503 64.5588 138.503Z" fill="#E6E6E6"/>
<path d="M65.5179 151.999C61.358 127.041 65.476 102.173 65.5181 101.924L66.3273 102.062C66.2854 102.308 62.191 127.046 66.3275 151.865L65.5179 151.999Z" fill="#3F3D56"/>
<path d="M73.703 112.753L64.3109 117.777L64.6981 118.501L74.0902 113.477L73.703 112.753Z" fill="#3F3D56"/>
<path d="M54.7856 115.27L54.3983 115.994L63.7893 121.02L64.1767 120.297L54.7856 115.27Z" fill="#3F3D56"/>
<path d="M274.034 1.41449H257.011V60.3418H274.034V1.41449Z" fill="#3F3D56"/>
<path d="M285.277 49.2564L243.873 0L160.763 0.759905L110.347 49.8657L111.366 50.5206H111.002V152.661H285.165V50.5206L285.277 49.2564Z" fill="#3F3D56"/>
<path d="M243.916 0.104935L192.191 60.747V152.661H285.165V49.2111L243.916 0.104935Z" fill="#00BFA6"/>
<path d="M248.499 101.831H229.511V118.614H248.499V101.831Z" fill="#3F3D56"/>
<path d="M248.499 72.782H229.511V89.2988H248.499V72.782Z" fill="#3F3D56"/>
<path d="M248.499 101.831H229.511V118.614H248.499V101.831Z" fill="white"/>
<path d="M248.499 72.782H229.511V89.2988H248.499V72.782Z" fill="white"/>
<path d="M179.297 149.666C179.297 149.666 179.704 141.137 188.048 142.129Z" fill="#E6E6E6"/>
<path d="M176.939 141.55C179.245 141.55 181.115 139.68 181.115 137.373C181.115 135.067 179.245 133.197 176.939 133.197C174.632 133.197 172.762 135.067 172.762 137.373C172.762 139.68 174.632 141.55 176.939 141.55Z" fill="#00BFA6"/>
<path d="M177.438 144.406H176.259V152.658H177.438V144.406Z" fill="#E6E6E6"/>
<path d="M39.6033 126.077C50.8227 126.077 59.9179 107.519 59.9179 84.6269C59.9179 61.7347 50.8227 43.1768 39.6033 43.1768C28.3838 43.1768 19.2886 61.7347 19.2886 84.6269C19.2886 107.519 28.3838 126.077 39.6033 126.077Z" fill="#00BFA6"/>
<path d="M41.866 152.41C33.7407 103.658 41.784 55.0843 41.8662 54.5994L42.6753 54.7364C42.5934 55.2202 34.5737 103.663 42.6755 152.275L41.866 152.41Z" fill="#3F3D56"/>
<path d="M57.6737 76.0596L39.3033 85.8856L39.6904 86.6094L58.0608 76.7834L57.6737 76.0596Z" fill="#3F3D56"/>
<path d="M20.3031 80.9818L19.9157 81.7055L38.2834 91.5366L38.6707 90.8129L20.3031 80.9818Z" fill="#3F3D56"/>
<path d="M87.7169 116.4C103.07 116.4 115.516 91.0053 115.516 59.6791C115.516 28.3529 103.07 2.95796 87.7169 2.95796C72.364 2.95796 59.918 28.3529 59.918 59.6791C59.918 91.0053 72.364 116.4 87.7169 116.4Z" fill="#00BFA6"/>
<path d="M90.9626 152.41C79.8478 85.7218 90.8503 19.2774 90.9628 18.6141L91.7719 18.7512C91.6597 19.4133 80.6808 85.727 91.7721 152.275L90.9626 152.41Z" fill="#3F3D56"/>
<path d="M112.516 48.0886L87.3778 61.5347L87.765 62.2586L112.903 48.8125L112.516 48.0886Z" fill="#3F3D56"/>
<path d="M61.2348 54.8245L60.8474 55.5482L85.9822 69.0009L86.3695 68.2772L61.2348 54.8245Z" fill="#3F3D56"/>
<path d="M300 151.986H0V152.699H300V151.986Z" fill="#3F3D56"/>
<path d="M164.117 97.3782H145.129V114.161H164.117V97.3782Z" fill="#3F3D56"/>
<path d="M164.117 68.3288H145.129V84.8456H164.117V68.3288Z" fill="#3F3D56"/>
<path d="M164.117 97.3782H145.129V114.161H164.117V97.3782Z" fill="white"/>
<path d="M164.117 68.3288H145.129V84.8456H164.117V68.3288Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="300" height="152.699" fill="white"/>
</clipPath>
</defs>
</svg>
`;

export default () => <SvgXml xml={xml} />;
