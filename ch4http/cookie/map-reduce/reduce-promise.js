const promiseFactory = time => {
    return new Promise ((resolve, reject) => {
        console.log(time);
        setTimeout(resolve, time);
    });
};

[1000, 2000, 3000, 4000].reduce((acc, cur) => {
    return acc.then(() => promiseFactory(cur));
}, Promise.resolve());