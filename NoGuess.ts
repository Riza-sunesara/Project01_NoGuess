#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res,2000);
    })
}
let animate=chalkAnimation.rainbow('                      +-+-+-+-+-+ +-+-+-+ +-+-+-+-+-+-+\n                      |g|u|e|s|s| |t|h|e| |n|u|m|b|e|r|\n                      +-+-+-+-+-+ +-+-+-+ +-+-+-+-+-+-+');    
await sleep();
animate.stop();

async function game() {
    const gameguess=Math.floor(Math.random()*10);

    let answer=await inquirer.prompt([
        {
            message:chalk.blueBright ("                           Enter your Guess: "),
            name:"UserGuess",
            type:"number"
        }
    ])
    if(answer.UserGuess===gameguess){
        console.log(chalk.magentaBright('                    WooHoo! you have guessed correctly ')+chalk.yellowBright('(^‿^)'));
        
    }
    else{
        console.log(chalk.magentaBright("                             Oops a wrong guess ")+chalk.red('✖'));
    }
    console.log(chalk.yellow(`                      The number you guessed:${chalk.green(answer.UserGuess)}\n                      The number System guessed:${chalk.green(gameguess)}`));
}

async function repeat(){
    
    for (let i = 5; i >= 1; i--) {
        await game();
        if(i==5){console.log(chalk.red('                                  ♥ ♥ ♥ ♥'));}
        else if(i==4){console.log(chalk.red('                                   ♥ ♥ ♥'));}
        else if(i==3){console.log(chalk.red('                                    ♥ ♥'));}
        else{console.log(chalk.red('                                      ♥'));}
        console.log(chalk.green(`                             You have ${i-1} lives now`));
      
    }
    console.log(chalk.red('               +-+-+-+-+-+|G|A|M|E| |O|V|E|R|+-+-+-+-+-+'));
    
}

await repeat();