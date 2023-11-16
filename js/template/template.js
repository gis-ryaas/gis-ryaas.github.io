import {getCookie} from "https://jscroot.github.io/cookie/croot.js";

export let URLGeoJson = "https://us-central1-noted-slice-401902.cloudfunctions.net/data-json";
export let urlPostGCF = "https://us-central1-noted-slice-401902.cloudfunctions.net/postgeo";
export let UrlLogin = "https://us-central1-noted-slice-401902.cloudfunctions.net/Login-Gis"
export let UrlRegister = "https://us-central1-noted-slice-401902.cloudfunctions.net/Register-Gis"
export let tableTag="tr";
export let tableRowClass="content is-small";
export let token = "iyas"
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