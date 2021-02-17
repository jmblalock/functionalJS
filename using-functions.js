// Vanilla JS ---------------------------------->
// function createSuspectObjects(name) {
//     return {
//         name: name,
//         color: name.split(' ')[1],
//         speak: function () {
//             console.log("my name is ", name);
//         }
//     };
// };

// for (let i in suspects) {
//     console.log(createSuspectObjects(suspects[i]));
// }

// let suspect1 = createSuspectObjects(suspects[0]);
// console.log(suspect1);
// suspect1.speak();

// ES6 function -------------------------------->
function createSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log("My name is", name);
        }
    };
};

const suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
const suspectsList = [];

// for (let i in suspects) {
//     let suspect = createSuspectObjects(suspects[i]);
//     suspectsList.push(suspect);
// }

for (let i in suspects) {
    suspectsList.push(createSuspectObjects(suspects[i]));
}

console.log(suspectsList);
suspectsList[0].speak();
