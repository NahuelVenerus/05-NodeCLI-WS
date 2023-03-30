const fs = require('fs')
const request = require('request')

module.exports = {

    pwd: function (print) { print(process.argv[1]) },

    date: function (print) { print(Date()) },

    ls: function (print) {
        fs.readdir('.', function (err, files) {
            if (err) throw err;
            files.forEach(function (file) {
                print(file.toString() + "\n");
            })
            print("prompt > ");
        });
    },

    echo: function (print, str) {
        print(str)
    },

    cat: function (print, path) {
        print(fs.readFileSync(path, (err, data) => {
            if (err) throw err
            print(data)
        }))
    },

    head: function (path, cantLines) {
        let redFile = fs.readFileSync(path)
        let lines = 5
        if (cantLines) lines = Number(cantLines)
        for (let i = 0; i < lines; i++) {
            let fileLines = redFile.toString().split('\n')
            console.log(`${fileLines[i]} \n`)
        }
    },

    tail: function (path, cantLines) {
        let redFile = fs.readFileSync(path)
        let lines = 5
        if (cantLines) lines = Number(cantLines)
        let fileLines = redFile.toString().split('\n')
        for (let i = fileLines.length - 1; i >= fileLines.length - lines; i--) {
            console.log(`${fileLines[i]} \n`)
        }
    },

    sort: function (path) {
        let unsortedWords = fs.readFileSync(path, (err) => {
            if (err) throw err
        })
        let wordsArray = unsortedWords.toString().split(' ').sort()
        let sortedWords = ""
        for (const str of wordsArray) {
            sortedWords += ' ' + str
        }
        console.log(sortedWords)
    },

    wc: function (path) {
        let lector = fs.readFileSync(path, (err) => {
            if (err) throw err
        }).toString()
        console.log(`Lineas: ${lector.split('\n').length}`)
        console.log(`Palabras: ${lector.split(' ').length}`)
        console.log(`Caracteres: ${lector.length}`)
    },

    uniq: function (path) {
        let lineas = fs.readFileSync(path, (err) => {
            if (err) throw err
        }).toString().split('\n')
        let filteredLines = ""
        for (let i = 1; i <= lineas.length; i++) {
            if (lineas[i] != lineas[i - 1]) filteredLines += `${lineas[i - 1]}\n`
        }
        console.log(filteredLines.slice(0, filteredLines.length - 1))
    }
}