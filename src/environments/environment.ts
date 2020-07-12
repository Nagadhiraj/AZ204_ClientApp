// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //userUrl: "https://hfstappahqpfgasla6am-userfuncapp.azurewebsites.net/api/",
  userUrl: "https://localhost:44382/",
  clientId: 'ef4c5495-06f8-4af1-9801-9a24bafc9584',
  authority: 'https://login.microsoftonline.com/3b9fe888-a28f-4637-8247-e7d730502d46/',
  redirectUri: 'http://localhost:4200/',
  postLogoutRedirectUri: 'https://hfstapp-cdn.azureedge.net',
  isIE: window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1,
  consentScopes1: ["api://4500db5b-cf58-4b2f-98b2-d5ce8f0f4fc6/api-access"],
  unprotectedResources: [],
  webApi1: 'https://hfstappahqpfgasla6am-userfuncapp.azurewebsites.net/api/',
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
