//your code here
// Get all the draggable div elements
const draggableDivs = document.querySelectorAll('.image');

// Initialize the variables for tracking the selected and dragged elements
let selectedDiv = null;
let draggingDiv = null;

// Add event listeners for drag start, drag enter, and drag end
draggableDivs.forEach(div => {
  div.addEventListener('dragstart', dragStart);
  div.addEventListener('dragenter', dragEnter);
  div.addEventListener('dragend', dragEnd);
});

// Drag start event handler
function dragStart(event) {
  // Store the selected div
  selectedDiv = this;
  // Set the data being dragged as text
  event.dataTransfer.setData('text/plain', event.target.id);
  // Add the 'dragging' class to the selected div
  selectedDiv.classList.add('dragging');
}

// Drag enter event handler
function dragEnter(event) {
  // Check if the dragged element is different from the selected div
  if (this !== selectedDiv) {
    // Swap the background images
    swapBackgroundImages(selectedDiv, this);
  }
}

// Drag end event handler
function dragEnd() {
  // Remove the 'dragging' class from the selected div
  selectedDiv.classList.remove('dragging');
}

// Swap the background images between two div elements
function swapBackgroundImages(div1, div2) {
  const tempImage = div1.style.backgroundImage;
  div1.style.backgroundImage = div2.style.backgroundImage;
  div2.style.backgroundImage = tempImage;
}
