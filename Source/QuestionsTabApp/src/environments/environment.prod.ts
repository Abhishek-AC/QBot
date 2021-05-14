export const environment = {
    production: false,
    apiBaseUrl: "https://qbot-test-ipodia.azurewebsites.net/api/Request/",
    selfUrl: "https://qbot-test-ipodia-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "36320514-06c0-419a-af10-7e647831a2dc",
        clientId: "eaaf58f0-b6ca-4403-903c-ca39586c6d56",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
