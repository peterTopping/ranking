function get(req, res, next) {
    res.send([
        {
            name: 'Myrtle',
            ranking: 0,
            games: 0,
        },
        {
            name: 'Sally-Ann',
            ranking: 4,
            games: 2,
        },
        {
            name: 'Nebuchadnezzar',
            ranking: 0,
            games: 0,
        },
        {
            name: 'Devil Incarnate',
            ranking: 0,
            games: 0,
        },
        {
            name: 'Simon',
            ranking: 0,
            games: 0,
        },
    ]);
}

function post(req, res, next) {
    res.send({
        name: 'Rikky boi',
        ranking: 2,
        games: 1,
    });
}

module.exports = { get, post };
