const fs = require('fs')
const readlineSync = require('readline-sync')
const chalk = require('chalk')


const startGame = () => {
    const { randomInt } = require('crypto')

    //pour test des mots rentré par user mettre ligne 11 en off et ligne 12 en on
    //declare ma variable avec le chemin de mon dico passer en fichier txt
    //const words = fs.readFileSync('./dico.txt', 'utf-8').split('\n')
   const words = ['pot', 'top']
    //fait un random de mon fichier txt dico
   const n = randomInt(0, words.length)
    //variable word du random passé en tab
   let word = words[n].split('')

   //ajoute les _ a la place des lettres
   const secret = Array(word.length).fill('_')
  
  while (true) { 
    //recupere le mot utilisateur et si la lettre est presente avec readline sync
    const input = readlineSync.question(chalk.blue(`Bon... tu le rentre ce caractère ? \n `  +  secret.join('  ')))

    let index = word.indexOf(input)

    //si l indexof n est pas egal a -1 remplace la lettre
    if(index !== -1) {
      secret[word.indexOf(input)] = input.replace()

    // faire une boucle pour verifier si 2 fois la meme lettre

    //si la lettre entré n est pas bonne affiche ceci
    } else {
      const index = readlineSync.question(chalk.blue(`ta fini de faire mumuse ? bon, press enter et continue oki...     `))
    } 

    // condition qui passe le tout en string car en tab refuse de sortir de la boucle...
    if (word.join('') === secret.join('')) {
      console.log(word.join())
        console.log(chalk.green('Bravo ,c est la fin de ta life...tu peu etre content..ou pas!'))
      process.exit(1)
    }
  }
}
startGame()




















