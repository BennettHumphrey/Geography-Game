const randomNumber = Math.floor(Math.random() * 0);

const questionObjects = {
    0: {
        question: 'This is the question number 00',
        answer: 'A',
        arrayTips0: ['Tip 0', 'Tip 1', 'Tip 2', 'Tip 3', 'Tip 4']
    },

    1: {
        question: 'This is the question number 01',
        answer: 'AB',
        arrayTips1: ['Tip 0', 'Tip 1', 'Tip 2', 'Tip 3', 'Tip 4']
    },

    2: {
        question: 'This is the question number 02',
        answer: 'ABC',
        arrayTips2: ['Tip 0', 'Tip 1', 'Tip 2', 'Tip 3', 'Tip 4']
    },

    3: {
        question: 'This is the question number 03',
        answer: 'ABCD',
        arrayTips3: ['Tip 0', 'Tip 1', 'Tip 2', 'Tip 3', 'Tip 4']
    },

    4: {
        question: 'This is the question number 04',
        answer: 'ABCDE',
        arrayTips4: ['Tip 0', 'Tip 1', 'Tip 2', 'Tip 3', 'Tip 4']
    },
};

console.log(questionObjects[randomNumber].question)

if (randomNumber === 0) {
    let counter = 0;

    function userInput(input) {
        console.log(`The user says: ${input}`);

        if (input === 'ANSWER') {
            console.log('You got it!!')
            counter = 0;
            console.log(questionObjects[randomNumber].question)
       
        } else if (counter >= 4) {
            console.log('Ops! No more chances')
            return userInput === 'ANSWER'
       
        } else {
            const randomArray = Math.floor(Math.random() * 5);
            let compare = []
            compare.push(randomArray)

            
            console.log('Oh, no... Maybe this one could help:')
            console.log(questionObjects[0].arrayTips0[randomArray])
        }
        
        counter++;
        console.log(`${counter} of 5 chances`)
    }
};

userInput('one'.toUpperCase())
userInput('two'.toUpperCase())
userInput('three'.toUpperCase())
userInput('four'.toUpperCase())
userInput('answer'.toUpperCase())
userInput('last'.toUpperCase())