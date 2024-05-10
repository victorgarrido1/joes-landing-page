// Define the userData array
const userData = [
    {
        name: "Tibby Totts",
        handle: "@tibbytotts",
        imageSrc: "https://i.postimg.cc/ZqxSqp3f/a-a-little-robot.jpg",
        stars: ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-regular fa-star"],
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "Allen Smith",
        handle: "@allensmith",
        imageSrc: "https://i.postimg.cc/3xgXdxwS/a-thinking-man.jpg",
        stars: ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-regular fa-star"],
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "Bella Baker",
        handle: "@bellabaker",
        imageSrc: "https://i.postimg.cc/XJhQ6NxV/a-happy-girl.jpg",
        stars: ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-regular fa-star"],
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "Jim Shawn",
        handle: "@jimshawn",
        imageSrc: "https://i.postimg.cc/c1RnS4FX/curious-person.jpg",
        stars: ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-regular fa-star"],
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
];

// Function to create stars HTML
function createStars(starClasses) {
    const stars = starClasses.map(starClass => `<i class="${starClass}"></i>`).join('');
    return stars;
}

// Function to populate content for each card
function populateContent(userData) {
    userData.forEach((user, index) => {
        // Create card HTML dynamically
        const cardHTML = `
        <div class="testimonial-box w-full md:w-1/2 lg:w-1/3 xl:w-1/4 shadow-md bg-white m-4 cursor-pointer">
        <div class="profile flex items-center">
            <!-- Content goes here -->
        </div>
        <div class="profile-img overflow-hidden rounded-full mr-4 mt-2">
            <a href='#' target="_blank" rel="noopener noreferrer" id="profileLink${index + 1}">
                <img id="profileImage${index + 1}" src="${user.imageSrc}" alt="" class="w-full h-full object-cover rounded-full">
            </a>
        </div>
        <div class="reviews text-yellow-300 " id="reviewStars${index + 1}">
            ${createStars(user.stars)}
        </div>
        <div class="name-user flex flex-col mb-2" id="userName${index + 1}">
            <strong class="text-gray-900">${user.name}</strong>
            <span class="text-gray-500 text-xs">${user.handle}</span>
        </div>
        <div class="user-comment text-center" id="userComment${index + 1}">
            <p class="text-gray-700 text-base" style="font-size: 0.9rem;">${user.comment}</p>
        </div>
    </div>
        `;

        // Append card HTML to testimonial-box-container
        document.querySelector('.testimonial-box-container').innerHTML += cardHTML;
    });
}

// Call the populateContent function with the userData array
populateContent(userData);