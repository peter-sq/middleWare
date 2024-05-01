const generateNum = () => {
    return Math.floor(Math.random() * 100) ;
}

const celciusToFahrehit = (celcius) => {
    return(celcius * 9) / 5 +32;
}

module.exports = {
    generateNum,
    celciusToFahrehit
}
