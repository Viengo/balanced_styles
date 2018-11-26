(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "* {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  *:focus {\n    outline: none; }\n  body {\n  line-height: 1; }\n  img {\n  max-width: 100%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  table {\n  border-spacing: 0; }\n  @-moz-document url-prefix() {\n  body {\n    letter-spacing: -0.09px; } }\n  ::before, ::after {\n  box-sizing: border-box; }\n  .clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table; }\n  .clearfix:after {\n  clear: both; }\n  .container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  @media (min-width: 1340px) {\n    .container {\n      width: 1320px; } }\n  @media (min-width: 1200px) and (max-width: 1339px) {\n    .container {\n      width: 1140px; } }\n  @media (min-width: 992px) and (max-width: 1199px) {\n    .container {\n      width: 970px; } }\n  @media (min-width: 768px) and (max-width: 991px) {\n    .container {\n      width: 750px; } }\n  @media (max-width: 767px) {\n    .container {\n      width: 100%; } }\n  .flex, .flex-wrap, .flex-center, .flex-top, .center-center, .center-between, .top-between, .flex-between, .top-center, .bottom-between, .column-center, .column-top {\n  display: flex; }\n  .center-between, .top-between, .flex-between, .bottom-between {\n  -moz-justify-content: space-between;\n  -ms-justify-content: space-between;\n  justify-content: space-between;\n  -ms-flex-pack: space-between; }\n  .column-top {\n  -moz-justify-content: flex-start;\n  -ms-justify-content: flex-start;\n  justify-content: flex-start;\n  -ms-flex-pack: flex-start; }\n  .center-center, .top-center, .column-center {\n  -moz-justify-content: center;\n  -ms-justify-content: center;\n  justify-content: center;\n  -ms-flex-pack: center; }\n  .flex-center, .center-center, .center-between {\n  -moz-align-items: center;\n  -ms-align-items: center;\n  align-items: center; }\n  .flex-top, .top-between, .top-center {\n  -moz-align-items: flex-start;\n  -ms-align-items: flex-start;\n  align-items: flex-start; }\n  .column-center, .column-top {\n  -moz-flex-direction: column;\n  flex-direction: column; }\n  .flex-wrap {\n  flex-wrap: wrap; }\n  .bottom-between {\n  -moz-align-items: flex-end;\n  -ms-align-items: flex-end;\n  align-items: flex-end; }\n  .shrink {\n  -ms-flex-shrink: 0;\n  flex-shrink: 0; }\n  html, body {\n  height: 100%; }\n  body {\n  display: flex;\n  -moz-flex-direction: column;\n  flex-direction: column;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 15px;\n  padding: 0;\n  color: #171717; }\n  body .wrap {\n    flex: 1 0 auto; }\n  body .wrap:before, body .wrap:after {\n      content: \"\";\n      display: table; }\n  body .wrap:after {\n      clear: both; }\n  ul, ol {\n  list-style-position: outside;\n  margin-bottom: 25px; }\n  ul li, ol li {\n    margin-bottom: 10px;\n    margin-left: 15px;\n    font-size: 15px;\n    line-height: 1.2;\n    color: #171717; }\n  a {\n  text-decoration: underline;\n  color: #219892; }\n  a:hover {\n    text-decoration: none; }\n  a img {\n    border: none; }\n  h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 100%;\n  font-weight: normal;\n  color: #333333; }\n  h1, .h1 {\n  margin-bottom: 35px;\n  font-weight: 600;\n  font-size: 55px; }\n  @media (max-width: 767px) {\n  h1, .h1 {\n    font-size: 36px; } }\n  h2, .h2 {\n  margin-bottom: 35px;\n  font-weight: 600;\n  font-size: 46px; }\n  @media (max-width: 767px) {\n  h2, .h2 {\n    font-size: 26px; } }\n  h3, .h3 {\n  margin-bottom: 30px;\n  font-weight: 600;\n  font-size: 38px; }\n  @media (max-width: 767px) {\n  h3, .h3 {\n    font-size: 22px; } }\n  h4, .h4 {\n  margin-bottom: 30px;\n  font-weight: 600;\n  font-size: 30px; }\n  @media (max-width: 767px) {\n  h4, .h4 {\n    font-size: 20px; } }\n  h5, .h5 {\n  margin-bottom: 30px;\n  font-weight: 600;\n  font-size: 24px; }\n  @media (max-width: 767px) {\n  h5, .h5 {\n    font-size: 18px; } }\n  h6, .h6 {\n  margin-bottom: 25px;\n  font-weight: 600;\n  font-size: 18px; }\n  @media (max-width: 767px) {\n  h6, .h6 {\n    font-size: 16px; } }\n  p {\n  margin-bottom: 25px;\n  font-size: 15px;\n  line-height: 1.4;\n  color: #171717; }\n  table {\n  width: 100%;\n  margin-bottom: 40px;\n  border-collapse: collapse;\n  font-family: \"Montserrat\", sans-serif; }\n  table th, table td {\n    padding: 15px 10px;\n    border: 1px solid #d6d6d6;\n    font-size: 15px;\n    color: #3c3c3c; }\n  @media (max-width: 450px) {\n      table th, table td {\n        padding: 5px; } }\n  table th {\n    border-bottom-width: 3px;\n    font-weight: 400; }\n  input[type=\"submit\"] {\n  font-family: \"Montserrat\", sans-serif;\n  outline: none;\n  cursor: pointer;\n  line-height: 1.3;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n  textarea, input, select {\n  font-family: \"Montserrat\", sans-serif; }\n  button {\n  border: none; }\n  .content {\n  padding-top: 30px;\n  padding-bottom: 30px; }\n  .text-page:before, .text-page:after {\n  content: \"\";\n  display: table; }\n  .text-page:after {\n  clear: both; }\n  .text-page img {\n  max-width: 50%;\n  height: auto !important; }\n  @media (max-width: 991px) {\n    .text-page img {\n      float: none !important;\n      display: block;\n      max-width: 100%;\n      margin: 0 auto 30px !important; } }\n  .text-page ul, .text-page ol {\n  overflow: hidden; }\n  .text-page ul li, .text-page ol li {\n    position: relative;\n    left: 15px;\n    padding-right: 15px;\n    font-size: 15px; }\n  .text-page table img {\n  float: none;\n  max-width: inherit;\n  margin: 0; }\n  .attention {\n  display: none; }\n  .clearfix:before, .clearfix:after {\n  content: \"\";\n  display: table; }\n  .clearfix:after {\n  clear: both; }\n  .hidden {\n  display: none !important; }\n  .overflow-wrap {\n  overflow-y: hidden;\n  overflow-x: auto; }\n  @media (min-width: 992px) {\n  .hidden-md-up {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9EOlxcT3BlblNlcnZlclxcZG9tYWluc1xcY291cnNlc1xcYW5ndWxhci9zcmNcXGFwcFxcc2Nzc1xcX3Jlc2V0LnNjc3MiLCJzcmMvRDpcXE9wZW5TZXJ2ZXJcXGRvbWFpbnNcXGNvdXJzZXNcXGFuZ3VsYXIvc3JjXFxhcHBcXHNjc3NcXG1peGluc1xcX3VzZXItc2VsZWN0LnNjc3MiLCJzcmMvRDpcXE9wZW5TZXJ2ZXJcXGRvbWFpbnNcXGNvdXJzZXNcXGFuZ3VsYXIvc3JjXFxhcHBcXHNjc3NcXF9ncmlkLnNjc3MiLCJzcmMvRDpcXE9wZW5TZXJ2ZXJcXGRvbWFpbnNcXGNvdXJzZXNcXGFuZ3VsYXIvc3JjXFxhcHBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCJzcmMvRDpcXE9wZW5TZXJ2ZXJcXGRvbWFpbnNcXGNvdXJzZXNcXGFuZ3VsYXIvc3JjXFxhcHBcXHNjc3NcXG1peGluc1xcX2ZsZXhib3guc2NzcyIsInNyYy9EOlxcT3BlblNlcnZlclxcZG9tYWluc1xcY291cnNlc1xcYW5ndWxhci9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL0Q6XFxPcGVuU2VydmVyXFxkb21haW5zXFxjb3Vyc2VzXFxhbmd1bGFyL3NyY1xcYXBwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvRDpcXE9wZW5TZXJ2ZXJcXGRvbWFpbnNcXGNvdXJzZXNcXGFuZ3VsYXIvc3JjXFxhcHBcXHNjc3NcXG1peGluc1xcX2NsZWFyZml4LnNjc3MiLCJzcmMvRDpcXE9wZW5TZXJ2ZXJcXGRvbWFpbnNcXGNvdXJzZXNcXGFuZ3VsYXIvc3JjXFxhcHBcXHNjc3NcXG1peGluc1xcX2hlYWRpbmcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFVBQVM7RUFDVCxXQUFVO0VBQ1YsZ0JBQWU7RUFDZix5QkFBd0I7RUFHeEIsdUJBQXNCLEVBSXZCO0VBWEQ7SUFTSSxjQUFhLEVBQ2Q7RUFHSDtFQUNFLGVBQWMsRUFDZjtFQUNEO0VBQ0Us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O0VBQ2xCLGlCQUFnQixFQUNqQjtFRjFIRztFRTJISjtJQUVJLGNBQWEsRUFFaEIsRUFBQSIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibWl4aW5zL3VzZXItc2VsZWN0XCI7XHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIEBpbmNsdWRlIHVzZXItc2VsZWN0KG5vbmUpO1xyXG59XHJcbnRhYmxlIHtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xyXG4gIGJvZHkge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA5cHg7XHJcbiAgfVxyXG59IiwiQG1peGluIHVzZXItc2VsZWN0KCR2YWx1ZSkge1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiAkdmFsdWU7XHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiAkdmFsdWU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiAkdmFsdWU7XHJcbiAgdXNlci1zZWxlY3Q6ICR2YWx1ZTtcclxufSIsIjo6YmVmb3JlLDo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmNsZWFyZml4OmJlZm9yZSwgLmNsZWFyZml4OmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLmNsZWFyZml4OmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobGctaGQpe1xyXG4gICAgd2lkdGg6IDEzMjBweDtcclxuICB9XHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChsZyl7XHJcbiAgICB3aWR0aDogMTE0MHB4O1xyXG4gIH1cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1kKXtcclxuICAgIHdpZHRoOiA5NzBweDtcclxuICB9XHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChzbSl7XHJcbiAgICB3aWR0aDogNzUwcHg7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoeHMpe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4lZmxleCB7XHJcbiAgQGluY2x1ZGUgZmxleGJveDtcclxufVxyXG4lc3BhY2UtYmV0d2VlbiB7XHJcbiAgQGluY2x1ZGUganVzdGlmeS1jb250ZW50KHNwYWNlLWJldHdlZW4pO1xyXG59XHJcbiVqdXN0aWZ5LXRvcCB7XHJcbiAgQGluY2x1ZGUganVzdGlmeS1jb250ZW50KGZsZXgtc3RhcnQpO1xyXG59XHJcbiVqdXN0aWZ5LWNlbnRlciB7XHJcbiAgQGluY2x1ZGUganVzdGlmeS1jb250ZW50KGNlbnRlcik7XHJcbn1cclxuJWFsaWduLWl0ZW1zLWNlbnRlciB7XHJcbiAgQGluY2x1ZGUgYWxpZ24taXRlbXMoY2VudGVyKTtcclxufVxyXG4lYWxpZ24taXRlbXMtc3RhcnQge1xyXG4gIEBpbmNsdWRlIGFsaWduLWl0ZW1zKGZsZXgtc3RhcnQpO1xyXG59XHJcbiVmbGV4LWNvbHVtbiB7XHJcbiAgQGluY2x1ZGUgZmxleC1kaXJlY3Rpb24oY29sdW1uKTtcclxufVxyXG4uZmxleCB7XHJcbiAgQGV4dGVuZCAlZmxleDtcclxufVxyXG4uZmxleC13cmFwIHtcclxuICBAZXh0ZW5kICVmbGV4O1xyXG4gIEBpbmNsdWRlIGZsZXgtd3JhcCh3cmFwKTtcclxufVxyXG4uZmxleC1jZW50ZXIge1xyXG4gIEBleHRlbmQgJWZsZXg7XHJcbiAgQGV4dGVuZCAlYWxpZ24taXRlbXMtY2VudGVyO1xyXG59XHJcbi5mbGV4LXRvcCB7XHJcbiAgQGV4dGVuZCAlZmxleDtcclxuICBAZXh0ZW5kICVhbGlnbi1pdGVtcy1zdGFydDtcclxufVxyXG4uY2VudGVyLWNlbnRlciB7XHJcbiAgQGV4dGVuZCAlZmxleDtcclxuICBAZXh0ZW5kICVqdXN0aWZ5LWNlbnRlcjtcclxuICBAZXh0ZW5kICVhbGlnbi1pdGVtcy1jZW50ZXI7XHJcbn1cclxuLmNlbnRlci1iZXR3ZWVuIHtcclxuICBAZXh0ZW5kICVmbGV4O1xyXG4gIEBleHRlbmQgJXNwYWNlLWJldHdlZW47XHJcbiAgQGV4dGVuZCAlYWxpZ24taXRlbXMtY2VudGVyO1xyXG59XHJcbi50b3AtYmV0d2VlbiB7XHJcbiAgQGV4dGVuZCAlZmxleDtcclxuICBAZXh0ZW5kICVzcGFjZS1iZXR3ZWVuO1xyXG4gIEBleHRlbmQgJWFsaWduLWl0ZW1zLXN0YXJ0O1xyXG59XHJcbi5mbGV4LWJldHdlZW4ge1xyXG4gIEBleHRlbmQgJWZsZXg7XHJcbiAgQGV4dGVuZCAlc3BhY2UtYmV0d2VlbjtcclxufVxyXG4udG9wLWNlbnRlciB7XHJcbiAgQGV4dGVuZCAlZmxleDtcclxuICBAZXh0ZW5kICVqdXN0aWZ5LWNlbnRlcjtcclxuICBAZXh0ZW5kICVhbGlnbi1pdGVtcy1zdGFydDtcclxufVxyXG4uYm90dG9tLWJldHdlZW4ge1xyXG4gIEBleHRlbmQgJWZsZXg7XHJcbiAgQGV4dGVuZCAlc3BhY2UtYmV0d2VlbjtcclxuICBAaW5jbHVkZSBhbGlnbi1pdGVtcyhmbGV4LWVuZCk7XHJcbn1cclxuLmNvbHVtbi1jZW50ZXIge1xyXG4gIEBleHRlbmQgJWZsZXg7XHJcbiAgQGV4dGVuZCAlZmxleC1jb2x1bW47XHJcbiAgQGV4dGVuZCAlanVzdGlmeS1jZW50ZXI7XHJcbn1cclxuLmNvbHVtbi10b3Age1xyXG4gIEBleHRlbmQgJWZsZXg7XHJcbiAgQGV4dGVuZCAlZmxleC1jb2x1bW47XHJcbiAgQGV4dGVuZCAlanVzdGlmeS10b3A7XHJcbn1cclxuLnNocmluayB7XHJcbiAgQGluY2x1ZGUgZmxleC1zaHJpbmsoMCk7XHJcbn0iLCJAbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQpIHtcclxuICBAaWYgJHBvaW50ID09IGxnLWhkIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMzQwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZyB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTMzOXB4KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfUBlbHNlIGlmICRwb2ludCA9PSBtZCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfUBlbHNlIGlmICRwb2ludCA9PSBtZC1kb3duIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9QGVsc2UgaWYgJHBvaW50ID09IG1kLXVwIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50ID09IHNtIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1AZWxzZSBpZiAkcG9pbnQgPT0gc20tZG93biB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9QGVsc2UgaWYgJHBvaW50ID09IHNtLXVwIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1AZWxzZSBpZiAkcG9pbnQgPT0geHMge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBAZWxzZSBpZiAkcG9pbnQgPT0gbXhzIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbiAgQGVsc2UgaWYgJHBvaW50ID09IHNteHMge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1AZWxzZSBpZiAkcG9pbnQgPT0gc3hzIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn0iLCIvLyBGbGV4Ym94IFNBU1MgbWl4aW5zXHJcbi8vIFRoZSBzcGVjOiBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWZsZXhib3hcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIEZsZXhib3ggZGlzcGxheVxyXG5AbWl4aW4gZmxleGJveCgpIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLy8gVGhlICdmbGV4JyBzaG9ydGhhbmRcclxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGl0ZW1zXHJcbi8vIDxwb3NpdGl2ZS1udW1iZXI+LCBpbml0aWFsLCBhdXRvLCBvciBub25lXHJcbkBtaXhpbiBmbGV4KCR2YWx1ZXMpIHtcclxuICAtd2Via2l0LWJveC1mbGV4OiAkdmFsdWVzO1xyXG4gIC1tb3otYm94LWZsZXg6ICR2YWx1ZXM7XHJcbiAgLXdlYmtpdC1mbGV4OiAkdmFsdWVzO1xyXG4gIC1tcy1mbGV4OiAkdmFsdWVzO1xyXG4gIGZsZXg6ICR2YWx1ZXM7XHJcbn1cclxuXHJcbi8vIEZsZXggRmxvdyBEaXJlY3Rpb25cclxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGNvbnRhaW5lcnNcclxuLy8gcm93IHwgcm93LXJldmVyc2UgfCBjb2x1bW4gfCBjb2x1bW4tcmV2ZXJzZVxyXG5AbWl4aW4gZmxleC1kaXJlY3Rpb24oJGRpcmVjdGlvbikge1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbiAgLW1vei1mbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICAtbXMtZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbn1cclxuXHJcbi8vIEZsZXggTGluZSBXcmFwcGluZ1xyXG4vLyAtIGFwcGxpZXMgdG86IGZsZXggY29udGFpbmVyc1xyXG4vLyBub3dyYXAgfCB3cmFwIHwgd3JhcC1yZXZlcnNlXHJcbkBtaXhpbiBmbGV4LXdyYXAoJHdyYXApIHtcclxuICAtd2Via2l0LWZsZXgtd3JhcDogJHdyYXA7XHJcbiAgLW1vei1mbGV4LXdyYXA6ICR3cmFwO1xyXG4gIC1tcy1mbGV4LXdyYXA6ICR3cmFwO1xyXG4gIGZsZXgtd3JhcDogJHdyYXA7XHJcbn1cclxuXHJcbi8vIEZsZXggRGlyZWN0aW9uIGFuZCBXcmFwXHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBjb250YWluZXJzXHJcbi8vIDxmbGV4LWRpcmVjdGlvbj4gfHwgPGZsZXgtd3JhcD5cclxuQG1peGluIGZsZXgtZmxvdygkZmxvdykge1xyXG4gIC13ZWJraXQtZmxleC1mbG93OiAkZmxvdztcclxuICAtbW96LWZsZXgtZmxvdzogJGZsb3c7XHJcbiAgLW1zLWZsZXgtZmxvdzogJGZsb3c7XHJcbiAgZmxleC1mbG93OiAkZmxvdztcclxufVxyXG5cclxuLy8gRGlzcGxheSBPcmRlclxyXG4vLyAtIGFwcGxpZXMgdG86IGZsZXggaXRlbXNcclxuLy8gPGludGVnZXI+XHJcbkBtaXhpbiBvcmRlcigkdmFsKSB7XHJcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogJHZhbDtcclxuICAtbW96LWJveC1vcmRpbmFsLWdyb3VwOiAkdmFsO1xyXG4gIC1tcy1mbGV4LW9yZGVyOiAkdmFsO1xyXG4gIC13ZWJraXQtb3JkZXI6ICR2YWw7XHJcbiAgb3JkZXI6ICR2YWw7XHJcbn1cclxuXHJcbi8vIEZsZXggZ3JvdyBmYWN0b3JcclxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGl0ZW1zXHJcbi8vIDxudW1iZXI+XHJcbkBtaXhpbiBmbGV4LWdyb3coJGdyb3cpIHtcclxuICAtd2Via2l0LWZsZXgtZ3JvdzogJGdyb3c7XHJcbiAgLW1vei1mbGV4LWdyb3c6ICRncm93O1xyXG4gIC1tcy1mbGV4LWdyb3c6ICRncm93O1xyXG4gIGZsZXgtZ3JvdzogJGdyb3c7XHJcbn1cclxuXHJcbi8vIEZsZXggc2hyaW5rXHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBpdGVtIHNocmluayBmYWN0b3JcclxuLy8gPG51bWJlcj4gXHJcbkBtaXhpbiBmbGV4LXNocmluaygkc2hyaW5rKSB7XHJcbiAgLXdlYmtpdC1mbGV4LXNocmluazogJHNocmluaztcclxuICAtbW96LWZsZXgtc2hyaW5rOiAkc2hyaW5rO1xyXG4gIC1tcy1mbGV4LXNocmluazogJHNocmluaztcclxuICBmbGV4LXNocmluazogJHNocmluaztcclxufVxyXG5cclxuLy8gRmxleCBiYXNpc1xyXG4vLyAtIHRoZSBpbml0aWFsIG1haW4gc2l6ZSBvZiB0aGUgZmxleCBpdGVtXHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBpdGVtc25pdGlhbCBtYWluIHNpemUgb2YgdGhlIGZsZXggaXRlbVxyXG4vLyA8d2lkdGg+IFxyXG5AbWl4aW4gZmxleC1iYXNpcygkd2lkdGgpIHtcclxuICAtd2Via2l0LWZsZXgtYmFzaXM6ICR3aWR0aDtcclxuICAtbW96LWZsZXgtYmFzaXM6ICR3aWR0aDtcclxuICAtbXMtZmxleC1iYXNpczogJHdpZHRoO1xyXG4gIGZsZXgtYmFzaXM6ICR3aWR0aDtcclxufVxyXG5cclxuLy8gQXhpcyBBbGlnbm1lbnRcclxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGNvbnRhaW5lcnNcclxuLy8gZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgc3BhY2UtYmV0d2VlbiB8IHNwYWNlLWFyb3VuZCBcclxuQG1peGluIGp1c3RpZnktY29udGVudCgkanVzdGlmeSkge1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAtbW96LWp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgLW1zLWp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAtbXMtZmxleC1wYWNrOiAkanVzdGlmeTtcclxufVxyXG5cclxuLy8gUGFja2luZyBGbGV4IExpbmVzXHJcbi8vIC0gYXBwbGllcyB0bzogbXVsdGktbGluZSBmbGV4IGNvbnRhaW5lcnNcclxuLy8gZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgc3BhY2UtYmV0d2VlbiB8IHNwYWNlLWFyb3VuZCB8IHN0cmV0Y2ggXHJcbkBtaXhpbiBhbGlnbi1jb250ZW50KCRhbGlnbikge1xyXG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogJGFsaWduO1xyXG4gIC1tb3otYWxpZ24tY29udGVudDogJGFsaWduO1xyXG4gIC1tcy1hbGlnbi1jb250ZW50OiAkYWxpZ247XHJcbiAgYWxpZ24tY29udGVudDogJGFsaWduO1xyXG59XHJcblxyXG4vLyBDcm9zcy1heGlzIEFsaWdubWVudFxyXG4vLyAtIGFwcGxpZXMgdG86IGZsZXggY29udGFpbmVyc1xyXG4vLyBmbGV4LXN0YXJ0IHwgZmxleC1lbmQgfCBjZW50ZXIgfCBiYXNlbGluZSB8IHN0cmV0Y2ggXHJcbkBtaXhpbiBhbGlnbi1pdGVtcygkYWxpZ24pIHtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgLW1vei1hbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIC1tcy1hbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbn1cclxuXHJcbi8vIENyb3NzLWF4aXMgQWxpZ25tZW50XHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBpdGVtc1xyXG4vLyBhdXRvIHwgZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgYmFzZWxpbmUgfCBzdHJldGNoIFxyXG5AbWl4aW4gYWxpZ24tc2VsZigkYWxpZ24pIHtcclxuICAtd2Via2l0LWFsaWduLXNlbGY6ICRhbGlnbjtcclxuICAtbW96LWFsaWduLXNlbGY6ICRhbGlnbjtcclxuICAtbXMtYWxpZ24tc2VsZjogJGFsaWduO1xyXG4gIGFsaWduLXNlbGY6ICRhbGlnbjtcclxufSIsIkBjaGFyc2V0IFwiVVRGLThcIjtcclxuXHJcbkBpbXBvcnQgXCJhcHAvc2Nzcy9taXhpbnNcIjtcclxuLy9saWJzXHJcblxyXG5AaW1wb3J0IFwiYXBwL3Njc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJhcHAvc2Nzcy9yZXNldFwiO1xyXG5AaW1wb3J0IFwiYXBwL3Njc3MvYmFzZVwiO1xyXG5AaW1wb3J0IFwiYXBwL3Njc3MvZ3JpZFwiO1xyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmJvZHkge1xyXG4gIEBpbmNsdWRlIGZsZXhib3g7XHJcbiAgQGluY2x1ZGUgZmxleC1kaXJlY3Rpb24oY29sdW1uKTtcclxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICAud3JhcCB7XHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgIEBpbmNsdWRlIGNsZWFyZml4O1xyXG4gIH1cclxufVxyXG51bCwgb2wge1xyXG4gIGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIH1cclxufVxyXG5AaWYgKCRsaXN0LWltYWdlID09IHRydWUpe1xyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcIi4uL2ltYWdlcy9saXN0LnBuZ1wiKTtcclxuICB9XHJcbn1cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6ICRsaW5rLWNvbG9yO1xyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgQGlmKCRsaW5rLWhvdmVyLWNvbG9yICE9IGZhbHNlKXtcclxuICAgICAgY29sb3I6ICRsaW5rLWhvdmVyLWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuICBpbWcge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxufVxyXG5AaW5jbHVkZSBoZWFkaW5nKCk7XHJcbnAge1xyXG4gIG1hcmdpbi1ib3R0b206ICRwYXJhZ3JhcGgtbWFyZ2luO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1wYXJhZ3JhcGg7XHJcbiAgbGluZS1oZWlnaHQ6ICRwYXJhZ3JhcGgtaGVpZ2h0O1xyXG4gIGNvbG9yOiAkcGFyYWdyYXBoLWNvbG9yO1xyXG59XHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcclxuICB0aCx0ZCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXBhcmFncmFwaDtcclxuICAgIGNvbG9yOiAkdGFibGUtY29sb3I7XHJcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHN4cyl7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgdGgge1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIEBpZigkdGFibGUtaGVhZGluZy1jb2xvciAhPSBmYWxzZSl7XHJcbiAgICAgIGNvbG9yOiAkdGFibGUtaGVhZGluZy1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS12YWxpZGF0aW9uO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG50ZXh0YXJlYSwgaW5wdXQsIHNlbGVjdHtcclxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXZhbGlkYXRpb247XHJcbn1cclxuYnV0dG9uIHtcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuLnRleHQtcGFnZSB7XHJcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHNtLWRvd24pe1xyXG4gICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0byAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVsLG9sIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBsaSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbGVmdDogMTVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXBhcmFncmFwaDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnRleHQtcGFnZSB0YWJsZSBpbWcge1xyXG4gIGZsb2F0OiBub25lO1xyXG4gIG1heC13aWR0aDogaW5oZXJpdDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmF0dGVudGlvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY2xlYXJmaXgge1xyXG4gIEBpbmNsdWRlIGNsZWFyZml4O1xyXG59XHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3ZlcmZsb3ctd3JhcCB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuLmhpZGRlbi1tZC11cCB7XHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZC11cCl7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iLCIvL1ZhcmlhYmxlc1xyXG5cclxuJGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1hbHQ6ICRmb250LWZhbWlseTtcclxuJGZvbnQtZmFtaWx5LXZhbGlkYXRpb246ICRmb250LWZhbWlseTtcclxuJGZvbnQtZmFtaWx5LWhlYWRpbmdzOiAkZm9udC1mYW1pbHk7XHJcblxyXG4kZm9udC1zaXplOiAxNXB4O1xyXG4kZm9udC1zaXplLXBhcmFncmFwaDogMTVweDtcclxuJHRleHQtY29sb3I6ICMxNzE3MTc7XHJcbiRjb2xvci0xOiAjMjE5ODkyO1xyXG4kY29sb3ItMjogIzBhM2Q0MDtcclxuJHBhcmFncmFwaC1tYXJnaW46IDI1cHg7IC8vbWFyZ2luLWJvdHRvbVxyXG4kcGFyYWdyYXBoLWhlaWdodDogMS40OyAgLy9saW5lLWhlaWdodFxyXG4kcGFyYWdyYXBoLWNvbG9yOiAkdGV4dC1jb2xvcjtcclxuJGxpc3QtaW1hZ2U6IGZhbHNlOyAgLy9saXN0LnBuZ1xyXG5cclxuJGhlYWRpbmctbWFyZ2luOiAzNSwgMzUsIDMwLCAzMCwgMzAsIDI1O1xyXG4kaGVhZGluZy1mb250LXNpemU6IDU1LCA0NiwgMzgsIDMwLCAyNCwgMTg7XHJcbiRoZWFkaW5nLWZvbnQtd2VpZ2h0OiA2MDAsNjAwLDYwMCw2MDAsNjAwLDYwMDsgLy8gMSA9IFwibm9ybWFsXCIoNDAwKVxyXG4kaGVhZGluZy11cHBlcmNhc2U6IDAsMCwwLDAsMCwwOyAvLyAwID0gXCJub25lXCIsIDEgPSBcInVwcGVyY2FzZVwiXHJcbiRoZWFkaW5nLXRleHQtYWxpZ246IGwsbCxsLGwsbCxsOyAvLyBjID0gXCJjZW50ZXJcIiwgbCA9IFwibGVmdFwiLCByID0gXCJyaWdodFwiXHJcbiRoZWFkaW5nLWNvbG9yOiAjMzMzMzMzO1xyXG5cclxuLy8gU00gSGVhZGluZyBzaXplc1xyXG4kc20taGVhZGluZy1jaGFuZ2U6IGZhbHNlO1xyXG4kc20taGVhZGluZy1tYXJnaW46IDUwLCAzNSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2U7XHJcbiRzbS1oZWFkaW5nLWZvbnQtc2l6ZTogNDAsIDMwLCAyNCwgZmFsc2UsIGZhbHNlLCBmYWxzZTtcclxuLy8gWFMgSGVhZGluZyBzaXplc1xyXG4keHMtaGVhZGluZy1jaGFuZ2U6IHRydWU7XHJcbiR4cy1oZWFkaW5nLW1hcmdpbjogZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZTtcclxuJHhzLWhlYWRpbmctZm9udC1zaXplOiAzNiwgMjYsIDIyLCAyMCwgMTgsIDE2O1xyXG5cclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kbGluay1jb2xvcjogJGNvbG9yLTE7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiBmYWxzZTtcclxuXHJcbiR0YWJsZS1ib3JkZXItY29sb3I6ICNkNmQ2ZDY7XHJcbiR0YWJsZS1jb2xvcjogIzNjM2MzYztcclxuJHRhYmxlLWhlYWRpbmctY29sb3I6IGZhbHNlOyIsIkBtaXhpbiBjbGVhcmZpeCgpIHtcclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcbiAgJjphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbn0iLCIkaGVhZGluZ19jb3VudDogNjtcclxuJGJyZWFrcG9pbnRzOiA5OTIsIDUwMDtcclxuXHJcbkBtaXhpbiBoZWFkaW5nKCl7XHJcbiAgJGxpc3Q6ICcnO1xyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGhlYWRpbmdfY291bnQge1xyXG4gICAgQGlmICgkaSA9PSAxKSB7XHJcbiAgICAgICRsaXN0OiBcImgjeyRpfSwgLmgjeyRpfVwiXHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgJGxpc3Q6ICRsaXN0ICsgXCIsIGgjeyRpfSwgLmgjeyRpfVwiXHJcbiAgICB9XHJcbiAgfVxyXG4gICN7JGxpc3R9IHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktaGVhZGluZ3M7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkaGVhZGluZ19jb3VudCB7XHJcbiAgICAkbWFyZ2luOiAgbnRoKCRoZWFkaW5nLW1hcmdpbiwgJGkpO1xyXG4gICAgJHNtLW1hcmdpbjogIG50aCgkc20taGVhZGluZy1tYXJnaW4sICRpKTtcclxuICAgICR4cy1tYXJnaW46ICBudGgoJHhzLWhlYWRpbmctbWFyZ2luLCAkaSk7XHJcbiAgICAkdXBwZXJjYXNlOiBudGgoJGhlYWRpbmctdXBwZXJjYXNlLCAkaSk7XHJcbiAgICAkdGV4dC1hbGlnbjogbnRoKCRoZWFkaW5nLXRleHQtYWxpZ24sICRpKTtcclxuICAgICR3ZWlnaHQ6IG50aCgkaGVhZGluZy1mb250LXdlaWdodCwgJGkpO1xyXG4gICAgJHNtLXNpemU6IG50aCgkc20taGVhZGluZy1mb250LXNpemUsICRpKTtcclxuICAgICRzaXplOiBudGgoJGhlYWRpbmctZm9udC1zaXplLCAkaSk7XHJcbiAgICAkeHMtc2l6ZTogbnRoKCR4cy1oZWFkaW5nLWZvbnQtc2l6ZSwgJGkpO1xyXG5cclxuICAgICN7XCJoI3skaX0sIC5oI3skaX1cIn0ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAkbWFyZ2luICsgcHg7XHJcbiAgICAgIEBpZiAoJHVwcGVyY2FzZSAhPSAwKSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG4gICAgICBAaWYgKCR0ZXh0LWFsaWduICE9IFwibFwiKSB7XHJcbiAgICAgICAgQGlmICgkdGV4dC1hbGlnbiA9PSBcImNcIikge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH0gQGVsc2VpZiAoJHRleHQtYWxpZ24gPT0gXCJyXCIpIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAaWYgKCR3ZWlnaHQgIT0gMSkge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIGZvbnQtc2l6ZTogJHNpemUgKyBweDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoc20pe1xyXG4gICAgICBAaWYoJHNtLWhlYWRpbmctY2hhbmdlID09IHRydWUpe1xyXG4gICAgICAgICN7XCJoI3skaX0sIC5oI3skaX1cIn0ge1xyXG4gICAgICAgICAgQGlmKCgkc20tbWFyZ2luIT0gZmFsc2UpKXtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHNtLW1hcmdpbiArIHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGlmKCgkc20tc2l6ZSE9IGZhbHNlKSl7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTokc20tc2l6ZSArIHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludCh4cyl7XHJcbiAgICAgIEBpZigkeHMtaGVhZGluZy1jaGFuZ2UgPT0gdHJ1ZSl7XHJcbiAgICAgICAgI3tcImgjeyRpfSwgLmgjeyRpfVwifSB7XHJcbiAgICAgICAgICBAaWYoKCR4cy1tYXJnaW4hPSBmYWxzZSkpe1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkeHMtbWFyZ2luICsgcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAaWYoKCR4cy1zaXplIT0gZmFsc2UpKXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiR4cy1zaXplICsgcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\OpenServer\domains\courses\angular\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map