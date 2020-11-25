

//create a function to search for GitHub user name
    
    function userInput(){
        //create a variable to hold the user input from search-term ID
        let textInput = $('#search-term').val();
        return textInput;
    }

    //request API from GitHub
    function getUserName(){
        fetch("https://api.github.com/users/" + userInput() + "/repos")
        .then(response => response.json())
        .then(responseJson => showResults(response.json))
        .catch(err => alert('That user does not exist. Please try another'));
    }

function showResults(responseJson){

}


//create watch submit button
function watchSubmit() {
    console.log('testing watchSubmit')
    $('#search-form').submit(event => event.preventDefault());
    getUserName(userInput);
}
//clear out the search field after entering

//find endpoint for searching GitHub user repos

//display search results in <ul>

//display repo name and have it be an clickable link to the repo

//remove hidden class from section display-results ID

//empty the display-results ID after new search

//create an error message if no user name exists 

