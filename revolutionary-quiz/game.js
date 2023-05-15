const question = document.querySelector('#question');
const colony = document.querySelector('#colony');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const colonies = Array.from(document.querySelectorAll('.colony-text'));
const progressText = document.querySelector('#progressText');
const progressBarFull = document.querySelector('#progressBarFull');
let currentQuestion = {}
let acceptingAnswers = true
let questionCounter = 0
let availableQuestions = []

var hammersIndex = document.getElementById('hammers')
var chunksIndex = document.getElementById('chunks')
var wafflesIndex = document.getElementById('waffles')
var nuggetsIndex = document.getElementById('nuggets')
var yetisIndex = document.getElementById('yetis')

let questions = [
    {
        question: 'Should we increase taxes on the elite Waffles?',
        choice1: 'Yes',
        choice2: 'No',
        answer: 1,
        yesHammers: Math.floor(Math.random() * 7) + 3,
        noHammers: Math.floor(Math.random() * -2) + -5,
        yesChunks: Math.floor(Math.random() * 10) + 5,
        noChunks: Math.floor(Math.random() * -3) + -8,
        yesWaffles: Math.floor(Math.random() * -18) + -23,
        noWaffles: Math.floor(Math.random() * 18) + 13,
        yesNuggets: Math.floor(Math.random() * 12) + 7,
        noNuggets: Math.floor(Math.random() * -8) + -13,
        yesYetis: Math.floor(Math.random() * 4) + 1,
        noYetis: Math.floor(Math.random() * 0) + -2,
    },
    {
        question: 'The Hammers do not want gun laws. Should we allow citizens to have guns?',
        choice1: 'Yes',
        choice2: 'No',
        answer: 1,
        yesHammers: Math.floor(Math.random() * 20) + 15,
        noHammers: Math.floor(Math.random() * -13) + -20,
        yesChunks: Math.floor(Math.random() * -2) + -8,
        noChunks: Math.floor(Math.random() * 7) + 3,
        yesWaffles: Math.floor(Math.random() * -13) + -20,
        noWaffles: Math.floor(Math.random() * 10) + 7,
        yesNuggets: Math.floor(Math.random() * 9) + 5,
        noNuggets: Math.floor(Math.random() * -1) + -7,
        yesYetis: Math.floor(Math.random() * -19) + -26,
        noYetis: Math.floor(Math.random() * 18) + 10,
    },
    {
        question: 'The Chunks claim the Hammers have wrongfully taken a portion of their land on their west border. Should we give it to the Chunks?',
        choice1: 'Yes',
        choice2: 'No',
        answer: 1,
        yesHammers: Math.floor(Math.random() * -28) + -35,
        noHammers: Math.floor(Math.random() * 12) + 8,
        yesChunks: Math.floor(Math.random() * 30) + 25,
        noChunks: Math.floor(Math.random() * 10) + 1,
        yesWaffles: Math.floor(Math.random() * 5) + 0,
        noWaffles: Math.floor(Math.random() * 0) + 1,
        yesNuggets: Math.floor(Math.random() * 0) + 1,
        noNuggets: Math.floor(Math.random() * 0) + 1,
        yesYetis: Math.floor(Math.random() * 0) + -3,
        noYetis: Math.floor(Math.random() * 0) + 1,
    },
    {
        question: 'Should we give the Hammers funding to build more ports?',
        choice1: 'Yes',
        choice2: 'No',
        answer: 1,
        yesHammers: Math.floor(Math.random() * 19) + 13,
        noHammers: Math.floor(Math.random() * -10) + -16,
        yesChunks: Math.floor(Math.random() * -12) + -22,
        noChunks: Math.floor(Math.random() * 10) + 7,
        yesWaffles: Math.floor(Math.random() * -22) + -26,
        noWaffles: Math.floor(Math.random() * 17) + 11,
        yesNuggets: Math.floor(Math.random() * -1) + -4,
        noNuggets: Math.floor(Math.random() * 0) + 1,
        yesYetis: Math.floor(Math.random() * -10) + -14,
        noYetis: Math.floor(Math.random() * 6) + 2,
    },
    {
        question: 'Should we allow the Waffles to claim designation as the offical foreign relations port of the country?',
        choice1: 'Yes',
        choice2: 'No',
        answer: 1,
        yesHammers: Math.floor(Math.random() * -15) + -18,
        noHammers: Math.floor(Math.random() * 9) + 3,
        yesChunks: Math.floor(Math.random() * 10) + 6,
        noChunks: Math.floor(Math.random() * -13) + -20,
        yesWaffles: Math.floor(Math.random() * 28) + 23,
        noWaffles: Math.floor(Math.random() * -16) + -19,
        yesNuggets: Math.floor(Math.random() * -7) + -14,
        noNuggets: Math.floor(Math.random() * 8) + 4,
        yesYetis: Math.floor(Math.random() * -3) + -10,
        noYetis: Math.floor(Math.random() * 11) + 6,
    },
    {
        question: 'The Yetis do not want to contribute to a national army. Should we let them not?',
        choice1: 'Yes',
        choice2: 'No',
        answer: 1,
        yesHammers: Math.floor(Math.random() * -18) + -25,
        noHammers: Math.floor(Math.random() * 13) + 7,
        yesChunks: Math.floor(Math.random() * -16) + -20,
        noChunks: Math.floor(Math.random() * 13) + 7,
        yesWaffles: Math.floor(Math.random() * -2) + -5,
        noWaffles: Math.floor(Math.random() * 6) + 1,
        yesNuggets: Math.floor(Math.random() * 22) + 17,
        noNuggets: Math.floor(Math.random() * -19) + -15,
        yesYetis: Math.floor(Math.random() * 32) + 26,
        noYetis: Math.floor(Math.random() * -27) + -33,
    },
    {
        question: 'Should we give the Nuggets back ownership of the gold mines alongside the Nuggets/Waffles border?',
        choice1: 'Yes',
        choice2: 'No',
        answer: 1,
        yesHammers: Math.floor(Math.random() * 1) + 0,
        noHammers: Math.floor(Math.random() * 1) + 0,
        yesChunks: Math.floor(Math.random() * 1) + 0,
        noChunks: Math.floor(Math.random() * 1) + 0,
        yesWaffles: Math.floor(Math.random() * -24) + -29,
        noWaffles: Math.floor(Math.random() * 15) + 11,
        yesNuggets: Math.floor(Math.random() * 35) + 30,
        noNuggets: Math.floor(Math.random() * -18) + -22,
        yesYetis: Math.floor(Math.random() * 25) + 20,
        noYetis: Math.floor(Math.random() * -14) + -20,
    },
    {
        question: 'The Nuggets and Yetis want equal colonial representation in the government as their more populous counterparts. Should we be in favor of this?',
        choice1: 'Yes',
        choice2: 'No',
        answer: 1,
        yesHammers: Math.floor(Math.random() * -16) + -26,
        noHammers: Math.floor(Math.random() * 12) + 8,
        yesChunks: Math.floor(Math.random() * 3) + -2,
        noChunks: Math.floor(Math.random() * 5) + -5,
        yesWaffles: Math.floor(Math.random() * -20) + -32,
        noWaffles: Math.floor(Math.random() * 10) + 7,
        yesNuggets: Math.floor(Math.random() * 30) + 22,
        noNuggets: Math.floor(Math.random() * -22) + -27,
        yesYetis: Math.floor(Math.random() * 32) + 25,
        noYetis: Math.floor(Math.random() * -30) + -37,
    },
    {
        question: 'Should the Nuggets be required to deal with all colonies on a more even basis than before?',
        choice1: 'Yes',
        choice2: 'No',
        answer: 1,
        yesHammers: Math.floor(Math.random() * 7) + 4,
        noHammers: Math.floor(Math.random() * -9) + -13,
        yesChunks: Math.floor(Math.random() * 17) + 13,
        noChunks: Math.floor(Math.random() * -16) + -22,
        yesWaffles: Math.floor(Math.random() * 1) + 0,
        noWaffles: Math.floor(Math.random() * 1) + 0,
        yesNuggets: Math.floor(Math.random() * -22) + -29,
        noNuggets: Math.floor(Math.random() * 15) + 8,
        yesYetis: Math.floor(Math.random() * -25) + -28,
        noYetis: Math.floor(Math.random() * 13) + 10,
    },
    {
        question: 'Should the rural outskirts of the Nuggets territory be placed under the control of neighboring colonies?',
        choice1: 'Yes',
        choice2: 'No',
        answer: 1,
        yesHammers: Math.floor(Math.random() * 0) + 1,
        noHammers: Math.floor(Math.random() * 0) + 1,
        yesChunks: Math.floor(Math.random() * 23) + 20,
        noChunks: Math.floor(Math.random() * -14) + -19,
        yesWaffles: Math.floor(Math.random() * 17) + 13,
        noWaffles: Math.floor(Math.random() * -12) + -15,
        yesNuggets: Math.floor(Math.random() * -33) + -37,
        noNuggets: Math.floor(Math.random() * 33) + 28,
        yesYetis: Math.floor(Math.random() * -17) + -25,
        noYetis: Math.floor(Math.random() * 24) + 16,
    },
    {
        question: 'Should we enforce higher tariffs on imported goods?',
        choice1: 'Yes',
        choice2: 'No',
        answer: 1,
        yesHammers: Math.floor(Math.random() * 14) + 9,
        noHammers: Math.floor(Math.random() * -9) + -13,
        yesChunks: Math.floor(Math.random() * 13) + 8,
        noChunks: Math.floor(Math.random() * -12) + -16,
        yesWaffles: Math.floor(Math.random() * -27) + -31,
        noWaffles: Math.floor(Math.random() * 24) + 22,
        yesNuggets: Math.floor(Math.random() * 15) + 18,
        noNuggets: Math.floor(Math.random() * -12) + -18,
        yesYetis: Math.floor(Math.random() * 8) + 5,
        noYetis: Math.floor(Math.random() * 10) + 1,
    },
    {
        question: 'The Waffles are eying expanding their southern border into Yeti territory to build another port city. Should we allow this?',
        choice1: 'Yes',
        choice2: 'No',
        answer: 1,
        yesHammers: Math.floor(Math.random() * -3) + -5,
        noHammers: Math.floor(Math.random() * 2) + 7,
        yesChunks: Math.floor(Math.random() * -5) + -8,
        noChunks: Math.floor(Math.random() * 8) + 7,
        yesWaffles: Math.floor(Math.random() * 28) + 22,
        noWaffles: Math.floor(Math.random() * -16) + -24,
        yesNuggets: Math.floor(Math.random() * -20) + -24,
        noNuggets: Math.floor(Math.random() * 13) + 11,
        yesYetis: Math.floor(Math.random() * -27) + -29,
        noYetis: Math.floor(Math.random() * 11) + 10,
    },
    {
        question: 'The Waffles want a national budget for foreign aid. Should we allocate resources towards this?',
        choice1: 'Yes',
        choice2: 'No',
        answer: 1,
        yesHammers: Math.floor(Math.random() * -16) + -20,
        noHammers: Math.floor(Math.random() * 5) + 7,
        yesChunks: Math.floor(Math.random() * 3) + 0,
        noChunks: Math.floor(Math.random() * 0) + -3,
        yesWaffles: Math.floor(Math.random() * 18) + 14,
        noWaffles: Math.floor(Math.random() * -5) + -12,
        yesNuggets: Math.floor(Math.random() * -7) + -11,
        noNuggets: Math.floor(Math.random() * 12) + 8,
        yesYetis: Math.floor(Math.random() * 5) + 1,
        noYetis: Math.floor(Math.random() * 0) + 0,
    },
    {
        question: 'Should we invest more funding into building a strong military, as suggested by the Hammers?',
        choice1: 'Yes',
        choice2: 'No',
        answer: 1,
        yesHammers: Math.floor(Math.random() * 32) + 24,
        noHammers: Math.floor(Math.random() * -24) + -32,
        yesChunks: Math.floor(Math.random() * 15) + 10,
        noChunks: Math.floor(Math.random() * -5) + -8,
        yesWaffles: Math.floor(Math.random() * -4) + -6,
        noWaffles: Math.floor(Math.random() * 3) + 2,
        yesNuggets: Math.floor(Math.random() * 5) + 2,
        noNuggets: Math.floor(Math.random() * -2) + -5,
        yesYetis: Math.floor(Math.random() * -18) + -23,
        noYetis: Math.floor(Math.random() * 20) + 14,
    },

]

