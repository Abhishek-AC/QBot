export const environment = {
    production: false,
    apiBaseUrl: "https://qbotusc.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "36320514-06c0-419a-af10-7e647831a2dc",
        clientId: "c392f2be-ac17-41bd-8df9-b18a89261f4d",
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
};
