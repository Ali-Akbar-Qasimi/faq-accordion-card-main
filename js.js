let questions = document.querySelectorAll('.question-container')
console.log(questions);

questions.forEach(question => {
    question.addEventListener('click', function(e){
        console.log(question.firstElementChild)
        if(question.firstElementChild.checked === true){
            question.classList.toggle('active')
        }
        
    });
})