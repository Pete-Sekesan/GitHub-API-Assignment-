

//create a function to search for GitHub user name
    
  

    //request API from GitHub
    function getUserName(searchUser){
        const url = `https://api.github.com/users/${searchUser}/repos`
        fetch(url)
        .then(response => response.json())
        .then(responseJson => showResults(response.json))
        .catch(err => alert('That user does not exist. Please try another'));
    }

function showResults(responseJson) {
    console.log('showResults function ran')
    $('#display-results').empty();
    responseJson.forEach(function (repo) {
        $('#search-results').append(`<li>${repo.name} ${repo.owner.url}`)
        $('#display-results').removeClass('hidden');


    })
}





//create watch submit button
    function watchForm(){
    $('#search-form').submit(e => {e.preventDefault();
    const searchUser = $('#search-term').val();
    getUserName(searchUser)
        
})
    }

    $(watchForm())




//clear out the search field after entering

//find endpoint for searching GitHub user repos

//display search results in <ul>

//display repo name and have it be an clickable link to the repo

//remove hidden class from section display-results ID

//empty the display-results ID after new search

//create an error message if no user name exists