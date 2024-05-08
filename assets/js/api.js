async function fetchFood(foodId) {
    const url = 'https://burgers-hub.p.rapidapi.com/burgers';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5e5638caefmshfdcbb727f8d6e9dp1b8bbejsn5d89dde46ade',
            'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

const displayFood = async (foodId) => {
    try {
        const singleFood = await fetchFood(foodId);
        console.log(singleFood);

        const container = document.createElement("div");
        container.id = 'food-container';
        container.className = 'mb-4 text-base text-neutral-600 dark:text-neutral-200';

        singleFood.forEach(food => {
            const card = document.createElement('div');
            card.className = 'mb-4 text-base text-neutral-600 dark:text-neutral-200';

            const description = document.createElement('h1');
            description.textContent = food.desc;

            const image = document.createElement('img');
            image.className = 'image-food-res';
            image.src = food.images[0].sm;
            image.alt = 'Food Image';

            card.appendChild(description);
            card.appendChild(image);

            container.appendChild(card);
        });

        document.body.appendChild(container);
    } catch (error) {
        console.error(error);
    }
}
// Example usage:
displayFood(123); // Pass the foodId as an argument