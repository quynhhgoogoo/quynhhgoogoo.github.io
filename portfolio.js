var portfolio_items = [
    {
        image: "img/portfolio/01-thumbnail.jpg",
        title: "Course Scheduling",
        description: "A software that enables VAMK students to determinate and search their curriculum."
    },
    {
        image: "img/portfolio/02-thumbnail.jpg",
        title: "Acoustic Sensor",
        description: "This project will simply turn a raspberry Pi 3 into an acoustic sensor."
    },
    {
        image: "img/portfolio/03-thumbnail.jpg",
        title: "Vietnamista",
        description: "A logo designed for Vietnamista, a company which sells Vietnamese traditional tea in Finland."
    },
    {
        image: "img/portfolio/04-thumbnail.jpg",
        title: "Veronica",
        description: "Veronica is the logo brand guidelines designed for a Vietnamese clothes brand selling suits."
    },
    {
        image: "img/portfolio/05-thumbnail.jpg",
        title: "Flippy Bird",
        description: "A new and weird version of Flappy Bird. Flippy is much easier than Flappy, but it does not mean that you can win it easilly. This game should be played on computer for the best experience."
    },
    {
        image: "img/portfolio/06-thumbnail.jpg",
        title: "Hobbies",
        description: "Photographs and Art Pieces taken in free time."
    },
];

function writePortfolioItems() {
    var html = "";
    portfolio_items.forEach(function(item, index) {
        html += `
            <div class="col-md-4 col-sm-6 portfolio-item">
                <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${index+1}">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="${item.image}" alt="${item.title}">
                </a>
                <div class="portfolio-caption">
                    <h4>${item.title}</h4>
                    <p class="text-muted">${item.description} </p>
                </div>
            </div>
        `
    });
    $("#portfolio-items").html(html);
}

writePortfolioItems();
