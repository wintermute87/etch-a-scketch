

function hover_grid_element (cellItem,typeSelector)
{
    console.log(`hover over grid type = ${typeSelector} `);
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    if(cellItem.classList.contains('on-hover-rainbow') == false && typeSelector == 2)
    {
        cellItem.classList.remove('on-hover-black');
        cellItem.style.backgroundColor = "#" + randomColor;
    }    

    if(typeSelector == 1)
    {
        cellItem.style.backgroundColor = "";
        cellItem.classList.remove('on-hover-rainbow');
        cellItem.classList.add('on-hover-black');
    }
        
    else if(typeSelector == 0)
    {
        cellItem.style.backgroundColor = "";
        cellItem.classList.remove('on-hover-rainbow');
        cellItem.classList.remove('on-hover-black');
    }   

}





let typeSelector = 1; // type of pen: 0:eraser 1:black 2:red

const gridContainer = document.getElementById('container-grid');
let numberOfItems = 18;
var rootCSS = document.querySelector(':root');

rootCSS.style.setProperty("--nr-columns-rows", numberOfItems);
rootCSS.style.setProperty("--cell-column-width", (600/numberOfItems).toString() + "px");



//create the grid

for (let i = 1; i <= numberOfItems; i++) 
{
    for (let i = 1; i <= numberOfItems; i++) 
    {
        gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
}



// cell grid items
let cellGridItems = document.querySelectorAll('.grid-item');


//eraser button
const eraserButton = document.querySelector('.eraser');
eraserButton.addEventListener('click', function(e) {

    typeSelector = 0; // set pen to eraser type

});

//black pen button
const blackPenButton = document.querySelector('.black');
blackPenButton.addEventListener('click', function(e) {

    typeSelector = 1; // set pen to eraser type

});

//rainbow pen button
const rainbowPenButton = document.querySelector('.rainbow');
rainbowPenButton.addEventListener('click', function(e) {

    typeSelector = 2; // set pen to eraser type

});


//clear button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function(e) {

    cellGridItems.forEach(element => {
        hover_grid_element(element,0); //set pen to eraser type
    });

});

//select size button
const selectSizeButton = document.querySelector('.select-size');
selectSizeButton.addEventListener('click', function(e) {

    var inputValue = window.prompt('Please enter an integer:');
    if (inputValue !== null && !isNaN(inputValue) && inputValue.trim() !== '') 
    {
        var parsedInput = parseInt(inputValue, 10);
        console.log('Input value:', parsedInput);

        //delete the original grid
        var elementsToRemove = document.getElementsByClassName('grid-item');
        while (elementsToRemove.length > 0) {
          elementsToRemove[0].parentNode.removeChild(elementsToRemove[0]);
        }


        numberOfItems = parsedInput;


        rootCSS.style.setProperty("--nr-columns-rows", numberOfItems);
        rootCSS.style.setProperty("--cell-column-width", (600/numberOfItems).toString() + "px");

        //create the grid

        for (let i = 1; i <= numberOfItems; i++) 
        {
            for (let i = 1; i <= numberOfItems; i++) 
            {
                gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');
                gridContainer.appendChild(gridItem);
            }   
        }

        cellGridItems = document.querySelectorAll('.grid-item');
        getCellItems();


      // Do something with the parsedInput value
    }

});





function getCellItems()
{
    cellGridItems.forEach( (cellItem) => {
 
        cellItem.addEventListener('mouseover', function(e)  {
            var hoveredElement = e.target;
            console.log('Hovered element:', hoveredElement);
            hover_grid_element (hoveredElement,typeSelector);     //cellItem.classList.add('on-hover');
        });
    
    });
}


getCellItems();


/*


cellGridItems.forEach( (cellItem) => {
 
    cellItem.addEventListener('mouseover', function(e)  {
        var hoveredElement = e.target;
        console.log('Hovered element:', hoveredElement);
        hover_grid_element (hoveredElement,typeSelector);     //cellItem.classList.add('on-hover');
    });

});

*/