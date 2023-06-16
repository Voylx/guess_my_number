const Config = {
    MAXROUND: 10,
    NUMLENGTH: 4
}
const empArr = Array.apply(null, Array(Config.MAXROUND)).map(function () { });


const initState = {
    count: 0,
    // myNumber : genNumber(Config.NUMLENGTH),
    myNumber: ['1', '2', '3', '4'],
    guessNum: [...empArr],
    trueNum: [...empArr],
    truePosition: [...empArr],
    gameWin: false,
    gameOver: false,
}

Config.initState = JSON.parse(JSON.stringify(initState))


function genNumber(length) {
    const characters = '123456789';
    const result = [];
    //นับจำนวนตัวอักษร
    const charactersLength = characters.length;
    //วนลูปตามจำนวนตัวอักษร
    while (true) {
        //เอาตัวอักษรตามตำแหน่งที่ random มาได้เก็บไว้ในตัวแปร result
        result.push(
            characters.charAt(Math.floor(Math.random() * charactersLength))
        );
        const finalresult = [...new Set(result)];
        if (finalresult.length === length) return finalresult;
    }
}

export { Config }