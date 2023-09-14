var app = document.querySelector('.type-writer');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Frontend Developer (Angular)')
    .pauseFor(2500)
    .deleteAll()
    // .typeString('Backend Developer (Dotnet)')
    // .pauseFor(2500)
    // .deleteAll()
    // .typeString('Fullstack (Angular, Dotnet)')
    // .pauseFor(2500)
    .start();