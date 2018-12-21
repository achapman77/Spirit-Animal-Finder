// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.



var sortedAnimalArr = require("../data/animals");
// console.log(animalData[0]); 
// console.log(animalData[0].scores.reduce((a, b) => a + b, 0)); 
// console.log(animalData)

module.exports = function (app) {
    app.get("/api/animals", function (req, res) {
        return res.json(sortedAnimalArr);    
    });

    app.post("api/animals", function (req, res) {
        
        var userScore = rec.body.scores.reduce((a, b) => a + b, 0);
        console.log(userScore);
        
        function findMatch() {
            for (var i = 0; i < sortedAnimalArr.length; i++) {
                if (
                    Math.abs(userScore - sortedAnimalArr[i].totalScore) < Math.abs(userScore - sortedAnimalArr[i + 1].totalScore)) {
                    return sortedAnimalArr[i]
                }
            };
        }

        res.json(findMatch());


        sortedAnimalArr.push(req.body);
    });


};