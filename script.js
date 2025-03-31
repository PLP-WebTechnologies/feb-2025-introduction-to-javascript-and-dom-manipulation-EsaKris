// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Task 1: Change text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const dynamicText = document.getElementById('dynamic-text');
    
    changeTextBtn.addEventListener('click', function() {
        dynamicText.textContent = "Text changed successfully!";
        dynamicText.classList.add('highlight');
    });
    
    // Task 2: Modify CSS styles via JavaScript
    const changeStyleBtn = document.getElementById('change-style-btn');
    const styleDemo = document.getElementById('style-demo');
    
    changeStyleBtn.addEventListener('click', function() {
        styleDemo.style.backgroundColor = 'lightcoral';
        styleDemo.style.color = 'white';
        styleDemo.style.transform = 'rotate(5deg)';
        styleDemo.textContent = 'Style changed!';
    });
    
    // Task 3: Add/remove element when button is clicked
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const elementContainer = document.getElementById('element-container');
    let newElement = null;
    
    toggleElementBtn.addEventListener('click', function() {
        if (!newElement) {
            // Create new element
            newElement = document.createElement('div');
            newElement.className = 'new-element';
            newElement.textContent = 'New element added dynamically!';
            elementContainer.appendChild(newElement);
            toggleElementBtn.textContent = 'Remove Element';
        } else {
            // Remove existing element
            elementContainer.removeChild(newElement);
            newElement = null;
            toggleElementBtn.textContent = 'Add Element';
        }
    });
    
    // Bonus: Change title color on hover
    const mainTitle = document.getElementById('main-title');
    
    mainTitle.addEventListener('mouseover', function() {
        this.style.color = 'blue';
    });
    
    mainTitle.addEventListener('mouseout', function() {
        this.style.color = '';
    });
});
