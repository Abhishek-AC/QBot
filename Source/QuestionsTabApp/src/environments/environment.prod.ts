export const environment = {
    production: false,
    apiBaseUrl: "https://qbotuscviterbi.azurewebsites.net/api/Request/",
    selfUrl: "https://qbotuscviterbi-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "36320514-06c0-419a-af10-7e647831a2dc",
        clientId: "14957465-7381-4819-b76f-6c8d2a7b8244",
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
