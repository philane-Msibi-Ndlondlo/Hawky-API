(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--15-3!./src/styles.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n/* position */\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n/* toast styles */\n.toast-title {\n  font-weight: bold;\n}\n.toast-message {\n  word-wrap: break-word;\n}\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n.toast-container * {\n  box-sizing: border-box;\n}\n.toast-container .ngx-toastr {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n.toast-container .ngx-toastr:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n.toast-container.toast-top-center .ngx-toastr,\n.toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.toast-container.toast-top-full-width .ngx-toastr,\n.toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto;\n}\n.toast-success {\n  background-color: #51A351;\n}\n.toast-error {\n  background-color: #BD362F;\n}\n.toast-info {\n  background-color: #2F96B4;\n}\n.toast-warning {\n  background-color: #F89406;\n}\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n/* Responsive Design */\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\nhtml {\n  text-shadow: none;\n}\n.data-error {\n  color: #f44336;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXHBoaWxhbmUubXNpYmlcXERlc2t0b3BcXEF0dGVuZGFuY2UgUmVnaXN0ZXJcXGZyb250ZW5kL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvQzpcXFVzZXJzXFxwaGlsYW5lLm1zaWJpXFxEZXNrdG9wXFxBdHRlbmRhbmNlIFJlZ2lzdGVyXFxmcm9udGVuZC9ub2RlX21vZHVsZXNcXG5neC10b2FzdHJcXHRvYXN0ci5jc3MiLCJzcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQSxrSkFBQTtBQUVBLGFBQUE7QUFDQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0NGO0FEQ0E7RUFDRSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNFRjtBREFBO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDR0Y7QUREQTtFQUNFLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0lGO0FERkE7RUFDRSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNLRjtBREhBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNNRjtBREpBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUNPRjtBRExBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNRRjtBRE5BO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUNTRjtBRE5BLGlCQUFBO0FBQ0E7RUFDRSxpQkFBQTtBQ1NGO0FEUEE7RUFDRSxxQkFBQTtBQ1VGO0FEUkE7O0VBRUUsY0FBQTtBQ1dGO0FEVEE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNZRjtBRFZBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ2FGO0FEWEE7O0VBRUUsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNjRjtBRFpBOzt5REFBQTtBQUdBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUNlRjtBRGJBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ2dCRjtBRGRBO0VBQ0Usc0JBQUE7QUNpQkY7QURmQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7QUNrQkY7QURoQkE7RUFDRSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDbUJGO0FEakJBLGlIQUFBO0FBQ0E7RUFDRSxxbEJBQUE7QUNvQkY7QURsQkEsa0hBQUE7QUFDQTtFQUNFLDZqQkFBQTtBQ3FCRjtBRG5CQSwyR0FBQTtBQUNBO0VBQ0Usd2RBQUE7QUNzQkY7QURwQkEsMEhBQUE7QUFDQTtFQUNFLHNvQkFBQTtBQ3VCRjtBRHJCQTs7RUFFRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ3dCRjtBRHRCQTs7RUFFRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ3lCRjtBRHZCQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7QUMwQkY7QUR4QkE7RUFDRSx5QkFBQTtBQzJCRjtBRHpCQTtFQUNFLHlCQUFBO0FDNEJGO0FEMUJBO0VBQ0UseUJBQUE7QUM2QkY7QUQzQkE7RUFDRSx5QkFBQTtBQzhCRjtBRDVCQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDK0JGO0FEN0JBLHNCQUFBO0FBQ0E7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsV0FBQTtFQ2dDRjs7RUQ5QkE7SUFDRSxhQUFBO0lBQ0EsV0FBQTtFQ2lDRjtBQUNGO0FEL0JBO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLFdBQUE7RUNpQ0Y7O0VEL0JBO0lBQ0UsYUFBQTtJQUNBLFdBQUE7RUNrQ0Y7QUFDRjtBRGhDQTtFQUNFO0lBQ0UsNEJBQUE7SUFDQSxXQUFBO0VDa0NGO0FBQ0Y7QUY5TkE7RUFDRSxpQkFBQTtBRWdPRjtBRjFOQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FFNk5GIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgJ35uZ3gtdG9hc3RyL3RvYXN0cic7XG5odG1se1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuXG5cblxuLmRhdGEtZXJyb3Ige1xuICBjb2xvcjogI2Y0NDMzNjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuIiwiLyogYmFzZWQgb24gYW5ndWxhci10b2FzdHIgY3NzIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3hhbmR4c3MvYW5ndWxhci10b2FzdHIvYmxvYi9jYjUwOGZlNjgwMWQ2YjI4OGQzYWZjNTI1YmI0MGZlZTFiMTAxNjUwL2Rpc3QvYW5ndWxhci10b2FzdHIuY3NzICovXG5cbi8qIHBvc2l0aW9uICovXG4udG9hc3QtY2VudGVyLWNlbnRlciB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLnRvYXN0LXRvcC1jZW50ZXIge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b2FzdC1ib3R0b20tY2VudGVyIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9hc3QtdG9wLWZ1bGwtd2lkdGgge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b2FzdC1ib3R0b20tZnVsbC13aWR0aCB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvYXN0LXRvcC1sZWZ0IHtcbiAgdG9wOiAxMnB4O1xuICBsZWZ0OiAxMnB4O1xufVxuLnRvYXN0LXRvcC1yaWdodCB7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDEycHg7XG59XG4udG9hc3QtYm90dG9tLXJpZ2h0IHtcbiAgcmlnaHQ6IDEycHg7XG4gIGJvdHRvbTogMTJweDtcbn1cbi50b2FzdC1ib3R0b20tbGVmdCB7XG4gIGJvdHRvbTogMTJweDtcbiAgbGVmdDogMTJweDtcbn1cblxuLyogdG9hc3Qgc3R5bGVzICovXG4udG9hc3QtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50b2FzdC1tZXNzYWdlIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuLnRvYXN0LW1lc3NhZ2UgYSxcbi50b2FzdC1tZXNzYWdlIGxhYmVsIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4udG9hc3QtbWVzc2FnZSBhOmhvdmVyIHtcbiAgY29sb3I6ICNDQ0NDQ0M7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi50b2FzdC1jbG9zZS1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAtMC4zZW07XG4gIHRvcDogLTAuM2VtO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmZmZmO1xuICAvKiBvcGFjaXR5OiAwLjg7ICovXG59XG4udG9hc3QtY2xvc2UtYnV0dG9uOmhvdmVyLFxuLnRvYXN0LWNsb3NlLWJ1dHRvbjpmb2N1cyB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC40O1xufVxuLypBZGRpdGlvbmFsIHByb3BlcnRpZXMgZm9yIGJ1dHRvbiB2ZXJzaW9uXG4gaU9TIHJlcXVpcmVzIHRoZSBidXR0b24gZWxlbWVudCBpbnN0ZWFkIG9mIGFuIGFuY2hvciB0YWcuXG4gSWYgeW91IHdhbnQgdGhlIGFuY2hvciB2ZXJzaW9uLCBpdCByZXF1aXJlcyBgaHJlZj1cIiNcImAuKi9cbmJ1dHRvbi50b2FzdC1jbG9zZS1idXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG4udG9hc3QtY29udGFpbmVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTk5O1xufVxuLnRvYXN0LWNvbnRhaW5lciAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCAwIDZweDtcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDE1cHggY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4ICM5OTk5OTk7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0cjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2luZm8tY2lyY2xlLnN2ZyAqL1xuLnRvYXN0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J00yNTYgOEMxMTkuMDQzIDggOCAxMTkuMDgzIDggMjU2YzAgMTM2Ljk5NyAxMTEuMDQzIDI0OCAyNDggMjQ4czI0OC0xMTEuMDAzIDI0OC0yNDhDNTA0IDExOS4wODMgMzkyLjk1NyA4IDI1NiA4em0wIDExMGMyMy4xOTYgMCA0MiAxOC44MDQgNDIgNDJzLTE4LjgwNCA0Mi00MiA0Mi00Mi0xOC44MDQtNDItNDIgMTguODA0LTQyIDQyLTQyem01NiAyNTRjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtODhjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoMTJ2LTY0aC0xMmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg2NGM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjEwMGgxMmM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjI0eicvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL3RpbWVzLWNpcmNsZS5zdmcgKi9cbi50b2FzdC1lcnJvciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6bTEyMS42IDMxMy4xYzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMzggMzc3LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwyNTYgMzEybC02NS4xIDY1LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwxMzQuNCAzMzhjLTQuNy00LjctNC43LTEyLjMgMC0xN2w2NS42LTY1LTY1LjYtNjUuMWMtNC43LTQuNy00LjctMTIuMyAwLTE3bDM5LjYtMzkuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsNjUgNjUuNyA2NS4xLTY1LjZjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDM5LjYgMzkuNmM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMzEyIDI1Nmw2NS42IDY1LjF6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvY2hlY2suc3ZnICovXG4udG9hc3Qtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2V4Y2xhbWF0aW9uLXRyaWFuZ2xlLnN2ZyAqL1xuLnRvYXN0LXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyB3aWR0aD0nNTc2JyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J001NjkuNTE3IDQ0MC4wMTNDNTg3Ljk3NSA0NzIuMDA3IDU2NC44MDYgNTEyIDUyNy45NCA1MTJINDguMDU0Yy0zNi45MzcgMC01OS45OTktNDAuMDU1LTQxLjU3Ny03MS45ODdMMjQ2LjQyMyAyMy45ODVjMTguNDY3LTMyLjAwOSA2NC43Mi0zMS45NTEgODMuMTU0IDBsMjM5Ljk0IDQxNi4wMjh6TTI4OCAzNTRjLTI1LjQwNSAwLTQ2IDIwLjU5NS00NiA0NnMyMC41OTUgNDYgNDYgNDYgNDYtMjAuNTk1IDQ2LTQ2LTIwLjU5NS00Ni00Ni00NnptLTQzLjY3My0xNjUuMzQ2bDcuNDE4IDEzNmMuMzQ3IDYuMzY0IDUuNjA5IDExLjM0NiAxMS45ODIgMTEuMzQ2aDQ4LjU0NmM2LjM3MyAwIDExLjYzNS00Ljk4MiAxMS45ODItMTEuMzQ2bDcuNDE4LTEzNmMuMzc1LTYuODc0LTUuMDk4LTEyLjY1NC0xMS45ODItMTIuNjU0aC02My4zODNjLTYuODg0IDAtMTIuMzU2IDUuNzgtMTEuOTgxIDEyLjY1NHonLyUzRSUzQy9zdmclM0VcIik7XG59XG4udG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1jZW50ZXIgLm5neC10b2FzdHIsXG4udG9hc3QtY29udGFpbmVyLnRvYXN0LWJvdHRvbS1jZW50ZXIgLm5neC10b2FzdHIge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4udG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1mdWxsLXdpZHRoIC5uZ3gtdG9hc3RyLFxuLnRvYXN0LWNvbnRhaW5lci50b2FzdC1ib3R0b20tZnVsbC13aWR0aCAubmd4LXRvYXN0ciB7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ubmd4LXRvYXN0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzAzMDM7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLnRvYXN0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFBMzUxO1xufVxuLnRvYXN0LWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JEMzYyRjtcbn1cbi50b2FzdC1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJGOTZCNDtcbn1cbi50b2FzdC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4OTQwNjtcbn1cbi50b2FzdC1wcm9ncmVzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgb3BhY2l0eTogMC40O1xufVxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDI0MHB4KSB7XG4gIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xuICAgIHdpZHRoOiAxMWVtO1xuICB9XG4gIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgcmlnaHQ6IC0wLjJlbTtcbiAgICB0b3A6IC0wLjJlbTtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMjQxcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggNTBweDtcbiAgICB3aWR0aDogMThlbTtcbiAgfVxuICAudG9hc3QtY29udGFpbmVyIC50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgIHJpZ2h0OiAtMC4yZW07XG4gICAgdG9wOiAtMC4yZW07XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ci5kaXYge1xuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDUwcHg7XG4gICAgd2lkdGg6IDI1ZW07XG4gIH1cbn1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi8qIGJhc2VkIG9uIGFuZ3VsYXItdG9hc3RyIGNzcyBodHRwczovL2dpdGh1Yi5jb20vRm94YW5keHNzL2FuZ3VsYXItdG9hc3RyL2Jsb2IvY2I1MDhmZTY4MDFkNmIyODhkM2FmYzUyNWJiNDBmZWUxYjEwMTY1MC9kaXN0L2FuZ3VsYXItdG9hc3RyLmNzcyAqL1xuLyogcG9zaXRpb24gKi9cbi50b2FzdC1jZW50ZXItY2VudGVyIHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi50b2FzdC10b3AtY2VudGVyIHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b2FzdC1ib3R0b20tY2VudGVyIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b2FzdC10b3AtZnVsbC13aWR0aCB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9hc3QtYm90dG9tLWZ1bGwtd2lkdGgge1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvYXN0LXRvcC1sZWZ0IHtcbiAgdG9wOiAxMnB4O1xuICBsZWZ0OiAxMnB4O1xufVxuXG4udG9hc3QtdG9wLXJpZ2h0IHtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogMTJweDtcbn1cblxuLnRvYXN0LWJvdHRvbS1yaWdodCB7XG4gIHJpZ2h0OiAxMnB4O1xuICBib3R0b206IDEycHg7XG59XG5cbi50b2FzdC1ib3R0b20tbGVmdCB7XG4gIGJvdHRvbTogMTJweDtcbiAgbGVmdDogMTJweDtcbn1cblxuLyogdG9hc3Qgc3R5bGVzICovXG4udG9hc3QtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRvYXN0LW1lc3NhZ2Uge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi50b2FzdC1tZXNzYWdlIGEsXG4udG9hc3QtbWVzc2FnZSBsYWJlbCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4udG9hc3QtbWVzc2FnZSBhOmhvdmVyIHtcbiAgY29sb3I6ICNDQ0NDQ0M7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IC0wLjNlbTtcbiAgdG9wOiAtMC4zZW07XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmZmZmY7XG4gIC8qIG9wYWNpdHk6IDAuODsgKi9cbn1cblxuLnRvYXN0LWNsb3NlLWJ1dHRvbjpob3Zlcixcbi50b2FzdC1jbG9zZS1idXR0b246Zm9jdXMge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLypBZGRpdGlvbmFsIHByb3BlcnRpZXMgZm9yIGJ1dHRvbiB2ZXJzaW9uXG4gaU9TIHJlcXVpcmVzIHRoZSBidXR0b24gZWxlbWVudCBpbnN0ZWFkIG9mIGFuIGFuY2hvciB0YWcuXG4gSWYgeW91IHdhbnQgdGhlIGFuY2hvciB2ZXJzaW9uLCBpdCByZXF1aXJlcyBgaHJlZj1cIiNcImAuKi9cbmJ1dHRvbi50b2FzdC1jbG9zZS1idXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG5cbi50b2FzdC1jb250YWluZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5OTk7XG59XG5cbi50b2FzdC1jb250YWluZXIgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCAwIDZweDtcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDE1cHggY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4ICM5OTk5OTk7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4udG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDEycHggIzAwMDAwMDtcbiAgb3BhY2l0eTogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9pbmZvLWNpcmNsZS5zdmcgKi9cbi50b2FzdC1pbmZvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMjU2IDhDMTE5LjA0MyA4IDggMTE5LjA4MyA4IDI1NmMwIDEzNi45OTcgMTExLjA0MyAyNDggMjQ4IDI0OHMyNDgtMTExLjAwMyAyNDgtMjQ4QzUwNCAxMTkuMDgzIDM5Mi45NTcgOCAyNTYgOHptMCAxMTBjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHonLyUzRSUzQy9zdmclM0VcIik7XG59XG5cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL3RpbWVzLWNpcmNsZS5zdmcgKi9cbi50b2FzdC1lcnJvciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6bTEyMS42IDMxMy4xYzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMzggMzc3LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwyNTYgMzEybC02NS4xIDY1LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwxMzQuNCAzMzhjLTQuNy00LjctNC43LTEyLjMgMC0xN2w2NS42LTY1LTY1LjYtNjUuMWMtNC43LTQuNy00LjctMTIuMyAwLTE3bDM5LjYtMzkuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsNjUgNjUuNyA2NS4xLTY1LjZjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDM5LjYgMzkuNmM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMzEyIDI1Nmw2NS42IDY1LjF6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9jaGVjay5zdmcgKi9cbi50b2FzdC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9leGNsYW1hdGlvbi10cmlhbmdsZS5zdmcgKi9cbi50b2FzdC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMicgd2lkdGg9JzU3NicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4udG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1jZW50ZXIgLm5neC10b2FzdHIsXG4udG9hc3QtY29udGFpbmVyLnRvYXN0LWJvdHRvbS1jZW50ZXIgLm5neC10b2FzdHIge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi50b2FzdC1jb250YWluZXIudG9hc3QtdG9wLWZ1bGwtd2lkdGggLm5neC10b2FzdHIsXG4udG9hc3QtY29udGFpbmVyLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoIC5uZ3gtdG9hc3RyIHtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLm5neC10b2FzdHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwMzAzO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLnRvYXN0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFBMzUxO1xufVxuXG4udG9hc3QtZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkQzNjJGO1xufVxuXG4udG9hc3QtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyRjk2QjQ7XG59XG5cbi50b2FzdC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4OTQwNjtcbn1cblxuLnRvYXN0LXByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAyNDBweCkge1xuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggNTBweDtcbiAgICB3aWR0aDogMTFlbTtcbiAgfVxuXG4gIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgcmlnaHQ6IC0wLjJlbTtcbiAgICB0b3A6IC0wLjJlbTtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMjQxcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggNTBweDtcbiAgICB3aWR0aDogMThlbTtcbiAgfVxuXG4gIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgcmlnaHQ6IC0wLjJlbTtcbiAgICB0b3A6IC0wLjJlbTtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcbiAgICB3aWR0aDogMjVlbTtcbiAgfVxufVxuaHRtbCB7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG4uZGF0YS1lcnJvciB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\philane.msibi\Desktop\Attendance Register\frontend\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map