const MAX_QUESTIONS = 14

startGame = () => {
    questionCounter = 0
    hammers = 75
    chunks = 75
    waffles = 75
    nuggets = 75
    yetis = 75
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = 'Decision ' + questionCounter + ' of ' + MAX_QUESTIONS
    progressBarFull.style.width = (questionCounter/MAX_QUESTIONS) * 100 + '%'

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    hammersIndex.innerHTML=hammers + '%'
    chunksIndex.innerHTML=chunks + '%'
    wafflesIndex.innerHTML=waffles + '%'
    nuggetsIndex.innerHTML=nuggets + '%'
    yetisIndex.innerHTML=yetis + '%'

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct'){
            hammers += currentQuestion['yesHammers']
            chunks += currentQuestion['yesChunks']
            waffles += currentQuestion['yesWaffles']
            nuggets += currentQuestion['yesNuggets']
            yetis += currentQuestion['yesYetis']
        }
        else{
            hammers += currentQuestion['noHammers']
            chunks += currentQuestion['noChunks']
            waffles += currentQuestion['noWaffles']
            nuggets += currentQuestion['noNuggets']
            yetis += currentQuestion['noYetis']
        }

        if(hammers >= 100){
            hammers = 100
        }
        if(chunks >= 100){
            chunks = 100
        }
        if(waffles >= 100){
            waffles = 100
        }
        if(nuggets >= 100){
            nuggets = 100
        }
        if(yetis >= 100){
            yetis = 100
        }
        if(hammers <= 0){
            hammers = 0
        }
        if(chunks <= 0){
            chunks = 0
        }
        if(waffles <= 0){
            waffles = 0
        }
        if(nuggets <= 0){
            nuggets = 0
        }
        if(yetis <= 0){
            yetis = 0
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

startGame()