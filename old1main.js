const fs = require("fs");
const readlineSync = require("readline-sync");
const chalk = require("chalk");

const startGame = () => {
  //1ere boucle permet de replay a partir de la fin ou de exit game
  let tab1 = "";
  while (tab1 !== -1) {
    const { randomInt } = require("crypto");

    //pour test des mots rentré par user mettre ligne 11 en off et ligne 12 en on
    //declare ma variable avec le chemin de mon dico passer en fichier txt
    //const words = fs.readFileSync('./dico.txt', 'utf-8').split('\n')
    const words = ["pot", "top"];
    //fait un random de mon fichier txt dico
    const n = randomInt(0, words.length);
    //variable word du random passé en tab
    let word = words[n].split("");

    //ajoute les _ a la place des lettres
    const secret = Array(word.length).fill("_");

    //boucle de l interface avec user
    let ui = true;
    while (ui) {
      //recupere la lettre user et si la lettre est presente avec readline sync
      const input = readlineSync.question(
        chalk.blue(`Bon...tu le rentre ce caractère ? \n ` + secret.join("  "))
      );

      let index = word.indexOf(input);
      //si l indexof n est pas egal a -1 remplace la lettre
      if (index !== -1) {
        secret[word.indexOf(input)] = input.replace();

        // faire une boucle pour verifier si 2 fois la meme lettre (ne fonctionne pas mais presque pas)
        // var indices = [];
        // var idx = word.indexOf(input);
        // while (idx != -1) {
        //   indices.push(idx);
        //     idx = word.indexOf(input, idx + 1);
        //       indices.push(idx).replace()
        //     console.log(indices)
        //     break
        // }

        //si la lettre entré n est pas bonne affiche ceci
      } else {
        const index = readlineSync.question(
          chalk.red(
            `Ta fini de faire mu-muse ? bon, press enter et continue oki...`
          )
        );
      }

      // condition qui passe le tout en string car en tab ca refuse de sortir de la boucle ui...
      if (word.join("") === secret.join("")) {
        console.log(`le mot est: ` + word.join());
        ui = false;
      }
    }
    //pour replay ou exit a la fin du jeu
    const tab = ["replay"];
    tab1 = readlineSync.keyInSelect(
      tab,
      chalk.green(
        `Bravo ,c est la fin de ta life...mon jeu est nul..wtf ce code!`
      )
    );
    switch (tab1) {
      case 0:
        console.log("poufpouf test");
        break;
      case 1:
        break;
    }
  }
};
startGame();
