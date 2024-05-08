async function fetchFood(foodId) {
    const url = 'https://burgers-hub.p.rapidapi.com/burgers';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f29262b8f5msh4aa1a447652ef66p1d42c9jsn2d18d513287a',
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
        console.log(singleFood); // Log the singleFood object to inspect its structure
        
        const rootNode = document.createElement('div');
        rootNode.innerHTML = `
            <div id='food-detail-container'>
                <div class="container mx-auto">
                    <div class="flex size-48">
                        <h1>${singleFood[0].desc}</h1> <!-- Make sure to update this line -->
                        <div class="flex"
                        <img>${singleFood[0].images[0].sm}
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(rootNode);
    } catch (error) {
        console.error(error);
    }
};

// Example usage:
displayFood(123); // Pass the foodId as an argument