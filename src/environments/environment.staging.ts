export const environment = {
  production: true,
  environmentName: 'QA',
  userUrl: "https://hfapp-webapp-eu.azurewebsites.net/",
  //userUrl: "https://hfstapp-apims.azure-api.net/api/v1/",
  clientId: 'ef4c5495-06f8-4af1-9801-9a24bafc9584',
  authority: 'https://login.microsoftonline.com/3b9fe888-a28f-4637-8247-e7d730502d46/',
  redirectUri: 'https://hfapp-cdnendpoint.azureedge.net',
  postLogoutRedirectUri: 'https://hfapp-cdnendpoint.azureedge.net',
  isIE: window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1,
  unprotectedResources: [],
  consentScopes1: ["api://4500db5b-cf58-4b2f-98b2-d5ce8f0f4fc6/api-access"],
  webApi1: 'https://hfstappahqpfgasla6am-userfuncapp.azurewebsites.net/api/',
};
