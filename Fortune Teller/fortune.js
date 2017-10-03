var kids = [2, 3, 4, 5];
var partner = ['Danzig', 'Dennis Reynolds', 'Art Vandelay', 'Dracula'];
var home = ['Arkansas', 'D.C.', 'New York', 'Florida'];
var job = ['Dentist', 'Bean Counter', 'Poison Tester', 'Grave Digger'];


//fortune function, user clicks button, randomizes fortune
function tellFortune() {
    
  var randomKids = kids[Math.floor(Math.random() * kids.length)];
  var randomPartner = partner[Math.floor(Math.random() * kids.length)];
  var randomHome = home[Math.floor(Math.random() * kids.length)];
  var randomJob = job[Math.floor(Math.random() * kids.length)];  

  alert('You will be a ' + randomJob + ' in ' + randomHome + ' married to ' + randomPartner + ' with ' + randomKids + ' kids.');
}