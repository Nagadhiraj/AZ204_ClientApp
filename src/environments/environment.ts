// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "https://localhost:44382/api/",
  //apiUrl: "https://hfapp-webapp-eu.azurewebsites.net/api/",
  clientId: 'c23660c7-74c3-4f3b-ae78-c57fc37511a5',
  authority: 'https://hforg.b2clogin.com/hforg.onmicrosoft.com/oauth2/v2.0/authorize?0=b2c_1_signupsignin',
  //authority: 'https://login.microsoftonline.com/2199f60f-84ef-407d-a08e-c57fc37511a5/',
  redirectUri: 'https://hfapp-cdnendpoint.azureedge.net/admin',
  postLogoutRedirectUri: 'https://hfapp-cdnendpoint.azureedge.net',
  isIE: window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1,
  consentScopes1: ["api://4500db5b-cf58-4b2f-98b2-d5ce8f0f4fc6/api-access"],
  unprotectedResources: [],
  webApi1: 'https://hfapp-webapp-eu.azurewebsites.net/',
  extraQueryParameters: {}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
