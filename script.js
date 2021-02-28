let user = {
    name : "Marjana",
    age : "13",
    height :"152",
    place  :"Lviv"
};
for(let key in user) {
    console.log(user[key])
}

let userJson = JSON.stringify(user);
console.log(userJson);

let user2 = JSON.parse(userJson);
console.log(user2.name);
console.log(user2.age);
console.log(user2.height);
console.log(user2.place);

var friends = new Map();
friends.set("мама", "+380*********");
friends.set("тато", "+380*********");
friends.set("брат", "+380*********");
friends.set("Ірена", "+380*********");
friends.set("Тарас", "+380*********");
friends.set("Ігор", "+380*********");

for(let[key, value] of friends) {
    console.log(key + " friends " + value);
}