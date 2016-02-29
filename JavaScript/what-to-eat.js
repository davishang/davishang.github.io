
document.querySelector('body').addEventListener('click', deletePic, false);
var counter = 9;
function deletePic(e) {
    if (counter > 1)
    {
        e.target.style.display='none';
        counter--;

        console.dir(e.target);

    } else{
        for(var i =0; i<image.length;i++){
            if(image[i].style.display!='none'){
                console.log("you have chosen: " + image[i].src);
                var node = document.querySelector('body');
                var element = document.createElement('p');
                var foodtype= image[i].src;
                var foodName = foodtype.substring(33, (foodtype.length-4));
                element.innerHTML = "You have chosen: " + foodName;
                node.appendChild(element);
            }
        }
    }
}


var menu = {
    URL: ['http://planetoftheweb.com/i/food/mexican.jpg',
        'http://planetoftheweb.com/i/food/korean.jpg',
        'http://planetoftheweb.com/i/food/japanese.jpg',
        'http://planetoftheweb.com/i/food/italian.jpg',
        'http://planetoftheweb.com/i/food/indian.jpg',
        'http://planetoftheweb.com/i/food/greek.jpg',
        'http://planetoftheweb.com/i/food/german.jpg',
        'http://planetoftheweb.com/i/food/chinese.jpg',
        'http://planetoftheweb.com/i/food/american.jpg'],
    food: function food(){
        var type = [];
        for (var i=0; i<menu.URL.length; i++){
            var kind = menu.URL[i].replace('http://planetoftheweb.com/i/food/', '');
            kind = kind.replace('.jpg', '');
            type.push(kind);
        }
        return type;
    }
};

var myNode=document.querySelector('body');
var image =[];
for(var j = 0; j<menu.URL.length; j++){
    var Element=document.createElement('img');
    Element.innerHTML = menu.food()[j];
    Element.src = menu.URL[j];
    myNode.appendChild(Element);
    image.push(Element);
    console.log(Element);
}

/*
document.querySelector('body').addEventListener('click', deletePic, false);
var counter = 9;
function deletePic(e) {
    var n = document.querySelectorAll('body img');

    console.log(n.length);
    if (n.length === 2){

        console.log("You have chosen: " + e.target.src);
        var node = document.querySelector('body');
        var element = document.createElement('p');
        var foodtype= e.target.src;
        var foodName = foodtype.substring(33, (foodtype.length-4));
        element.innerHTML = "You have chosen: " + foodName;
        node.appendChild(element);
    }
    e.target.parentNode.removeChild(e.target);
}


var menu = {
    URL: ['http://planetoftheweb.com/i/food/mexican.jpg',
        'http://planetoftheweb.com/i/food/korean.jpg',
        'http://planetoftheweb.com/i/food/japanese.jpg',
        'http://planetoftheweb.com/i/food/italian.jpg',
        'http://planetoftheweb.com/i/food/indian.jpg',
        'http://planetoftheweb.com/i/food/greek.jpg',
        'http://planetoftheweb.com/i/food/german.jpg',
        'http://planetoftheweb.com/i/food/chinese.jpg',
        'http://planetoftheweb.com/i/food/american.jpg'],
    food: function food(){
        var type = [];
        for (var i=0; i<menu.URL.length; i++){
            var kind = menu.URL[i].replace('http://planetoftheweb.com/i/food/', '');
            kind = kind.replace('.jpg', '');
            type.push(kind);
        }
        return type;
    }
};

var myNode=document.querySelector('body');
var image =[];
for(var j = 0; j<menu.URL.length; j++){
    var Element=document.createElement('img');
    Element.innerHTML = menu.food()[j];
    Element.src = menu.URL[j];
    myNode.appendChild(Element);
    image.push(Element);
    //console.log(Element);
}
*/



