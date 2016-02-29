var myLinks = ['https://www.facebook.com/',
    'https://twitter.com/',
    'https://www.linkedin.com/nhome/',
    'https://plus.google.com/',
    'https://instagram.com/'
];

console.log(<a href="https://www.facebook.com/"><li><i class="fa fa-facebook-official"></i></li></a>);

console.log(<a href="https://twitter.com/"><li><i class="fa fa-twitter"></i></li></a>);

console.log(<a href="https://www.linkedin.com/nhome/"><li><i class="fa fa-linkedin"></i></li></a>);

console.log(<a href="https://plus.google.com/"><li><i class="fa fa-google-plus"></i></li></a>);

console.log(<a href="https://instagram.com/"><li><i class="fa fa-instagram"></li></i></a>);

var output = '<ul>';

for (var i = 0; i < myLinks.length; i++)
{
    output += (myLinks[i]);
}
output += '</ul>';
console.log(output);
