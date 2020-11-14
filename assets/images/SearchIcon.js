import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" color="grey" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 18C15.0152 18 18 15.0152 18 11.3333C18 7.65143 15.0152 4.66667 11.3333 4.66667C7.65142 4.66667 4.66666 7.65143 4.66666 11.3333C4.66666 15.0152 7.65142 18 11.3333 18Z" stroke="currentColor" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.428 23.3333L16 16" stroke="currentColor" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const SearchIcon = ({ color }) => <SvgXml xml={xml} color={color} />;

export default SearchIcon;
