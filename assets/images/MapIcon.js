import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 5.97334C14.9926 5.97334 14.0079 6.27205 13.1703 6.83172C12.3327 7.39138 11.6799 8.18685 11.2944 9.11753C10.9089 10.0482 10.808 11.0723 11.0045 12.0603C11.2011 13.0483 11.6862 13.9559 12.3985 14.6682C13.1108 15.3805 14.0183 15.8656 15.0064 16.0621C15.9944 16.2587 17.0185 16.1578 17.9491 15.7723C18.8798 15.3868 19.6753 14.734 20.235 13.8964C20.7946 13.0588 21.0933 12.074 21.0933 11.0667C21.0933 9.71583 20.5567 8.42032 19.6015 7.46514C18.6464 6.50995 17.3508 5.97334 16 5.97334V5.97334ZM16 14.3822C15.3443 14.3822 14.7032 14.1878 14.158 13.8235C13.6127 13.4591 13.1878 12.9413 12.9368 12.3355C12.6859 11.7296 12.6202 11.063 12.7482 10.4198C12.8761 9.77668 13.1919 9.18591 13.6556 8.72222C14.1192 8.25853 14.71 7.94275 15.3532 7.81482C15.9963 7.68689 16.663 7.75255 17.2688 8.00349C17.8747 8.25444 18.3925 8.6794 18.7568 9.22464C19.1211 9.76988 19.3156 10.4109 19.3156 11.0667C19.3132 11.9445 18.9629 12.7855 18.3413 13.4054C17.7198 14.0252 16.8778 14.3733 16 14.3733V14.3822Z" fill="#3F3D56"/>
<path d="M16 1.77778C13.2313 1.78009 10.576 2.87794 8.61403 4.83155C6.6521 6.78516 5.54296 9.43577 5.52887 12.2044C5.52887 16.3556 7.85776 19.8311 9.56443 22.3644L9.87554 22.8267C11.5736 25.2877 13.3952 27.6611 15.3333 29.9378L16.0089 30.7289L16.6844 29.9378C18.6223 27.6609 20.4439 25.2875 22.1422 22.8267L22.4533 22.3556C24.1511 19.8222 26.48 16.3556 26.48 12.2044C26.4659 9.43423 25.3555 6.78228 23.3917 4.82842C21.4278 2.87456 18.7702 1.77774 16 1.77778V1.77778ZM20.9689 21.3333L20.6489 21.8044C19.12 24.0978 17.0933 26.6667 16 27.9378C14.9511 26.6667 12.88 24.0978 11.3511 21.8044L11.04 21.3333C9.46665 18.9867 7.30665 15.7778 7.30665 12.1689C7.30665 11.0273 7.53151 9.89682 7.96839 8.8421C8.40527 7.78737 9.04562 6.82903 9.85287 6.02177C10.6601 5.21452 11.6185 4.57418 12.6732 4.1373C13.7279 3.70042 14.8584 3.47556 16 3.47556C17.1416 3.47556 18.2721 3.70042 19.3268 4.1373C20.3815 4.57418 21.3398 5.21452 22.1471 6.02177C22.9543 6.82903 23.5947 7.78737 24.0316 8.8421C24.4685 9.89682 24.6933 11.0273 24.6933 12.1689C24.6933 15.8133 22.5422 19.0222 20.9689 21.3333V21.3333Z" fill="#3F3D56"/>
</svg>
`;

const MapIcon = () => <SvgXml xml={xml} />;

export default MapIcon;