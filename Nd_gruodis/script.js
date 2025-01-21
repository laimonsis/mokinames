const shape = document.getElementById('shape');
const button = document.getElementById('changeBtn');

//mygtukui.
button.addEventListener('click', () => {
    // perjungiam.
    if (shape.classList.contains('circle')) {
        shape.classList.remove('circle');
        shape.classList.add('square');
    } else {
        shape.classList.remove('square');
        shape.classList.add('circle');
    }
});