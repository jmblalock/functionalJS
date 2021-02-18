// Functions
// ------------------------------------------------------->
// var nameImprover = function (name, adj) {
//     return 'Col ' + name + ' Mc' + adj + ' pants';
// };

// $('body').hide();

// myArr.forEach(function(val){ console.log(val);});

// $('button').on('click', function(){ 
// console.log('Don\'t press my buttons!');
// });

// ES6: Arrow Functions
// ------------------------------------------------------->
var nameImprover = (name, adj) => {
    return `Col ${name} Mc ${adj} pants`;
};

$('body').hide();

myArr.forEach(val => console.log(val));

$('button').on('click', () => { 
console.log('Don\'t press my buttons!');
});
