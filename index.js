let x=document.getElementById('left');
let y=document.getElementById('right');
let z=document.querySelector('.submit');
z.addEventListener('click',submit);
function submit(){
      x.style.left="-400px";
      y.style.left="25px";
      if(document.getElementById('rating-1').checked){
            document.querySelector('.res').textContent="1";
      }else if(document.getElementById('rating-2').checked){
            document.querySelector('.res').textContent="2";
      }else if(document.getElementById('rating-3').checked){
            document.querySelector('.res').textContent="3";
      }else if(document.getElementById('rating-4').checked){
            document.querySelector('.res').textContent="4";
      }else if(document.getElementById('rating-5').checked){
            document.querySelector('.res').textContent="5";
      }
}
