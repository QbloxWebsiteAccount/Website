// Components==============
import { createGlobalStyle } from "styled-components";
import woff500 from "../assets/fonts/montserrat-v14-latin-500.woff";
import woff2_500 from "../assets/fonts/montserrat-v14-latin-500.woff2";
import woff600 from "../assets/fonts/montserrat-v14-latin-600.woff";
import woff2_600 from "../assets/fonts/montserrat-v14-latin-600.woff2";
import woff700 from "../assets/fonts/montserrat-v14-latin-700.woff";
import woff2_700 from "../assets/fonts/montserrat-v14-latin-700.woff2";
import woff900 from "../assets/fonts/montserrat-v14-latin-900.woff";
import woff2_900 from "../assets/fonts/montserrat-v14-latin-900.woff2";
import regular from "../assets/fonts/montserrat-v14-latin-regular.woff";
import regular2 from "../assets/fonts/montserrat-v14-latin-regular.woff2";
// =========================

const GlobalStyles = createGlobalStyle`
   
   /* =========================================*/
   /* Global style ============================*/
   /* =========================================*/
   
   html {
      font-family: Montserrat;
      background-color: ${({ theme: { gray } }) => gray[1]};
      zoom: 0.95;

      input, select, textarea, label{
         font-family: Montserrat;
         font-size: 14px;
      }
   }


   body {
      color: ${({ theme: { gray } }) => gray[14]};

   }

   #gatsby-focus-wrapper{
      position: relative;
   }

   svg{
      display: block;
   }

   /* =========================================*/
   /* Font ====================================*/
   /* =========================================*/

   /* montserrat-regular - latin */
   @font-face {
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 400;
   src: local('Montserrat'), local('Montserrat-Regular'),
         url('${regular2}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url('${regular}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
   }
   /* montserrat-500 - latin */
   @font-face {
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 500;
   src: local('Montserrat Medium'), local('Montserrat-Medium'),
         url('${woff2_500}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url('${woff500}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
   }
   /* montserrat-600 - latin */
   @font-face {
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 600;
   src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
         url('${woff2_600}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url('${woff600}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
   }
   /* montserrat-700 - latin */
   @font-face {
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 700;
   src: local('Montserrat Bold'), local('Montserrat-Bold'),
         url('${woff2_700}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url('${woff700}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
   }
   /* montserrat-900 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  src: local('Montserrat Black'), local('Montserrat-Black'),
         url('${woff2_900}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url('${woff900}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

   h1 {
      ${({ theme: { fontSize } }) => fontSize.h1}
   }

   h2 {
      ${({ theme: { fontSize } }) => fontSize.h2}
   }

   h3 {
      ${({ theme: { fontSize } }) => fontSize.h3}
   }

   h4 {
      ${({ theme: { fontSize } }) => fontSize.h4}
   }

   h5 {
      ${({ theme: { fontSize } }) => fontSize.h4}
   }

   h6 {
      ${({ theme: { fontSize } }) => fontSize.h4}
   }

   p,
   a,
   strong,
   span, 
   li
    {
      ${({ theme: { fontSize } }) => fontSize.m}
   }

   /* =========================================*/
   /* Reset ===================================*/
   /* =========================================*/

   *,
   ::before,
   ::after {
      box-sizing: border-box;
   }


   body,
   h1,
   h2,
   h3,
   h4,
   p,
   ul,
   ol,
   li,
   figure,
   figcaption,
   blockquote,
   dl,
   dd {
   margin: 0;
   }

   p,
   ul,
   ol,
   dl,
   address,
   button
    {
      line-height:1.4;
      padding: 0;
   }

   button {
      background: none;
      color: ${({ theme: { gray } }) => gray[14]};
      border: none;
      padding: 0;
      cursor: pointer;
      font-family: inherit;
      outline: inherit;
      ${({ theme: { fontSize } }) => fontSize.m}
   }

   pre {
      white-space: pre-wrap;
   }

   hr {
      border: 0.5px solid;
   }

   ul {
      list-style: none;
   }

   ol {
      padding-left: 1em;
   }

   a {
      color: ${({ theme: { gray } }) => gray[14]};
      text-decoration: none;
   }

   img,
   video,
   canvas,
   audio,
   iframe,
   embed,
   object {
      display: block;
   }

   img,
   video,
   canvas,
   audio,
   iframe,
   embed,
   object {
      vertical-align: middle;
   }

   img,
   video {
      max-width: 100%;
      height: auto;
   }

   img {
      border-style: none;
   }
   `;

export default GlobalStyles;
