function onComplete() {
    console.log(`Timer of ${this.duration} ms finished`);
}

function timer (duration, callback) {
    this.duration = duration;

    setTimeout(function () {
        callback()
    }, duration);
}

timer(1000, onComplete)