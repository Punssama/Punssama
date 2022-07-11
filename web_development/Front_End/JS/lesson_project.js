//lay ra lessons roi tu do lay ra coin
//sau do push coinId vao mot mang va lessons 1 mang
var lessons = [
  {
    combo: "CSS,HTML",
    combo_id: 1,
  },
  {
    combo: "Python,JavaScript",
    combo_id: 2,
  },
  {
    combo: "Ruby,PHP",
    combo_id: 3,
  },
];
var prices = [
  {
    coinIds: 1,
    comboCoins: "100vnd",
  },
  {
    coinIds: 2,
    comboCoins: "200vnd",
  },
  {
    coinIds: 3,
    comboCoins: "300vnd",
  },
];

var lessonList = [];
var coinList = [];


function getLessons() {
    return new Promise(function(resolve) {
        resolve(lessons)
    });
};

function getCoins() {
    return new Promise(function(resolve) {
        resolve(prices)
    })
}

getLessons()
    .then(function(id) {
        var result = id.map(function(data) {
            return data.combo_id
        })
        console.log(result);
    })

    .then(function(data) {
        return getCoins().then(function(cIds) {
            var List = cIds.find(function(list) {
                return list.coinIds == data
            })
            
        })
 })

