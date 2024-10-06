var screen=document.querySelector('.container .screen input')
screen.value='0'
var buttons=document.querySelectorAll('.container .action button')
buttons.forEach(btn=>{
    btn.addEventListener('click',function(){
        let attr=btn.getAttribute('data-value')
        console.log(btn.innerHTML,attr)
        if(attr!=null){
            if(screen.value=='0'){
                screen.value=attr;
            }else{
                screen.value=screen.value+attr;
            }
        }
    })
})
function del(){
    screen.value=screen.value.slice(0,-1)
}
function allClear(){
    screen.value='0'
}
function pi(){
    screen.value=3.14159265359;
}
function e(){
    screen.value=2.71828182846;
}
function exp(){
    screen.value=Math.exp(screen.value)
}
function sqrt(){
    screen.value=Math.sqrt(screen.value,2)
}
function pow(){
    screen.value=Math.pow(screen.value,2)
}
function powTwo(){
    screen.value=Math.pow(screen.value,2)
}
function powThree(){
    screen.value=Math.pow(screen.value,3)
}
function fact(){
    var i,num,f=1;
    num=screen.value;
    for(i=1;i<=num;i++){
        f=f*i;
    }
    i=i-1;
    screen.value=f;
}
function logClick(){
    screen.value=Math.log(screen.value)
}
function rnd(){
    screen.value=Math.random(screen.value)
}
function cal(){
    let result=eval(screen.value)
    screen.value=result
}
function home(){
    location.href='/home.html';
}