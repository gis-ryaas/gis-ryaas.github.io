// export let URLGeoJson = "https://us-central1-noted-slice-401902.cloudfunctions.net/ryaas";
// export let urlPostGCF = "https://us-central1-noted-slice-401902.cloudfunctions.net/gis5baru";
// export let tableTag = "tr";
// export let tableRowClass = "content is-small";
// export let tableTemplate = `
// <td>#NAME#</td>
// <td >#KORDINAT#</td>
// <td>#TYPE#</td>
// `
// export const clickpopup = `
// Long : #LONG#<br>
// Lat  : #LAT#<br>
// X   : #X#<br>
// Y   : #Y#<br>
// HDMS : #HDMS#<br>
// `


import {getCookie} from "https://jscroot.github.io/cookie/croot.js";

export let URLGeoJson = "https://us-central1-noted-slice-401902.cloudfunctions.net/ryaas";
export let urlPostGCF = "https://us-central1-noted-slice-401902.cloudfunctions.net/gis5baru";
export let UrlLogin = "https://us-central1-noted-slice-401902.cloudfunctions.net/gislogin";
export let UrlRegister = "https://us-central1-noted-slice-401902.cloudfunctions.net/gisregister";
export let tableTag="tr";
export let tableRowClass="content is-small";
export let token = "yaser"
export let cookie = getCookie("Login")
export let tableTemplate=`
<td>#NAME#</td>
<td >#KORDINAT#</td>
<td>#TYPE#</td>
`
export const clickpopup = `
Long : #LONG#<br>
Lat  : #LAT#<br>
X   : #X#<br>
Y   : #Y#<br>
HDMS : #HDMS#<br>
`