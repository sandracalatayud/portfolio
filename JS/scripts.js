window.addEventListener('DOMContentLoaded', start);


function start(){
    
    //Variables

    let arrBooks=[];


    //Creating Elements

    //Flying Books imgs

    for (let i = 0; i < 6; i++) {
        let book = document.createElement('img');
        book.src='./Assets/flying_book.png';
        book.className='flying_book';
        book.style.position='absolute';
        document.body.append(book);
        arrBooks.push(book);
    }

    arrBooks[0].style.left="70%";
    arrBooks[0].style.top="6%";
    arrBooks[1].style.left="20%";
    arrBooks[1].style.top="17%";
    arrBooks[2].style.left="85%";
    arrBooks[2].style.top="75%";
    arrBooks[3].style.left="40%";
    arrBooks[3].style.top="58%";
    arrBooks[4].style.left="15%";
    arrBooks[4].style.top="85%";
    arrBooks[5].style.left="65%";
    arrBooks[5].style.top="110%";

}
