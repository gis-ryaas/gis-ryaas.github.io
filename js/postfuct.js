import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
  let target_url =
    "https://us-central1-noted-slice-401902.cloudfunctions.net/gis5";
  let tokenkey = "token";
  let tokenvalue =
    "daedf642c2bc133a93dc3ef2d128728247773d865401540ee302299f80d9fc264658b2bb21f1857690197bf188dd9497908d0449984f31ea4dc4ddc9ac27783f";
  let datainjson = {
    username: getValue("username"),
    password: getValue("password"),
  };

  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
}
function responseData(result) {
  setInner("pesan", result.message);
  setCookieWithExpireHour("token", result.token, 2);

//   if (result.message === "Selamat Datang") {
//     // Jika pesan adalah "Selamat Datang", arahkan ke halaman dashboard.
//     window.location.href = "dashboard.html"; // Gantilah "error.html" dengan halaman error yang sesuai.
//   } else if (result.message === "Password Salah") {
//     // Jika pesan kesalahan adalah "Password salah", arahkan ke halaman error.
//     window.location.href = "404.html";
//   } else {
//     // Penanganan lainnya (pesan kesalahan lainnya)
//     window.location.href = "register.html";
//   }
}
