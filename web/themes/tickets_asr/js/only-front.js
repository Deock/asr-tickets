/**
 *  * @file
 *   */
(function () {

  "use strict";

  // All the JavaScript for this file.
  //window.alert(5 + 6);
  var tempdiv = document.createElement("div");
  tempdiv.setAttribute("id","login-toggle");
  tempdiv.setAttribute("class", "collapse");
  var dad = document.getElementById("block-tickets-asr-userlogin");
  var linkt = document.createElement("a");
  var webf = document.getElementById("user-login-form");
  tempdiv.appendChild(webf);
  tempdiv.appendChild(dad.children[1]);
  dad.appendChild(tempdiv);
  dad.insertBefore(linkt, tempdiv);
  linkt.setAttribute("data-toggle","collapse");
  linkt.setAttribute("href","#login-toggle");
  linkt.setAttribute("aria-controls", "login-toggle");
  linkt.setAttribute("aria-expanded", "false");
  linkt.setAttribute("role", "button");
  linkt.setAttribute("class", "collapsed");
  linkt.appendChild(dad.children[0]);

})();
