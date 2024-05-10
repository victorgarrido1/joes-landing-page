document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.getElementById("card-container");
  const cardTemplate = document.getElementById("card-template");

  // Sample data for cards
  const cardData = [
    {
      title: "Meet The 1 in 8",
      author: "Where you start stays with you.",
      imagePath: "./assets/images/main/card_people.jpeg",
    },
    {
      title: "Leadership Team",
      author: "We would not be here without our leadership.",
      imagePath: "./assets/images/main/card_leader.jpeg",
    },
    {
      title: "Values in Action",
      author: "Follow the steps we take to be a good community leader.",
      imagePath: "./assets/images/main/card_care.jpeg",
    },
    {
      title: "Investor Relations",
      author: "Find out what drives our business and see our reports. ",
      imagePath: "./assets/images/main/card_investment.jpeg",
    },
  ];

  // Generate and append cards
  cardData.forEach((data) => {
    const cardClone = cardTemplate.cloneNode(true);
    cardClone.classList.remove("hidden");

    // Populate card with dynamic data
    cardClone.querySelector(".card-title a").innerText = data.title;
    cardClone.querySelector(".card-author-name").innerText = data.author;
    cardClone.querySelector(".card-image").src = data.imagePath;

    cardContainer.appendChild(cardClone);
  });
});
