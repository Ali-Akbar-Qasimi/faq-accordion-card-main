let questions = document.querySelectorAll('.question-container')
console.log(questions);

questions.forEach(question => {
    question.addEventListener('click', ()=>{
        for(let i = 0 ; i < questions.length; i++){
            questions[i].classList.remove('active')
        }
        if(question.firstElementChild.checked === true){
            question.classList.toggle('active')
        }
    });
})

// change the images 

let womenImage = document.querySelector('.images img')
window.addEventListener('resize',changeImages)
changeImages()
function changeImages(){
    if(window.innerWidth > 786){
        womenImage.src = './images/illustration-woman-online-mobile.svg'
    }else{
        womenImage.src = './images/illustration-woman-online-mobile.svg'
    }
}