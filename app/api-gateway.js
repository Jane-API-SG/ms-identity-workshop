/** 
 * Helper function to call Salling Group API endpoint
 * using the authorization bearer token scheme
*/
function callSGGateway(endpoint, token) {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    fetch(endpoint, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.log(error));
}
