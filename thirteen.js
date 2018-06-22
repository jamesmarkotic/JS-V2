// Data to analyze
const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: true },
            { 'dining room': true },
            { 'billiard room': false },
            { library: true }
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            { kitchen: true },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': true },
            { library: false }
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: true },
            { 'dining room': false },
            { 'billiard room': true },
            { library: false }
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            { kitchen: true },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': true },
            { 'billiard room': false },
            { library: false }
        ]
    }
];

const notInRoom = suspect => {

    const emptyRooms = _.reduce(suspect.rooms, (room, memo) => {
        if (room === false) memo.push(room)
        return memo;
    }, [])
    return emptyRooms;
};

notInRooms = _.map(newDevelopment, notInRoom)

_.reduce(newDevelopment, notInRoom, [])