const core = require("@actions/core");

const firstGreeting = core.getInput("first-greeting")
const secondGreeeting = core.getInput("second-greeting")
const thirdGreeeting = core.getInput("third-greeting")

​console​.​log​(​`Hello ​${​firstGreeting​}​`​)​;​
​console​.​log​(​`Hello ​${​secondGreeting​}​`​)​;​
​if​ ​(​thirdGreeting​)​ ​{​
    ​console​.​log​(​`Hello ​${​thirdGreeting​}​`​)​;​
​}