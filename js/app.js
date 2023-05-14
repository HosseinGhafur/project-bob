let $=document
let userElem=$.querySelector("#userInput")
let passElem=$.querySelector("#passInput")
let lefteye=$.querySelector(".lefteye")
let righteye=$.querySelector(".righteye")


let LeftEyeLeft=110
let LeftEyeTop=75
let LeftEyePaddingLeft=0
let LeftEyePaddingTop=0


let rightEyeLeft=175
let rightEyeTop=75
let rightEyePaddingLeft=0
let rightEyePaddingTop=0




// ================

    //  Password

//=================



let passElemFocus=() => {
    
   let eyesSet=setInterval(() => {

    if(LeftEyeTop===60){
        clearInterval(eyesSet)
    }
    lefteye.style.top=LeftEyeTop + "px"
    lefteye.style.left=LeftEyeLeft + "px"
    righteye.style.top=rightEyeTop +"px"
    righteye.style.left=rightEyeLeft +"px"
  
    LeftEyeTop--
    LeftEyeLeft++
    rightEyeTop--
    rightEyeLeft--



   },10)

}

let passElemBlure=() => {

    let eyesOut=setInterval(() => {

        if(LeftEyeTop===75){

            clearInterval(eyesOut)

        }

        lefteye.style.top=LeftEyeTop + "px"
        lefteye.style.left=LeftEyeLeft + "px"
        righteye.style.top=rightEyeTop +"px"
        righteye.style.left=rightEyeLeft +"px"
    
        
        LeftEyeTop++
        LeftEyeLeft--
        rightEyeTop++
        rightEyeLeft++

    },10)
    
 
}


//================

//    UserName

//================



const userElemFocus=()=> {

    let setEyesUser=setInterval(() => {
        if(LeftEyePaddingTop === 10){
            clearInterval(setEyesUser)
        }

      lefteye.style.paddingTop = LeftEyePaddingTop + "px"
      lefteye.style.left = LeftEyeLeft +"px"

     righteye.style.paddingTop= rightEyePaddingTop + "px"
     righteye.style.left=rightEyeLeft + "px"

      LeftEyePaddingTop++
      LeftEyeLeft--
      rightEyePaddingTop++
      rightEyeLeft--

    },10)

   


}

const userElemBlure=()=> {
    let setEyesUser=setInterval(() => {
        if(LeftEyePaddingTop === 0){
            clearInterval(setEyesUser)
        }

      lefteye.style.paddingTop = LeftEyePaddingTop + "px"
      lefteye.style.left = LeftEyeLeft +"px"

     righteye.style.paddingTop= rightEyePaddingTop + "px"
     righteye.style.left=rightEyeLeft + "px"

      LeftEyePaddingTop--
      LeftEyeLeft++
      rightEyePaddingTop--
      rightEyeLeft++

    },10)


}

const userElemkeypress=(event)=> {
    

    if(LeftEyePaddingLeft>20){
        return false
    }

    if(event.keyCode===8){
        LeftEyePaddingLeft--
        rightEyePaddingLeft--
    }else{
        LeftEyePaddingLeft++
        rightEyePaddingLeft++
    }

    lefteye.style.paddingLeft = LeftEyePaddingLeft + "px"
    righteye.style.paddingLeft= rightEyePaddingLeft + "px"

   

}






userElem.addEventListener("focus",userElemFocus)
userElem.addEventListener("blur",userElemBlure)
userElem.addEventListener("keydown",userElemkeypress)

passElem.addEventListener("focus",passElemFocus)
passElem.addEventListener("blur",passElemBlure)