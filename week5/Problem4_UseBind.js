let info = {
    name: "Alice",
}

function setTimeoutGreeting() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`);
    }, 1000)
}

let greet = setTimeoutGreeting.bind(info)
greet()