// 5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

var animalArr = [];

var Animal = function (name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
    this.totalScore = scores.reduce((a, b) => a + b, 0);
};

// Animal.prototype.totalScore = function () {
//     // return this.scores.reduce((a, b) => a + b, 0);
//     return this.scores.reduce((a + b), 0);
// };

// Animal.prototype.addAnimal = function (name, photo, scores) {
//     this.animalArr.push(new Animal(name, photo, scores));
// };


var squirrel = new Animal(
    "Squirrel",
    "https://www.nationalgeographic.com/content/dam/animals/2018/09/comedy-wildlife-awards-photos/comedy-wildlife-awards-squirel-stop.ngsversion.1537203605960.adapt.1900.1.jpg",
    [5, 1, 4, 4, 5, 1, 2, 4, 4, 1]
)
// console.log(squirrel.totalScore)
var hamster = new Animal(
    "Hamster",
    "https://static.boredpanda.com/blog/wp-content/uploads/2015/12/funny-animal-pictures-comedy-wildlife-photography-awards-fb1.png",
    [4, 2, 2, 4, 4, 1, 3, 5, 1, 1]
)

var hippo = new Animal(
    "Hippo",
    "https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Other%20Explore%20Photos/R-Z/Wacky%20Weekend/Funny%20Animal%20Faces/ww-funny-animal-faces-hippopotamus.adapt.945.1.jpg",
    [4, 2, 2, 5, 5, 5, 3, 5, 1, 5]
)

var lemur = new Animal(
    "Lemur",
    "https://hips.hearstapps.com/rbk.h-cdn.co/assets/17/35/1504106954-monkey.jpg",
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
)

var sloth = new Animal(
    "Sloth",
    "https://www.askideas.com/wp-content/uploads/2016/11/Funny-Animal-Face.jpg",
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
)

var bear = new Animal(
    "Bear",
    "https://i.ytimg.com/vi/fXqIORN1A5M/hqdefault.jpg",
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
)

var prarieDog = new Animal(
    "Prarie Dog",
    "https://blogs-images.forbes.com/ceciliarodriguez/files/2018/06/00000015_p.jpg",
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
)

var ostrich = new Animal(
    "Ostrich",
    "https://vignette.wikia.nocookie.net/warcommander/images/7/70/Very-Funny-Animal-Faces-13.jpg/revision/latest?cb=20130905114009",
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
)

var donkey = new Animal(
    "Donkey",
    "https://i.dailymail.co.uk/i/pix/2017/02/16/11/3D48C65400000578-0-image-a-42_1487242982507.jpg",
    [4, 2, 2, 3, 5, 4, 3, 5, 1, 5]
)

var llama = new Animal(
    "Llama",
    "http://uberhumor.com/wp-content/uploads/2011/05/these_funny_animals_694_640_04.jpg",
    [2, 2, 2, 3, 5, 4, 3, 4, 2, 5]
)

var cow = new Animal(
    "Long-Horned Cow",
    "https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Other%20Explore%20Photos/R-Z/Wacky%20Weekend/Funny%20Animal%20Faces/ww-funny-animal-faces-cow.adapt.945.1.jpg",
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
)

animalArr.push(squirrel, hamster, hippo, lemur, sloth, bear, prarieDog, ostrich, donkey, llama, cow );


// console.log(animalArr[0].totalScore)

var sortedAnimalArr = animalArr.sort(function (a, b) {
    return a.totalScore - b.totalScore
});

// var userScore =30

// function findMatch() {
//     for (var i = 0; i < sortedAnimalArr.length; i++) {
//         if (
//             Math.abs(userScore - sortedAnimalArr[i].totalScore) < Math.abs(userScore - sortedAnimalArr[i + 1].totalScore)) {
//             return sortedAnimalArr[i]
//         }
//     };
// }

// console.log(findMatch());

// console.log(sortedAnimalArr)
// module.exports = animalData

module.exports = sortedAnimalArr;

