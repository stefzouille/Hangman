const fs = require('fs')
const readlineSync = require('readline-sync')
const chalk = require('chalk')


// plantage de mon pc(re install w10) du coup c est le code de Bsk on avais commencé ensemble plus ou moins et il a quasiment fait tout seul
//je n ai que copier sont code, ce n est pas de moi...!!!


const startGame = () => {
const { randomInt } = require('crypto')

//const words = ['coucou', 'toto', 'tata', 'coco']
const words = ['coupe', 'tito', 'tati', 'coca']

const n = randomInt(0, words.length)
//console.log(`random words: ${words[n]}`)

  //const wordStr = words[n]
  let word = words[n].split('')
  //let word = wordStr.split('')
  //console.log(word)
  //word = ["s", "a", "l", "u", "t"]

  const secret = Array(word.length).fill(' _ ')
  let secretOut = secret
  //console.log(secret)

  let count = 0
  while (count < secret.length + 2) {
    const input = readlineSync.question(chalk.blue(`Veuillez entrer un caractères: \n   ${secret}    `))
    console.log(chalk.yellow('\nIl vous reste', (chalk.red(secret.length + 2 - count)), 'tentative(s)'))
    //for (let index = 0; index < word.length; ++index) {
    //console.log('index: ', index)
    switch (input) {
      case 'a':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'b':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'c':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'd':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'e':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'f':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'g':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'h':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'i':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'j':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'k':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'l':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'm':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'n':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'o':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'p':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'q':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'r':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 's':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 't':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'u':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'v':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'w':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'x':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'y':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      case 'z':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(secret[count])
        break

      default:
        // Instructions à exécuter lorsqu'aucune des valeurs
        break

    }
    count++
    //console.log(secretOut)
  }

}

startGame()