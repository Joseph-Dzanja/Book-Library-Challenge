
const myLibrary = [];
const add_book = document.getElementById("add_btn");
const cancel_add_book = document.getElementById("cancel_btn");
const new_book = document.getElementById("newBook_btn");
const viewform = document.querySelector(".form_container");
const section = document.querySelector(".section");
const bookLib = document.querySelector(".book_library");
add_book.addEventListener("click", validateForm);
cancel_add_book.addEventListener("click", cancelAddBook);
new_book.addEventListener("click", showform);
const ShadowSlave = new book("Shadow slave", "Guiltythree", 1500, "Yes");
const Narnia = new book("Narnia", "C.S Lewis", 2000, "Yes");


function validateForm() {
    // Check if the form is valid
    if (document.getElementById('myForm').checkValidity()) {
        addBook();
        document.getElementById('myForm').reset();
      // Form is valid, perform further actions here
    } else {
      // Form is invalid, show an error message or perform other actions
      alert('Please fill out all fields.');
    }
  }

function book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function(){
        return (title + " by " + author + ", " + pages + " pages, " + haveRead);
    }
}

function cancelAddBook(){
    viewform.style.cssText = "display: none;";
    section.style.cssText = "display: block;";
}


function addBook(){
    let title = document.getElementById("book_title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let reading_status = document.querySelector('input[name="haveRead"]:checked').value;
    let novel = new book(title,author,pages,reading_status);
    myLibrary.push(novel);
    viewform.style.cssText = "display: none;";
    section.style.cssText = "display: block;";
    displayBooks();
}


function showform(){
    section.style.cssText = "display: none;";
    viewform.style.cssText = "display: flex;";
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



function displayBooks(){

    removeAllChildNodes(bookLib);
    

    for(let i = 0; i<myLibrary.length;i++){
        let bookName = myLibrary[i].title;
        let author = myLibrary[i].author;
        let pages = myLibrary[i].pages;
        let reading_status = myLibrary[i].haveRead;
        let card = document.createElement('div');
        let title = document.createElement('h2');
        title.textContent = bookName;
        let authorbook = document.createElement('p');
        authorbook.textContent = "Author : " + author;
        let pageNum = document.createElement('p');
        pageNum.textContent = "Pages : " + pages;
        let read = document.createElement('p');
        read.textContent = "Have read : " + reading_status;
        card.classList.add("card");
        card.appendChild(title);
        card.appendChild(authorbook);
        card.appendChild(pageNum);
        card.appendChild(read);
        bookLib.appendChild(card);
        var del = document.createElement('button');
        del.textContent = "Delete";
        del.addEventListener("click", removecard)
        card.appendChild(del);
        function removecard(){
            card.style.cssText = "display:none";
            myLibrary.splice(i,1);
            displayBooks();
        }
  
    }

}




myLibrary.push(ShadowSlave);
myLibrary.push(Narnia);

displayBooks();



























