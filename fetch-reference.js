fetch('https://jsonplaceholder.typicode.com/todos/1')
// Convert string to object .json()
.then(
    function(backendResponse) {
        return backendResponse.json()
    }
)
// Output the object after conversion
.then(
    function(backendResponse_json) {
        console.log(backendResponse_json)
    }
)
.catch(
    function(error) {
        // If request unsuccessful
        console.log(error)
    }
);