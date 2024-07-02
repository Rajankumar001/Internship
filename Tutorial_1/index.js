function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('change-gradient').addEventListener('click', function() {
    // Get the element with the gradient background
    let gradientBox = document.getElementById('gradient-box');

    // Generate random colors
    let color1 = getRandomColor();
    let color2 = getRandomColor();

    
    // Define new gradient with random colors
    let newGradient = `linear-gradient(to right, ${color1}, ${color2})`;
    // let text_content_one=document.getElementById('text_content_one');
    // text_content.textContent=color1;
    // let text_content_two=document.getElementById('text_content_two');
    // text_content_two.textContent=color2;
    
    // Change the background
    gradientBox.style.background = newGradient;
});
