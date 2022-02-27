const api_endpoint = "https://jsonplaceholder.typicode.com/users"

// (1) Use the fetch() function to make a GET request to
// the API endpoint

// (2) Use .then() with a callback to console.log() the name
// of the first user

// (3) Use .catch() to handle any possible error should the
// HTTP request fail


function run() {
    // Add your code below
    fetch(
        api_endpoint, 
        {
            "method": 'GET',
            "headers": {
                'Content-type': 'application/json'
            }
        }
    )
    .then(
        function(backendResponse) {
            return backendResponse.json()
        }
    )
    .then(
        function(backendResponse_json) {
            console.log(backendResponse_json[0]['name'])
            // document.getElementsByTagName('body')[0].innerHTML = backendResponse_json[0]['name']
        }
    )
    .catch(
        function(error) {
            console.log(error);
            // document.getElementsByTagName('body')[0].innerHTML = "Something went wrong!"
        }
    )
}