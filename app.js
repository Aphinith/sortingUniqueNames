document.addEventListener("DOMContentLoaded", function() {

var allUsers = ['Nick', 'jake', 'RAY', 'Kate', 'Nick',  'Jeremy', 'nick', 'AMOL', 'rAY', 'VIANNEY', 'Shilpika', 'nick', 'THOMAS', 'tom', 'james', 'JERM', 'amOl', 'kate', 'SCOTT', 'Jenifer', 'bill', 'jenny', 'STEVEN'];

(function defaultSort() {
  //create new variable to hold all usernames
  var mapped = allUsers.map(function(el, i) {
    return { index: i, value: el.toLowerCase() };
  })

  // sorting the mapped array containing the reduced values
  mapped.sort(function(a, b) {
    return +(a.value > b.value) || +(a.value === b.value) - 1;
  });

  // update allUsersSorted variable for the resulting order
  allUsersSorted = mapped.map(function(el){
    return allUsers[el.index];
  });

  var uniqueNames = [];

  for (var i = 0; i < allUsersSorted.length; i++) {
    if (allUsersSorted[i] !== allUsersSorted[i+1]) {
      uniqueNames.push(allUsersSorted[i]);
    }
  }

  console.log('uniqueNames: ', uniqueNames);
  // iterate through newly sorted list and show sorted names on DOM
  for (var i = 0; i < uniqueNames.length; i++) {
    var ul = document.getElementsByClassName("all-usernames")[0];
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(uniqueNames[i]));
    li.setAttribute("class", "username");
    li.setAttribute("data-username", uniqueNames[i]);
    ul.appendChild(li);
  }
})();

});





