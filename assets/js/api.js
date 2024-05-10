async function fetchFood(foodId) {
    const url = 'https://burgers-hub.p.rapidapi.com/burgers';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3065ca2efamsh5511818a494e23fp1cbb2cjsna2ae6a53946f',
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
        container.className = 'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
        container.style.padding = '1rem'; // Add padding of 1 rem to all sides


        singleFood.forEach(food => {
            const card = document.createElement('div');
            card.className = 'shadow-xl col-span-1 max-w-xs bg-gray-100 hover:bg-gray-200';

            const description = document.createElement('h1');
            description.className = 'text-lg font-semibold'; // Adjust font size and weight
            description.textContent = food.desc;

            const imageContainer = document.createElement('div');
            imageContainer.className = 'flex justify-center'; // Center the image horizontally

            const image = document.createElement('img');
            image.className = 'image-food-res rounded border dark:border-neutral-700';
            image.style.maxWidth = '100%'; // Ensure image doesn't overflow card
            image.src = food.images[0].sm;
            image.alt = 'Food Image';

            imageContainer.appendChild(image);

            card.appendChild(description);
            card.appendChild(imageContainer); // Append image container instead of image directly

            container.appendChild(card);
        });

        document.body.appendChild(container);
    } catch (error) {
        console.error(error);
    }
}
// Example usage:
displayFood(123);