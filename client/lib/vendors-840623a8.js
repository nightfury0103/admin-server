(self.webpackChunkblockchain_wallet_v4_frontend=self.webpackChunkblockchain_wallet_v4_frontend||[]).push([[6037],{"../blockchain-info-components/node_modules/polished/dist/polished.esm.js":(e,r,n)=>{"use strict";n.d(r,{Cy:()=>complement,_j:()=>w,se:()=>grayscale,U_:()=>invert,$n:()=>v,DZ:()=>y});var t=n("../../node_modules/@babel/runtime/helpers/esm/extends.js"),o=n("../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),i=n("../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),a=n("../../node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");var u=function(e){function PolishedError(r){var n;return n=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+r+" for more information.")||this,(0,o.Z)(n)}return(0,i.Z)(PolishedError,e),PolishedError}((0,a.Z)(Error));function colorToInt(e){return Math.round(255*e)}function convertToInt(e,r,n){return colorToInt(e)+","+colorToInt(r)+","+colorToInt(n)}function hslToRgb(e,r,n,t){if(void 0===t&&(t=convertToInt),0===r)return t(n,n,n);var o=(e%360+360)%360/60,i=(1-Math.abs(2*n-1))*r,a=i*(1-Math.abs(o%2-1)),u=0,f=0,s=0;o>=0&&o<1?(u=i,f=a):o>=1&&o<2?(u=a,f=i):o>=2&&o<3?(f=i,s=a):o>=3&&o<4?(f=a,s=i):o>=4&&o<5?(u=a,s=i):o>=5&&o<6&&(u=i,s=a);var l=n-i/2;return t(u+l,f+l,s+l)}var f={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var s=/^#[a-fA-F0-9]{6}$/,l=/^#[a-fA-F0-9]{8}$/,c=/^#[a-fA-F0-9]{3}$/,h=/^#[a-fA-F0-9]{4}$/,g=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,d=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,p=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,b=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;function parseToRgb(e){if("string"!=typeof e)throw new u(3);var r=function nameToHex(e){if("string"!=typeof e)return e;var r=e.toLowerCase();return f[r]?"#"+f[r]:e}(e);if(r.match(s))return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16)};if(r.match(l)){var n=parseFloat((parseInt(""+r[7]+r[8],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16),alpha:n}}if(r.match(c))return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16)};if(r.match(h)){var t=parseFloat((parseInt(""+r[4]+r[4],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16),alpha:t}}var o=g.exec(r);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10)};var i=d.exec(r);if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10),alpha:parseFloat(""+i[4])};var a=p.exec(r);if(a){var m="rgb("+hslToRgb(parseInt(""+a[1],10),parseInt(""+a[2],10)/100,parseInt(""+a[3],10)/100)+")",w=g.exec(m);if(!w)throw new u(4,r,m);return{red:parseInt(""+w[1],10),green:parseInt(""+w[2],10),blue:parseInt(""+w[3],10)}}var v=b.exec(r);if(v){var y="rgb("+hslToRgb(parseInt(""+v[1],10),parseInt(""+v[2],10)/100,parseInt(""+v[3],10)/100)+")",N=g.exec(y);if(!N)throw new u(4,r,y);return{red:parseInt(""+N[1],10),green:parseInt(""+N[2],10),blue:parseInt(""+N[3],10),alpha:parseFloat(""+v[4])}}throw new u(5)}function parseToHsl(e){return function rgbToHsl(e){var r,n=e.red/255,t=e.green/255,o=e.blue/255,i=Math.max(n,t,o),a=Math.min(n,t,o),u=(i+a)/2;if(i===a)return void 0!==e.alpha?{hue:0,saturation:0,lightness:u,alpha:e.alpha}:{hue:0,saturation:0,lightness:u};var f=i-a,s=u>.5?f/(2-i-a):f/(i+a);switch(i){case n:r=(t-o)/f+(t<o?6:0);break;case t:r=(o-n)/f+2;break;default:r=(n-t)/f+4}return r*=60,void 0!==e.alpha?{hue:r,saturation:s,lightness:u,alpha:e.alpha}:{hue:r,saturation:s,lightness:u}}(parseToRgb(e))}var m=function reduceHexValue(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function numberToHex(e){var r=e.toString(16);return 1===r.length?"0"+r:r}function colorToHex(e){return numberToHex(Math.round(255*e))}function convertToHex(e,r,n){return m("#"+colorToHex(e)+colorToHex(r)+colorToHex(n))}function hslToHex(e,r,n){return hslToRgb(e,r,n,convertToHex)}function hsl(e,r,n){if("number"==typeof e&&"number"==typeof r&&"number"==typeof n)return hslToHex(e,r,n);if("object"==typeof e&&void 0===r&&void 0===n)return hslToHex(e.hue,e.saturation,e.lightness);throw new u(1)}function hsla(e,r,n,t){if("number"==typeof e&&"number"==typeof r&&"number"==typeof n&&"number"==typeof t)return t>=1?hslToHex(e,r,n):"rgba("+hslToRgb(e,r,n)+","+t+")";if("object"==typeof e&&void 0===r&&void 0===n&&void 0===t)return e.alpha>=1?hslToHex(e.hue,e.saturation,e.lightness):"rgba("+hslToRgb(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new u(2)}function rgb(e,r,n){if("number"==typeof e&&"number"==typeof r&&"number"==typeof n)return m("#"+numberToHex(e)+numberToHex(r)+numberToHex(n));if("object"==typeof e&&void 0===r&&void 0===n)return m("#"+numberToHex(e.red)+numberToHex(e.green)+numberToHex(e.blue));throw new u(6)}function rgba(e,r,n,t){if("string"==typeof e&&"number"==typeof r){var o=parseToRgb(e);return"rgba("+o.red+","+o.green+","+o.blue+","+r+")"}if("number"==typeof e&&"number"==typeof r&&"number"==typeof n&&"number"==typeof t)return t>=1?rgb(e,r,n):"rgba("+e+","+r+","+n+","+t+")";if("object"==typeof e&&void 0===r&&void 0===n&&void 0===t)return e.alpha>=1?rgb(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new u(7)}function toColorString(e){if("object"!=typeof e)throw new u(8);if(function isRgba(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&"number"==typeof e.alpha}(e))return rgba(e);if(function isRgb(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&("number"!=typeof e.alpha||void 0===e.alpha)}(e))return rgb(e);if(function isHsla(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&"number"==typeof e.alpha}(e))return hsla(e);if(function isHsl(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&("number"!=typeof e.alpha||void 0===e.alpha)}(e))return hsl(e);throw new u(8)}function curried(e,r,n){return function fn(){var t=n.concat(Array.prototype.slice.call(arguments));return t.length>=r?e.apply(this,t):curried(e,r,t)}}function curry(e){return curried(e,e.length,[])}function complement(e){if("transparent"===e)return e;var r=parseToHsl(e);return toColorString((0,t.Z)({},r,{hue:(r.hue+180)%360}))}function guard(e,r,n){return Math.max(e,Math.min(r,n))}function darken(e,r){if("transparent"===r)return r;var n=parseToHsl(r);return toColorString((0,t.Z)({},n,{lightness:guard(0,1,n.lightness-parseFloat(e))}))}var w=curry(darken);function grayscale(e){return"transparent"===e?e:toColorString((0,t.Z)({},parseToHsl(e),{saturation:0}))}function invert(e){if("transparent"===e)return e;var r=parseToRgb(e);return toColorString((0,t.Z)({},r,{red:255-r.red,green:255-r.green,blue:255-r.blue}))}function lighten(e,r){if("transparent"===r)return r;var n=parseToHsl(r);return toColorString((0,t.Z)({},n,{lightness:guard(0,1,n.lightness+parseFloat(e))}))}var v=curry(lighten);function transparentize(e,r){if("transparent"===r)return r;var n=parseToRgb(r),o="number"==typeof n.alpha?n.alpha:1;return rgba((0,t.Z)({},n,{alpha:guard(0,1,+(100*o-100*parseFloat(e)).toFixed(2)/100)}))}var y=curry(transparentize)},"../blockchain-wallet-v4/node_modules/bech32/index.js":e=>{"use strict";for(var r="qpzry9x8gf2tvdw0s3jn54khce6mua7l",n={},t=0;t<r.length;t++){var o=r.charAt(t);if(void 0!==n[o])throw new TypeError(o+" is ambiguous");n[o]=t}function polymodStep(e){var r=e>>25;return(33554431&e)<<5^996825010&-(r>>0&1)^642813549&-(r>>1&1)^513874426&-(r>>2&1)^1027748829&-(r>>3&1)^705979059&-(r>>4&1)}function prefixChk(e){for(var r=1,n=0;n<e.length;++n){var t=e.charCodeAt(n);if(t<33||t>126)throw new Error("Invalid prefix ("+e+")");r=polymodStep(r)^t>>5}for(r=polymodStep(r),n=0;n<e.length;++n){var o=e.charCodeAt(n);r=polymodStep(r)^31&o}return r}function convert(e,r,n,t){for(var o=0,i=0,a=(1<<n)-1,u=[],f=0;f<e.length;++f)for(o=o<<r|e[f],i+=r;i>=n;)i-=n,u.push(o>>i&a);if(t)i>0&&u.push(o<<n-i&a);else{if(i>=r)throw new Error("Excess padding");if(o<<n-i&a)throw new Error("Non-zero padding")}return u}e.exports={decode:function decode(e,r){if(r=r||90,e.length<8)throw new TypeError(e+" too short");if(e.length>r)throw new TypeError("Exceeds length limit");var t=e.toLowerCase(),o=e.toUpperCase();if(e!==t&&e!==o)throw new Error("Mixed-case string "+e);var i=(e=t).lastIndexOf("1");if(-1===i)throw new Error("No separator character for "+e);if(0===i)throw new Error("Missing prefix for "+e);var a=e.slice(0,i),u=e.slice(i+1);if(u.length<6)throw new Error("Data too short");for(var f=prefixChk(a),s=[],l=0;l<u.length;++l){var c=u.charAt(l),h=n[c];if(void 0===h)throw new Error("Unknown character "+c);f=polymodStep(f)^h,l+6>=u.length||s.push(h)}if(1!==f)throw new Error("Invalid checksum for "+e);return{prefix:a,words:s}},encode:function encode(e,n,t){if(t=t||90,e.length+7+n.length>t)throw new TypeError("Exceeds length limit");for(var o=prefixChk(e=e.toLowerCase()),i=e+"1",a=0;a<n.length;++a){var u=n[a];if(u>>5!=0)throw new Error("Non 5-bit word");o=polymodStep(o)^u,i+=r.charAt(u)}for(a=0;a<6;++a)o=polymodStep(o);for(o^=1,a=0;a<6;++a){i+=r.charAt(o>>5*(5-a)&31)}return i},toWords:function toWords(e){return convert(e,8,5,!0)},fromWords:function fromWords(e){return convert(e,5,8,!1)}}},"../blockchain-wallet-v4/node_modules/bignumber.js/bignumber.js":function(e,r,n){var t;!function(o){"use strict";var i,a=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,u=Math.ceil,f=Math.floor,s="[BigNumber Error] ",l=s+"Number primitive has more than 15 significant digits: ",c=1e14,h=14,g=9007199254740991,d=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],p=1e7,b=1e9;function bitFloor(e){var r=0|e;return e>0||e===r?r:r-1}function coeffToString(e){for(var r,n,t=1,o=e.length,i=e[0]+"";t<o;){for(r=e[t++]+"",n=h-r.length;n--;r="0"+r);i+=r}for(o=i.length;48===i.charCodeAt(--o););return i.slice(0,o+1||1)}function compare(e,r){var n,t,o=e.c,i=r.c,a=e.s,u=r.s,f=e.e,s=r.e;if(!a||!u)return null;if(n=o&&!o[0],t=i&&!i[0],n||t)return n?t?0:-u:a;if(a!=u)return a;if(n=a<0,t=f==s,!o||!i)return t?0:!o^n?1:-1;if(!t)return f>s^n?1:-1;for(u=(f=o.length)<(s=i.length)?f:s,a=0;a<u;a++)if(o[a]!=i[a])return o[a]>i[a]^n?1:-1;return f==s?0:f>s^n?1:-1}function intCheck(e,r,n,t){if(e<r||e>n||e!==(e<0?u(e):f(e)))throw Error(s+(t||"Argument")+("number"==typeof e?e<r||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function isOdd(e){var r=e.c.length-1;return bitFloor(e.e/h)==r&&e.c[r]%2!=0}function toExponential(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function toFixedPoint(e,r,n){var t,o;if(r<0){for(o=n+".";++r;o+=n);e=o+e}else if(++r>(t=e.length)){for(o=n,r-=t;--r;o+=n);e+=o}else r<t&&(e=e.slice(0,r)+"."+e.slice(r));return e}i=function clone(e){var r,n,t,o,i,m,w,v,y,N,B=BigNumber.prototype={constructor:BigNumber,toString:null,valueOf:null},k=new BigNumber(1),x=20,T=4,O=-7,E=21,C=-1e7,I=1e7,S=!1,A=1,F=0,R={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},_="0123456789abcdefghijklmnopqrstuvwxyz";function BigNumber(e,r){var o,i,u,s,c,d,p,b,m=this;if(!(m instanceof BigNumber))return new BigNumber(e,r);if(null==r){if(e instanceof BigNumber)return m.s=e.s,m.e=e.e,void(m.c=(e=e.c)?e.slice():e);if((d="number"==typeof e)&&0*e==0){if(m.s=1/e<0?(e=-e,-1):1,e===~~e){for(s=0,c=e;c>=10;c/=10,s++);return m.e=s,void(m.c=[e])}b=String(e)}else{if(b=String(e),!a.test(b))return t(m,b,d);m.s=45==b.charCodeAt(0)?(b=b.slice(1),-1):1}(s=b.indexOf("."))>-1&&(b=b.replace(".","")),(c=b.search(/e/i))>0?(s<0&&(s=c),s+=+b.slice(c+1),b=b.substring(0,c)):s<0&&(s=b.length)}else{if(intCheck(r,2,_.length,"Base"),b=String(e),10==r)return round(m=new BigNumber(e instanceof BigNumber?e:b),x+m.e+1,T);if(d="number"==typeof e){if(0*e!=0)return t(m,b,d,r);if(m.s=1/e<0?(b=b.slice(1),-1):1,BigNumber.DEBUG&&b.replace(/^0\.0*|\./,"").length>15)throw Error(l+e);d=!1}else m.s=45===b.charCodeAt(0)?(b=b.slice(1),-1):1;for(o=_.slice(0,r),s=c=0,p=b.length;c<p;c++)if(o.indexOf(i=b.charAt(c))<0){if("."==i){if(c>s){s=p;continue}}else if(!u&&(b==b.toUpperCase()&&(b=b.toLowerCase())||b==b.toLowerCase()&&(b=b.toUpperCase()))){u=!0,c=-1,s=0;continue}return t(m,String(e),d,r)}(s=(b=n(b,r,10,m.s)).indexOf("."))>-1?b=b.replace(".",""):s=b.length}for(c=0;48===b.charCodeAt(c);c++);for(p=b.length;48===b.charCodeAt(--p););if(b=b.slice(c,++p)){if(p-=c,d&&BigNumber.DEBUG&&p>15&&(e>g||e!==f(e)))throw Error(l+m.s*e);if((s=s-c-1)>I)m.c=m.e=null;else if(s<C)m.c=[m.e=0];else{if(m.e=s,m.c=[],c=(s+1)%h,s<0&&(c+=h),c<p){for(c&&m.c.push(+b.slice(0,c)),p-=h;c<p;)m.c.push(+b.slice(c,c+=h));b=b.slice(c),c=h-b.length}else c-=p;for(;c--;b+="0");m.c.push(+b)}}else m.c=[m.e=0]}function format(e,r,n,t){var o,i,a,u,f;if(null==n?n=T:intCheck(n,0,8),!e.c)return e.toString();if(o=e.c[0],a=e.e,null==r)f=coeffToString(e.c),f=1==t||2==t&&(a<=O||a>=E)?toExponential(f,a):toFixedPoint(f,a,"0");else if(i=(e=round(new BigNumber(e),r,n)).e,u=(f=coeffToString(e.c)).length,1==t||2==t&&(r<=i||i<=O)){for(;u<r;f+="0",u++);f=toExponential(f,i)}else if(r-=a,f=toFixedPoint(f,i,"0"),i+1>u){if(--r>0)for(f+=".";r--;f+="0");}else if((r+=i-u)>0)for(i+1==u&&(f+=".");r--;f+="0");return e.s<0&&o?"-"+f:f}function maxOrMin(e,r){for(var n,t=1,o=new BigNumber(e[0]);t<e.length;t++){if(!(n=new BigNumber(e[t])).s){o=n;break}r.call(o,n)&&(o=n)}return o}function normalise(e,r,n){for(var t=1,o=r.length;!r[--o];r.pop());for(o=r[0];o>=10;o/=10,t++);return(n=t+n*h-1)>I?e.c=e.e=null:n<C?e.c=[e.e=0]:(e.e=n,e.c=r),e}function round(e,r,n,t){var o,i,a,s,l,g,p,b=e.c,m=d;if(b){e:{for(o=1,s=b[0];s>=10;s/=10,o++);if((i=r-o)<0)i+=h,a=r,p=(l=b[g=0])/m[o-a-1]%10|0;else if((g=u((i+1)/h))>=b.length){if(!t)break e;for(;b.length<=g;b.push(0));l=p=0,o=1,a=(i%=h)-h+1}else{for(l=s=b[g],o=1;s>=10;s/=10,o++);p=(a=(i%=h)-h+o)<0?0:l/m[o-a-1]%10|0}if(t=t||r<0||null!=b[g+1]||(a<0?l:l%m[o-a-1]),t=n<4?(p||t)&&(0==n||n==(e.s<0?3:2)):p>5||5==p&&(4==n||t||6==n&&(i>0?a>0?l/m[o-a]:0:b[g-1])%10&1||n==(e.s<0?8:7)),r<1||!b[0])return b.length=0,t?(r-=e.e+1,b[0]=m[(h-r%h)%h],e.e=-r||0):b[0]=e.e=0,e;if(0==i?(b.length=g,s=1,g--):(b.length=g+1,s=m[h-i],b[g]=a>0?f(l/m[o-a]%m[a])*s:0),t)for(;;){if(0==g){for(i=1,a=b[0];a>=10;a/=10,i++);for(a=b[0]+=s,s=1;a>=10;a/=10,s++);i!=s&&(e.e++,b[0]==c&&(b[0]=1));break}if(b[g]+=s,b[g]!=c)break;b[g--]=0,s=1}for(i=b.length;0===b[--i];b.pop());}e.e>I?e.c=e.e=null:e.e<C&&(e.c=[e.e=0])}return e}function valueOf(e){var r,n=e.e;return null===n?e.toString():(r=coeffToString(e.c),r=n<=O||n>=E?toExponential(r,n):toFixedPoint(r,n,"0"),e.s<0?"-"+r:r)}return BigNumber.clone=clone,BigNumber.ROUND_UP=0,BigNumber.ROUND_DOWN=1,BigNumber.ROUND_CEIL=2,BigNumber.ROUND_FLOOR=3,BigNumber.ROUND_HALF_UP=4,BigNumber.ROUND_HALF_DOWN=5,BigNumber.ROUND_HALF_EVEN=6,BigNumber.ROUND_HALF_CEIL=7,BigNumber.ROUND_HALF_FLOOR=8,BigNumber.EUCLID=9,BigNumber.config=BigNumber.set=function(e){var r,n;if(null!=e){if("object"!=typeof e)throw Error(s+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(intCheck(n=e[r],0,b,r),x=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(intCheck(n=e[r],0,8,r),T=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&((n=e[r])&&n.pop?(intCheck(n[0],-b,0,r),intCheck(n[1],0,b,r),O=n[0],E=n[1]):(intCheck(n,-b,b,r),O=-(E=n<0?-n:n))),e.hasOwnProperty(r="RANGE"))if((n=e[r])&&n.pop)intCheck(n[0],-b,-1,r),intCheck(n[1],1,b,r),C=n[0],I=n[1];else{if(intCheck(n,-b,b,r),!n)throw Error(s+r+" cannot be zero: "+n);C=-(I=n<0?-n:n)}if(e.hasOwnProperty(r="CRYPTO")){if((n=e[r])!==!!n)throw Error(s+r+" not true or false: "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw S=!n,Error(s+"crypto unavailable");S=n}else S=n}if(e.hasOwnProperty(r="MODULO_MODE")&&(intCheck(n=e[r],0,9,r),A=n),e.hasOwnProperty(r="POW_PRECISION")&&(intCheck(n=e[r],0,b,r),F=n),e.hasOwnProperty(r="FORMAT")){if("object"!=typeof(n=e[r]))throw Error(s+r+" not an object: "+n);R=n}if(e.hasOwnProperty(r="ALPHABET")){if("string"!=typeof(n=e[r])||/^.$|[+-.\s]|(.).*\1/.test(n))throw Error(s+r+" invalid: "+n);_=n}}return{DECIMAL_PLACES:x,ROUNDING_MODE:T,EXPONENTIAL_AT:[O,E],RANGE:[C,I],CRYPTO:S,MODULO_MODE:A,POW_PRECISION:F,FORMAT:R,ALPHABET:_}},BigNumber.isBigNumber=function(e){return e instanceof BigNumber||e&&!0===e._isBigNumber||!1},BigNumber.maximum=BigNumber.max=function(){return maxOrMin(arguments,B.lt)},BigNumber.minimum=BigNumber.min=function(){return maxOrMin(arguments,B.gt)},BigNumber.random=(o=9007199254740992,i=Math.random()*o&2097151?function(){return f(Math.random()*o)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var r,n,t,o,a,l=0,c=[],g=new BigNumber(k);if(null==e?e=x:intCheck(e,0,b),o=u(e/h),S)if(crypto.getRandomValues){for(r=crypto.getRandomValues(new Uint32Array(o*=2));l<o;)(a=131072*r[l]+(r[l+1]>>>11))>=9e15?(n=crypto.getRandomValues(new Uint32Array(2)),r[l]=n[0],r[l+1]=n[1]):(c.push(a%1e14),l+=2);l=o/2}else{if(!crypto.randomBytes)throw S=!1,Error(s+"crypto unavailable");for(r=crypto.randomBytes(o*=7);l<o;)(a=281474976710656*(31&r[l])+1099511627776*r[l+1]+4294967296*r[l+2]+16777216*r[l+3]+(r[l+4]<<16)+(r[l+5]<<8)+r[l+6])>=9e15?crypto.randomBytes(7).copy(r,l):(c.push(a%1e14),l+=7);l=o/7}if(!S)for(;l<o;)(a=i())<9e15&&(c[l++]=a%1e14);for(o=c[--l],e%=h,o&&e&&(a=d[h-e],c[l]=f(o/a)*a);0===c[l];c.pop(),l--);if(l<0)c=[t=0];else{for(t=-1;0===c[0];c.splice(0,1),t-=h);for(l=1,a=c[0];a>=10;a/=10,l++);l<h&&(t-=h-l)}return g.e=t,g.c=c,g}),BigNumber.sum=function(){for(var e=1,r=arguments,n=new BigNumber(r[0]);e<r.length;)n=n.plus(r[e++]);return n},n=function(){var e="0123456789";function toBaseOut(e,r,n,t){for(var o,i,a=[0],u=0,f=e.length;u<f;){for(i=a.length;i--;a[i]*=r);for(a[0]+=t.indexOf(e.charAt(u++)),o=0;o<a.length;o++)a[o]>n-1&&(null==a[o+1]&&(a[o+1]=0),a[o+1]+=a[o]/n|0,a[o]%=n)}return a.reverse()}return function(n,t,o,i,a){var u,f,s,l,c,h,g,d,p=n.indexOf("."),b=x,m=T;for(p>=0&&(l=F,F=0,n=n.replace(".",""),h=(d=new BigNumber(t)).pow(n.length-p),F=l,d.c=toBaseOut(toFixedPoint(coeffToString(h.c),h.e,"0"),10,o,e),d.e=d.c.length),s=l=(g=toBaseOut(n,t,o,a?(u=_,e):(u=e,_))).length;0==g[--l];g.pop());if(!g[0])return u.charAt(0);if(p<0?--s:(h.c=g,h.e=s,h.s=i,g=(h=r(h,d,b,m,o)).c,c=h.r,s=h.e),p=g[f=s+b+1],l=o/2,c=c||f<0||null!=g[f+1],c=m<4?(null!=p||c)&&(0==m||m==(h.s<0?3:2)):p>l||p==l&&(4==m||c||6==m&&1&g[f-1]||m==(h.s<0?8:7)),f<1||!g[0])n=c?toFixedPoint(u.charAt(1),-b,u.charAt(0)):u.charAt(0);else{if(g.length=f,c)for(--o;++g[--f]>o;)g[f]=0,f||(++s,g=[1].concat(g));for(l=g.length;!g[--l];);for(p=0,n="";p<=l;n+=u.charAt(g[p++]));n=toFixedPoint(n,s,u.charAt(0))}return n}}(),r=function(){function multiply(e,r,n){var t,o,i,a,u=0,f=e.length,s=r%p,l=r/p|0;for(e=e.slice();f--;)u=((o=s*(i=e[f]%p)+(t=l*i+(a=e[f]/p|0)*s)%p*p+u)/n|0)+(t/p|0)+l*a,e[f]=o%n;return u&&(e=[u].concat(e)),e}function compare(e,r,n,t){var o,i;if(n!=t)i=n>t?1:-1;else for(o=i=0;o<n;o++)if(e[o]!=r[o]){i=e[o]>r[o]?1:-1;break}return i}function subtract(e,r,n,t){for(var o=0;n--;)e[n]-=o,o=e[n]<r[n]?1:0,e[n]=o*t+e[n]-r[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(e,r,n,t,o){var i,a,u,s,l,g,d,p,b,m,w,v,y,N,B,k,x,T=e.s==r.s?1:-1,O=e.c,E=r.c;if(!(O&&O[0]&&E&&E[0]))return new BigNumber(e.s&&r.s&&(O?!E||O[0]!=E[0]:E)?O&&0==O[0]||!E?0*T:T/0:NaN);for(b=(p=new BigNumber(T)).c=[],T=n+(a=e.e-r.e)+1,o||(o=c,a=bitFloor(e.e/h)-bitFloor(r.e/h),T=T/h|0),u=0;E[u]==(O[u]||0);u++);if(E[u]>(O[u]||0)&&a--,T<0)b.push(1),s=!0;else{for(N=O.length,k=E.length,u=0,T+=2,(l=f(o/(E[0]+1)))>1&&(E=multiply(E,l,o),O=multiply(O,l,o),k=E.length,N=O.length),y=k,w=(m=O.slice(0,k)).length;w<k;m[w++]=0);x=E.slice(),x=[0].concat(x),B=E[0],E[1]>=o/2&&B++;do{if(l=0,(i=compare(E,m,k,w))<0){if(v=m[0],k!=w&&(v=v*o+(m[1]||0)),(l=f(v/B))>1)for(l>=o&&(l=o-1),d=(g=multiply(E,l,o)).length,w=m.length;1==compare(g,m,d,w);)l--,subtract(g,k<d?x:E,d,o),d=g.length,i=1;else 0==l&&(i=l=1),d=(g=E.slice()).length;if(d<w&&(g=[0].concat(g)),subtract(m,g,w,o),w=m.length,-1==i)for(;compare(E,m,k,w)<1;)l++,subtract(m,k<w?x:E,w,o),w=m.length}else 0===i&&(l++,m=[0]);b[u++]=l,m[0]?m[w++]=O[y]||0:(m=[O[y]],w=1)}while((y++<N||null!=m[0])&&T--);s=null!=m[0],b[0]||b.splice(0,1)}if(o==c){for(u=1,T=b[0];T>=10;T/=10,u++);round(p,n+(p.e=u+a*h-1)+1,t,s)}else p.e=a,p.r=+s;return p}}(),m=/^(-?)0([xbo])(?=\w[\w.]*$)/i,w=/^([^.]+)\.$/,v=/^\.([^.]+)$/,y=/^-?(Infinity|NaN)$/,N=/^\s*\+(?=[\w.])|^\s+|\s+$/g,t=function(e,r,n,t){var o,i=n?r:r.replace(N,"");if(y.test(i))e.s=isNaN(i)?null:i<0?-1:1,e.c=e.e=null;else{if(!n&&(i=i.replace(m,(function(e,r,n){return o="x"==(n=n.toLowerCase())?16:"b"==n?2:8,t&&t!=o?e:r})),t&&(o=t,i=i.replace(w,"$1").replace(v,"0.$1")),r!=i))return new BigNumber(i,o);if(BigNumber.DEBUG)throw Error(s+"Not a"+(t?" base "+t:"")+" number: "+r);e.c=e.e=e.s=null}},B.absoluteValue=B.abs=function(){var e=new BigNumber(this);return e.s<0&&(e.s=1),e},B.comparedTo=function(e,r){return compare(this,new BigNumber(e,r))},B.decimalPlaces=B.dp=function(e,r){var n,t,o,i=this;if(null!=e)return intCheck(e,0,b),null==r?r=T:intCheck(r,0,8),round(new BigNumber(i),e+i.e+1,r);if(!(n=i.c))return null;if(t=((o=n.length-1)-bitFloor(this.e/h))*h,o=n[o])for(;o%10==0;o/=10,t--);return t<0&&(t=0),t},B.dividedBy=B.div=function(e,n){return r(this,new BigNumber(e,n),x,T)},B.dividedToIntegerBy=B.idiv=function(e,n){return r(this,new BigNumber(e,n),0,1)},B.exponentiatedBy=B.pow=function(e,r){var n,t,o,i,a,l,c,g,d=this;if((e=new BigNumber(e)).c&&!e.isInteger())throw Error(s+"Exponent not an integer: "+valueOf(e));if(null!=r&&(r=new BigNumber(r)),a=e.e>14,!d.c||!d.c[0]||1==d.c[0]&&!d.e&&1==d.c.length||!e.c||!e.c[0])return g=new BigNumber(Math.pow(+valueOf(d),a?2-isOdd(e):+valueOf(e))),r?g.mod(r):g;if(l=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new BigNumber(NaN);(t=!l&&d.isInteger()&&r.isInteger())&&(d=d.mod(r))}else{if(e.e>9&&(d.e>0||d.e<-1||(0==d.e?d.c[0]>1||a&&d.c[1]>=24e7:d.c[0]<8e13||a&&d.c[0]<=9999975e7)))return i=d.s<0&&isOdd(e)?-0:0,d.e>-1&&(i=1/i),new BigNumber(l?1/i:i);F&&(i=u(F/h+2))}for(a?(n=new BigNumber(.5),l&&(e.s=1),c=isOdd(e)):c=(o=Math.abs(+valueOf(e)))%2,g=new BigNumber(k);;){if(c){if(!(g=g.times(d)).c)break;i?g.c.length>i&&(g.c.length=i):t&&(g=g.mod(r))}if(o){if(0===(o=f(o/2)))break;c=o%2}else if(round(e=e.times(n),e.e+1,1),e.e>14)c=isOdd(e);else{if(0===(o=+valueOf(e)))break;c=o%2}d=d.times(d),i?d.c&&d.c.length>i&&(d.c.length=i):t&&(d=d.mod(r))}return t?g:(l&&(g=k.div(g)),r?g.mod(r):i?round(g,F,T,undefined):g)},B.integerValue=function(e){var r=new BigNumber(this);return null==e?e=T:intCheck(e,0,8),round(r,r.e+1,e)},B.isEqualTo=B.eq=function(e,r){return 0===compare(this,new BigNumber(e,r))},B.isFinite=function(){return!!this.c},B.isGreaterThan=B.gt=function(e,r){return compare(this,new BigNumber(e,r))>0},B.isGreaterThanOrEqualTo=B.gte=function(e,r){return 1===(r=compare(this,new BigNumber(e,r)))||0===r},B.isInteger=function(){return!!this.c&&bitFloor(this.e/h)>this.c.length-2},B.isLessThan=B.lt=function(e,r){return compare(this,new BigNumber(e,r))<0},B.isLessThanOrEqualTo=B.lte=function(e,r){return-1===(r=compare(this,new BigNumber(e,r)))||0===r},B.isNaN=function(){return!this.s},B.isNegative=function(){return this.s<0},B.isPositive=function(){return this.s>0},B.isZero=function(){return!!this.c&&0==this.c[0]},B.minus=function(e,r){var n,t,o,i,a=this,u=a.s;if(r=(e=new BigNumber(e,r)).s,!u||!r)return new BigNumber(NaN);if(u!=r)return e.s=-r,a.plus(e);var f=a.e/h,s=e.e/h,l=a.c,g=e.c;if(!f||!s){if(!l||!g)return l?(e.s=-r,e):new BigNumber(g?a:NaN);if(!l[0]||!g[0])return g[0]?(e.s=-r,e):new BigNumber(l[0]?a:3==T?-0:0)}if(f=bitFloor(f),s=bitFloor(s),l=l.slice(),u=f-s){for((i=u<0)?(u=-u,o=l):(s=f,o=g),o.reverse(),r=u;r--;o.push(0));o.reverse()}else for(t=(i=(u=l.length)<(r=g.length))?u:r,u=r=0;r<t;r++)if(l[r]!=g[r]){i=l[r]<g[r];break}if(i&&(o=l,l=g,g=o,e.s=-e.s),(r=(t=g.length)-(n=l.length))>0)for(;r--;l[n++]=0);for(r=c-1;t>u;){if(l[--t]<g[t]){for(n=t;n&&!l[--n];l[n]=r);--l[n],l[t]+=c}l[t]-=g[t]}for(;0==l[0];l.splice(0,1),--s);return l[0]?normalise(e,l,s):(e.s=3==T?-1:1,e.c=[e.e=0],e)},B.modulo=B.mod=function(e,n){var t,o,i=this;return e=new BigNumber(e,n),!i.c||!e.s||e.c&&!e.c[0]?new BigNumber(NaN):!e.c||i.c&&!i.c[0]?new BigNumber(i):(9==A?(o=e.s,e.s=1,t=r(i,e,0,3),e.s=o,t.s*=o):t=r(i,e,0,A),(e=i.minus(t.times(e))).c[0]||1!=A||(e.s=i.s),e)},B.multipliedBy=B.times=function(e,r){var n,t,o,i,a,u,f,s,l,g,d,b,m,w,v,y=this,N=y.c,B=(e=new BigNumber(e,r)).c;if(!(N&&B&&N[0]&&B[0]))return!y.s||!e.s||N&&!N[0]&&!B||B&&!B[0]&&!N?e.c=e.e=e.s=null:(e.s*=y.s,N&&B?(e.c=[0],e.e=0):e.c=e.e=null),e;for(t=bitFloor(y.e/h)+bitFloor(e.e/h),e.s*=y.s,(f=N.length)<(g=B.length)&&(m=N,N=B,B=m,o=f,f=g,g=o),o=f+g,m=[];o--;m.push(0));for(w=c,v=p,o=g;--o>=0;){for(n=0,d=B[o]%v,b=B[o]/v|0,i=o+(a=f);i>o;)n=((s=d*(s=N[--a]%v)+(u=b*s+(l=N[a]/v|0)*d)%v*v+m[i]+n)/w|0)+(u/v|0)+b*l,m[i--]=s%w;m[i]=n}return n?++t:m.splice(0,1),normalise(e,m,t)},B.negated=function(){var e=new BigNumber(this);return e.s=-e.s||null,e},B.plus=function(e,r){var n,t=this,o=t.s;if(r=(e=new BigNumber(e,r)).s,!o||!r)return new BigNumber(NaN);if(o!=r)return e.s=-r,t.minus(e);var i=t.e/h,a=e.e/h,u=t.c,f=e.c;if(!i||!a){if(!u||!f)return new BigNumber(o/0);if(!u[0]||!f[0])return f[0]?e:new BigNumber(u[0]?t:0*o)}if(i=bitFloor(i),a=bitFloor(a),u=u.slice(),o=i-a){for(o>0?(a=i,n=f):(o=-o,n=u),n.reverse();o--;n.push(0));n.reverse()}for((o=u.length)-(r=f.length)<0&&(n=f,f=u,u=n,r=o),o=0;r;)o=(u[--r]=u[r]+f[r]+o)/c|0,u[r]=c===u[r]?0:u[r]%c;return o&&(u=[o].concat(u),++a),normalise(e,u,a)},B.precision=B.sd=function(e,r){var n,t,o,i=this;if(null!=e&&e!==!!e)return intCheck(e,1,b),null==r?r=T:intCheck(r,0,8),round(new BigNumber(i),e,r);if(!(n=i.c))return null;if(t=(o=n.length-1)*h+1,o=n[o]){for(;o%10==0;o/=10,t--);for(o=n[0];o>=10;o/=10,t++);}return e&&i.e+1>t&&(t=i.e+1),t},B.shiftedBy=function(e){return intCheck(e,-9007199254740991,g),this.times("1e"+e)},B.squareRoot=B.sqrt=function(){var e,n,t,o,i,a=this,u=a.c,f=a.s,s=a.e,l=x+4,c=new BigNumber("0.5");if(1!==f||!u||!u[0])return new BigNumber(!f||f<0&&(!u||u[0])?NaN:u?a:1/0);if(0==(f=Math.sqrt(+valueOf(a)))||f==1/0?(((n=coeffToString(u)).length+s)%2==0&&(n+="0"),f=Math.sqrt(+n),s=bitFloor((s+1)/2)-(s<0||s%2),t=new BigNumber(n=f==1/0?"1e"+s:(n=f.toExponential()).slice(0,n.indexOf("e")+1)+s)):t=new BigNumber(f+""),t.c[0])for((f=(s=t.e)+l)<3&&(f=0);;)if(i=t,t=c.times(i.plus(r(a,i,l,1))),coeffToString(i.c).slice(0,f)===(n=coeffToString(t.c)).slice(0,f)){if(t.e<s&&--f,"9999"!=(n=n.slice(f-3,f+1))&&(o||"4999"!=n)){+n&&(+n.slice(1)||"5"!=n.charAt(0))||(round(t,t.e+x+2,1),e=!t.times(t).eq(a));break}if(!o&&(round(i,i.e+x+2,0),i.times(i).eq(a))){t=i;break}l+=4,f+=4,o=1}return round(t,t.e+x+1,T,e)},B.toExponential=function(e,r){return null!=e&&(intCheck(e,0,b),e++),format(this,e,r,1)},B.toFixed=function(e,r){return null!=e&&(intCheck(e,0,b),e=e+this.e+1),format(this,e,r)},B.toFormat=function(e,r,n){var t,o=this;if(null==n)null!=e&&r&&"object"==typeof r?(n=r,r=null):e&&"object"==typeof e?(n=e,e=r=null):n=R;else if("object"!=typeof n)throw Error(s+"Argument not an object: "+n);if(t=o.toFixed(e,r),o.c){var i,a=t.split("."),u=+n.groupSize,f=+n.secondaryGroupSize,l=n.groupSeparator||"",c=a[0],h=a[1],g=o.s<0,d=g?c.slice(1):c,p=d.length;if(f&&(i=u,u=f,f=i,p-=i),u>0&&p>0){for(i=p%u||u,c=d.substr(0,i);i<p;i+=u)c+=l+d.substr(i,u);f>0&&(c+=l+d.slice(i)),g&&(c="-"+c)}t=h?c+(n.decimalSeparator||"")+((f=+n.fractionGroupSize)?h.replace(new RegExp("\\d{"+f+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):h):c}return(n.prefix||"")+t+(n.suffix||"")},B.toFraction=function(e){var n,t,o,i,a,u,f,l,c,g,p,b,m=this,w=m.c;if(null!=e&&(!(f=new BigNumber(e)).isInteger()&&(f.c||1!==f.s)||f.lt(k)))throw Error(s+"Argument "+(f.isInteger()?"out of range: ":"not an integer: ")+valueOf(f));if(!w)return new BigNumber(m);for(n=new BigNumber(k),c=t=new BigNumber(k),o=l=new BigNumber(k),b=coeffToString(w),a=n.e=b.length-m.e-1,n.c[0]=d[(u=a%h)<0?h+u:u],e=!e||f.comparedTo(n)>0?a>0?n:c:f,u=I,I=1/0,f=new BigNumber(b),l.c[0]=0;g=r(f,n,0,1),1!=(i=t.plus(g.times(o))).comparedTo(e);)t=o,o=i,c=l.plus(g.times(i=c)),l=i,n=f.minus(g.times(i=n)),f=i;return i=r(e.minus(t),o,0,1),l=l.plus(i.times(c)),t=t.plus(i.times(o)),l.s=c.s=m.s,p=r(c,o,a*=2,T).minus(m).abs().comparedTo(r(l,t,a,T).minus(m).abs())<1?[c,o]:[l,t],I=u,p},B.toNumber=function(){return+valueOf(this)},B.toPrecision=function(e,r){return null!=e&&intCheck(e,1,b),format(this,e,r,2)},B.toString=function(e){var r,t=this,o=t.s,i=t.e;return null===i?o?(r="Infinity",o<0&&(r="-"+r)):r="NaN":(null==e?r=i<=O||i>=E?toExponential(coeffToString(t.c),i):toFixedPoint(coeffToString(t.c),i,"0"):10===e?r=toFixedPoint(coeffToString((t=round(new BigNumber(t),x+i+1,T)).c),t.e,"0"):(intCheck(e,2,_.length,"Base"),r=n(toFixedPoint(coeffToString(t.c),i,"0"),10,e,o,!0)),o<0&&t.c[0]&&(r="-"+r)),r},B.valueOf=B.toJSON=function(){return valueOf(this)},B._isBigNumber=!0,"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator&&(B[Symbol.toStringTag]="BigNumber",B[Symbol.for("nodejs.util.inspect.custom")]=B.valueOf),null!=e&&BigNumber.set(e),BigNumber}(),i.default=i.BigNumber=i,void 0===(t=function(){return i}.call(r,n,r,e))||(e.exports=t)}()},"../blockchain-wallet-v4/node_modules/uuid/dist/esm-browser/v4.js":(e,r,n)=>{"use strict";var t;n.d(r,{Z:()=>l});var o=new Uint8Array(16);function rng(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(o)}const i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const a=function validate(e){return"string"==typeof e&&i.test(e)};for(var u=[],f=0;f<256;++f)u.push((f+256).toString(16).substr(1));const s=function stringify(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[e[r+0]]+u[e[r+1]]+u[e[r+2]]+u[e[r+3]]+"-"+u[e[r+4]]+u[e[r+5]]+"-"+u[e[r+6]]+u[e[r+7]]+"-"+u[e[r+8]]+u[e[r+9]]+"-"+u[e[r+10]]+u[e[r+11]]+u[e[r+12]]+u[e[r+13]]+u[e[r+14]]+u[e[r+15]]).toLowerCase();if(!a(n))throw TypeError("Stringified UUID is invalid");return n};const l=function v4(e,r,n){var t=(e=e||{}).random||(e.rng||rng)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,r){n=n||0;for(var o=0;o<16;++o)r[n+o]=t[o];return r}return s(t)}}}]);