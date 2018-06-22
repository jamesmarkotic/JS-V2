// Part One
const game = {
    'suspects': [
        {
            'name': 'Tim',
            'color': 'Brown'
        },
        {
            'name': 'Jennifer',
            'color': 'Blond'
        }
    ]
}

function logger() {
    for (let i = 0; i < game['suspects'].length; i++) {
        console.log(game['suspects'][i]);
    }
}
// Part Two
const gameloop = function () {
    for (let i = 0; i < game.suspects.length; i++) {
        for (let key in game.suspects[i]) {
            if (game.suspects[i]/*['color']*/[key] === 'Blond') {
                console.log('Oh they guilty')
            }
            else {
                console.log('Maybe not...')
            }
        }
    }
}
// Part Three
var suspects = [
    {
        name: "Rusty",
        color: "orange"
    }, {
        name: "Miss Scarlet",
        color: "red"
    }
]

const colorOne = suspects[0].color;
const colorTwo = suspects[1].color;
const [color1, color2] = [suspects[0].color, suspects[1].color];
const [{ color: colorOne }, { color: colorTwo }] = suspects;