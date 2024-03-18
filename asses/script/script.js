let flag = true
let _nav = document.getElementById('_nav')
let h = _nav.clientHeight 
_nav.style.height = 0
function myFunc(s) {  
   if (flag) {        
      _nav.style.height = h + 'px'      
   } else {
      _nav.style.height = 0 + 'px'     
   }
   flag = !flag
   console.log(flag);
}