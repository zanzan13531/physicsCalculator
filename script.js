//topic tags
const topics = {
    "a" : [["Add Two Numbers", "addTwoNumbers.html"]],
    "b" : [["Add Two Numbers", "addTwoNumbers.html"], ["[H+] to pH", "hPlusToPh.html"]],
    "c" : [["Add Two Numbers", "addTwoNumbers.html"], ["[H+] to pH", "hPlusToPh.html"], ["topic_c", "topic_c.html"]]
};

//called whenever a letter is entered into the searchbar
function searchTopics() {

    //takes and handles input
    var input = document.getElementById('searchbar').value

    input = input.toLowerCase();
    input = input.replace(/\s+/g, '');

    //prepares for the loop by resetting the results div
    var resultHolder = document.getElementById('topicList');
    removeAllChildNodes(resultHolder);

    //if the input is one of the options for topic tags
    if (topics.hasOwnProperty(input)) {

        var topicsArray = topics[input];

        //creates a button for each element and appends it to the container
        for (i = 0; i < topicsArray.length; i++) {
            var tempElement = document.createElement("a");
            tempElement.setAttribute('href',"subpages/" + topicsArray[i][1]);
            tempElement.innerHTML = topicsArray[i][0];
            resultHolder.appendChild(tempElement);
        }

    } else {
        //case where no matching tags are found
        var noResult = document.createElement("p");
        noResult.innerHTML = "No matching results";
        resultHolder.appendChild(noResult);
    }

}

//remvoes stuff from an html element
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}