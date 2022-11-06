const questionElement = document.querySelector('.question')
const answerButtonElement = document.querySelectorAll('.btn')
const nextButton = document.querySelector('.next-btn')
const answerA = document.querySelector('.answerA')
const answerB = document.querySelector('.answerB')
const answerC = document.querySelector('.answerC')
const answerD = document.querySelector('.answerD')
const questions = [
    {
        question: 'Are Java and Javascript the same?',
        a: 'Yes', 
        b: 'No', 
        c: 'A little',
        d: 'A lot',
        correct: 'No',
    },
    {
        question: 'Is Javascript Front-End or Back-End?',
        a: 'Front-End',
        b: 'Back-End',
        c: 'Both',
        d: 'None',
        correct: 'Both',
    },
    {
        question: 'Which of these does not run on Computer Program?',
        a: 'Rocket',
        b: 'Car',
        c: 'Train', 
        d: 'Bicycle', 
        correct: 'Bicycle',
    },
    {
        question: 'Which of these is a Programming Language?',
        a: 'Itch',
        b: 'Scratch',
        c: 'Bite', 
        d: 'Gnaw', 
        correct: 'Scratch',
    },
    {
        question: 'Which of these is NOT a Programming Language?',
        a: 'Banana',
        b: 'Java',
        c: 'Python', 
        d: 'Ruby', 
        correct: 'Banana',
    },
    {
        question: 'In which year was the Python language developed?',
        a: '1989',
        b: '2001',
        c: '2003', 
        d: '1991', 
        correct: '1991',
    },
    {
        question: 'HTML stands for HyperText __________ Language.',
        a: 'Mark-up',
        b: 'Marker',
        c: 'Markup', 
        d: 'Marking', 
        correct: 'Markup',
    },
    {
        question: 'These are the basic units or building blocks of an HTML file.',
        a: 'Tag',
        b: 'HTTP',
        c: 'Value', 
        d: 'Attribute', 
        correct: 'Tag',
    },
    {
        question: '__________ are assigned property to an attribute.',
        a: 'HTTP',
        b: 'Value',
        c: 'Tag', 
        d: 'Attribute', 
        correct: 'Value',
    },
    {
        question: 'In HTML Headings contain _______ levels.',
        a: '2',
        b: '4',
        c: '6', 
        d: '8', 
        correct: '6',
    },
    {
        question: 'Which among the heading levels got the biggest size?',
        a: 'h1',
        b: 'h3',
        c: 'h5', 
        d: 'h6', 
        correct: 'h1',
    },
    {
        question: 'Which tag is used for creating paragraphs?',
        a: 'br',
        b: 'pr',
        c: 'h', 
        d: 'p', 
        correct: 'p',
    },
]

function setNextQuestion(){
    const chooseRandomNumber = Math.floor(Math.random() * questions.length)
    const randomQuestion = questions[chooseRandomNumber]    // Generates random question
    questionElement.innerHTML = randomQuestion.question
    answerA.innerHTML = randomQuestion.a
    answerB.innerHTML = randomQuestion.b
    answerC.innerHTML = randomQuestion.c
    answerD.innerHTML = randomQuestion.d
    answerButtonElement.forEach(answerButton => answerButton.addEventListener('click', function(setNextQuestion){
        if(answerButton.textContent == randomQuestion.correct){
            document.body.style.background = '#1b6000'
            answerButton.style.background = 'lime'
            nextButton.classList.remove('hidden')
        }else{
            document.body.style.background = '#660000'
            answerButton.style.background = 'red'
        }
        nextButton.addEventListener('click', function(){
            answerButton.style.background = '#1e8eff'
        })
    }))
}

nextButton.addEventListener('click', function(){
    setNextQuestion()
    document.body.style.background = '#005c96'    
    nextButton.classList.add('hidden')
})

setNextQuestion()
