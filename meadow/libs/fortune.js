const allfortunes = ["Carpe Diem",
    "One day at a time",
    "Read to clear your mind",
    "Walk to get revitalized",
    "Play sport",
    "Love unconditionally"
]

exports.getFortune = () => {

    const idx = Math.floor(Math.random()*allfortunes.length);
    return allfortunes[idx]
};

