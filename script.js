document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('walkCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate a random seed
    const seed = Math.floor(Math.random() * 10000);
    Math.seedrandom(seed);

    let x = canvas.width / 2;
    let y = canvas.height / 2;
    const stepSize = 50; // Increased step size for bigger trails
    const trailSize = 30; // Size of the trail dots

    function randomWalk() {
        const direction = Math.floor(Math.random() * 4);
        switch (direction) {
            case 0:
                x += stepSize;
                break;
            case 1:
                x -= stepSize;
                break;
            case 2:
                y += stepSize;
                break;
            case 3:
                y -= stepSize;
                break;
        }

        if (x < 0) x = canvas.width;
        if (x > canvas.width) x = 0;
        if (y < 0) y = canvas.height;
        if (y > canvas.height) y = 0;

        ctx.fillRect(x, y, trailSize, trailSize); // Drawing a bigger trail dot
    }

    function animate() {
        randomWalk();
        requestAnimationFrame(animate);
    }

    animate();
});

// Simple seedable random number generator
Math.seedrandom = function(seed) {
    const m = 0x80000000;
    const a = 1103515245;
    const c = 12345;

    let state = seed ? seed : Math.floor(Math.random() * (m - 1));

    return function() {
        state = (a * state + c) % m;
        return state / (m - 1);
    };
};

