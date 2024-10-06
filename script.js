var screen=document.querySelector('.screen input')
screen.value=0
var buttons=document.querySelectorAll('.action button')
console.log(buttons)
buttons.forEach(btn=>{
    btn.addEventListener("click",function(){
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

function sinclick(){
    screen.value=Math.sin(screen.value)
}

function cosclick(){
    screen.value=Math.cos(screen.value)
}

function tanclick(){
    screen.value=Math.tan(screen.value)
}

function delclick(){
    screen.value=screen.value.slice(0,-1)
}

function clearScreen(){
    screen.value='0'
}

function cal(){
    let result=eval(screen.value)
    screen.value=result
}

function simple(){
    location.href='/index.html'
}
function science(){
    location.href='/sciCal.html'
}
function home(){
    location.href='/home.html'
}