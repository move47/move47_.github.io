var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.display = "initial";
  } else {
    document.getElementById("navbar").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
} 



/*===========skills========*/
const skillsContent=document.getElementsByClassName('skills__content'),
      skillsHeader=document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0;i<skillsContent.length;i++)
    {
        skillsContent[i].className='skills__content skills__close'
    }

    if(itemClass=='skills__content skills__close')
    {
        this.parentNode.className='skills__content skills__open'
    }

}

skillsHeader.forEach((ele) =>{
    ele.addEventListener('click',toggleSkills)
})
$(function() {
  $("#iFrameID").on('load', function () {
      $("#iFrameID").fadeIn("fast");
  });
}); 

/*===========qualification tabs========*/


// var arr = [];
// function data(){
//   var fs = require('fs');
//   var files = fs.readdirSync('./_posts/');
  
//   i=0
//   files.forEach(function (file) {
//       arr[i]={name:file}
//       console.log(data[i].name); 
//       i++
//   });
// }
// function init(){
//     data
//     var cont = document.getElementById('bloglist');

//     // create ul element and set the attributes.
//     var ul = document.createElement('ul');
//     ul.setAttribute('style', 'padding: 0; margin: 0;');
//     ul.setAttribute('id', 'theList');

//     for (i = 0; i <= arr.length - 1; i++) {
//         var li = document.createElement('li');     // create li element.
//         li.innerHTML = arr[i].name;      // assigning text to li using array value.
//         li.setAttribute('style', 'display: block;');    // remove the bullets.

//         ul.appendChild(li);     // append li to ul.
//     }

//     cont.appendChild(ul); 
// }
// var fs= require('./posts.json')
// var totalMessages = Object.keys(fs.files).length;

//     for ( var i = 0; i < totalMessages; i++)
//     {
//         //console.log( fs.files[i].name );
//         var cont = document.getElementById('bloglist');
//         //arr=[{name:'rahul'},{name:'rahul'},{name:'rahul'}]
//         // create ul element and set the attributes.
//         var ul = document.createElement('ul');
//         ul.setAttribute('style', 'padding: 0; margin: 0;');
//         ul.setAttribute('id', 'theList');

//         for (i = 0; i <= arr.length - 1; i++) {
//             var li = document.createElement('li');     // create li element.
//             li.innerHTML = fs.files[i].name;      // assigning text to li using array value.
//             li.setAttribute('style', 'display: block;');    // remove the bullets.

//             ul.appendChild(li);     // append li to ul.
//         }

//         cont.appendChild(ul);
//     }
    // var modalWrap = null;
    // function showModal(id,title ){
    //   if (modalWrap !== null) {
    //     modalWrap.remove();
    //   }

    //   modalWrap = document.createElement('div');
    //   modalWrap.innerHTML = `

    //   <div class="modal fade" tabindex="-1">
    //   <div class="modal-dialog">
    //     <div class="modal-content">
    //       <div class="modal-header bg-light">
    //         <h5 class="modal-title">${title}</h5>
    //         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //       </div>
    //       <div class="modal-body">
    //       <zero-md src="./_posts/${id}" no-shadow=""></zero-md>
    //       </div>
    //     </div>
    //   </div>
    // </div>
          
    //   `;

    //   //modalWrap.querySelector('.modal-success-btn').onclick = callback;

    //   document.body.append(modalWrap);

    //   var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
    //   modal.show();
    // }