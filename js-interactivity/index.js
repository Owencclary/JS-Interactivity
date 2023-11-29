// Gets the form tag then when the user sumbit event is run, the code runs the add movie callback function
document.querySelector("form").addEventListener("submit", addMovie);
let message = document.querySelector('#message')


function addMovie(evt) {

    // prevents the basic form function from taking place so we can use our function instead
    evt.preventDefault()

    // makes a new list element called movie 
    let movie = document.createElement('li')
    // gets the users input in the movie name input
    let input = document.querySelector('input')
    // makes a new span element called movie title
    let movieTitle = document.createElement('span')

    // sets movie title to the input from the user
    movieTitle.textContent = input.value
    // adds an event lister so that when the movie list item is clicked it runs the cross off movie function
    movieTitle.addEventListener('click', function(evt) {
        crossOffMovie(evt);
    });
    // adds the movie title span element to the movie list element 
    movie.appendChild(movieTitle)

    // creates a delete button element and saves it to a variable called deletebtn
    deleteBtn.addEventListener('click', function(evt) {
        deleteMovie(evt);
    });
    // Sets the text display content of delete button to X
    deleteBtn.textContent = 'X'
    // Sets an event listener so that when delete button is clicked it runs the delete movie code
    deleteBtn.addEventListener('click', deleteMovie)
    // adds delete button to the movie li
    movie.appendChild(deleteBtn)

    // get the ul list tag as a variable called list 
    let list = document.querySelector('ul')
    // adds the movie list element to the movie list
    list.append(movie)

    input.value = "";
}


function deleteMovie(evt) {

    // when the evt (event) is called the target parentNode (the movie li) gets deleted
    evt.target.parentNode.remove()

    message.textContent = 'Movie weleted!'
}


function crossOffMovie(evt) {

    // uses the classlist function and toggles check to cross of the target when the evt is triggered
    evt.target.classList.toggle('checked')

    if (evt.target.classList.contains('checked')) {
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}

