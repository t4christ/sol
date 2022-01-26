const[showName,
    showComment,
     showDate,
      deleteComment, 
       editComment,
        commmentName,
        comment,
         commentSubmit] = [document.querySelector('.show-name'),
          document.querySelector('.show-comment p'),
          document.querySelector('.show-date'),
          document.querySelector('.delete-comment'),
          document.querySelector('.edit-comment'),
          document.querySelector('#text'),
          document.querySelector('#comment'),
          document.querySelector('#submit')]

commentSubmit.addEventListener('click', (e)=>{
   e.preventDefault()
   const currentTime = new Date()
   showDate.textContent = currentTime.toLocaleDateString()
   showName.textContent = commmentName.value
   showComment.textContent = comment.value
   console.log(showDate.textContent)
})
