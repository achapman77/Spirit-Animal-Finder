// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.



var sortedAnimalArr = require("../data/animals");
// console.log(animalData[0]); 
// console.log(animalData[0].scores.reduce((a, b) => a + b, 0)); 
// console.log(animalData)

module.exports = function (app) {
    app.get("/api/animals", function (req, res) {
        return res.json(sortedAnimalArr.sort(function (a, b) {
            return a.totalScore - b.totalScore
        }));    
    });

    app.post("/api/animals", function (req, res) {
        
        var userScore = req.body.scores.reduce((a, b) => parseInt(a) + parseInt(b), 0);
        console.log(req.body)
        console.log("userscore:", userScore);
        
        // function findMatch() {
        //     for (var i = 0; i < sortedAnimalArr.length -1; i++) {
        //         if (Math.abs(userScore - sortedAnimalArr[i].totalScore) < Math.abs(userScore - sortedAnimalArr[i + 1].totalScore)) {
        //             return sortedAnimalArr[i]
        //         } 
        //     };
        // }

        // https://stackoverflow.com/questions/8584902/get-closest-number-out-of-array
        function findMatch() {
            var mid;
            var lo = 0;
            var hi = sortedAnimalArr.length - 1;
            while (hi - lo > 1) {
                mid = Math.floor((lo + hi) / 2);
                if (sortedAnimalArr[mid].totalScore < userScore) {
                    lo = mid;
                } else {
                    hi = mid;
                }
            }
            if (userScore - sortedAnimalArr[lo].totalScore <= sortedAnimalArr[hi].totalScore - userScore) {
                return sortedAnimalArr[lo];
            }
            return sortedAnimalArr[hi];
        }
        
        
        // function findMatch(userScore, sortedAnimalArr) {
        //     sortedAnimalArr.forEach(function (animal) {
        //         var match = animal.totalScore.reduce(function (prev, curr) {
        //             return (Math.abs(curr - userScore) < Math.abs(prev - userScore) ? curr : prev);
        //         });
        //     return match;
        //     });
        // };
        

        res.json(findMatch());

        var newAnimal = {
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body.scores.map(Number),
            totalScore: userScore
        }

        sortedAnimalArr.push(newAnimal);
    });


};