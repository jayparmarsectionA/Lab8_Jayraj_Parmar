const apiUrl = 'https://cataas.com/cat';

// Function to fetch any cat image from API
async function fetchCatImage() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const blob = await response.blob();
        return URL.createObjectURL(blob);
    } catch (error) {
        console.error('There was a problem fetching data:', error);
    }
}

// Function to display the cat image
async function displayCatImage() {
    const catImageUrl = await fetchCatImage();

    const catImageElement = document.getElementById('cat-image');
    catImageElement.src = catImageUrl;
}

// Fetch image of next cat when the button is clicked
document.querySelector('.Next-Image').addEventListener('click', () => {
    displayCatImage();
});

// Displays an image of cat when the page loads
displayCatImage();
