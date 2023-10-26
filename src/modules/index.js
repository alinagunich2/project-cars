
let headerMenu = document.getElementById('header-menu')
let headerContent = document.getElementById('header-content')

let iconMenu = document.getElementById('icon-menu')
let iconCross = document.getElementById('icon-cross')

let body = document.getElementsByTagName('body')[0]
body.style.overflow = 'visible'

 window.addEventListener('resize',(e)=>{
    if(window.innerWidth <= 1102 && window.innerWidth > 761){
                headerContent.style.display = 'flex'
                headerMenu.style.display = 'none'
                iconCross.style.display = 'none'
                iconMenu.style.display = 'block'
            }else if(window.innerWidth <= 761){
                headerContent.style.display = 'none'
                headerMenu.style.display = 'none'
                iconCross.style.display = 'none'
                iconMenu.style.display = 'block'
            }else if(window.innerWidth > 1102){
                headerMenu.style.display = 'block'
                headerContent.style.display = 'flex'
                iconCross.style.display = 'none'
                iconMenu.style.display = 'none'
            }
 })

iconMenu.onclick = function(){
   
                headerMenu.style.display = 'block'
                iconMenu.style.display = 'none'
                iconCross.style.display = 'block'
                body.style.overflow = 'hidden'
                if(window.innerWidth<= 761){
                    headerContent.style.display = 'block'
                    body.style.overflow = 'hidden'
                }
      
}
iconCross.onclick = function(){
    headerMenu.style.display = 'none'
    iconMenu.style.display = 'block'
    iconCross.style.display = 'none'
    body.style.overflow = 'visible'
    if(window.innerWidth<= 761){
        headerContent.style.display = 'none'
        body.style.overflow = 'visible'
    }
}











let nex = document.getElementById('nex')
let back = document.getElementById('back')

let itemCard =Array.from(document.getElementsByClassName('item-card')) 


itemCard.forEach((itm)=>itm.style.display = 'none')

function track(){
if(window.innerWidth<=700){
    for(let i=1;i<itemCard.length;i++){
        itemCard[0].style.display = 'flex'
        itemCard[i].style.display = 'none'
    }
    
    let indexItemCard= 0
    back.onclick = function(){
        if(indexItemCard<=0){
            back.setAttribute('disabled', '')
            return
        }
        itemCard.forEach((itm,index)=>indexItemCard===index?itm.style.display = 'flex':itm.style.display = 'none')
    
       
        if(indexItemCard<itemCard.length-1){
            nex.removeAttribute('disabled')
        }

        itemCard[indexItemCard].style.animation = 'cssload-loading 0.2s 1'
        function noneTimes(){
            itemCard[indexItemCard].style.display = 'none'    
            indexItemCard-=1
            itemCard[indexItemCard].style.display = 'flex'
            itemCard[indexItemCard].style.animation =  'show 0.2s 1'
        }
        setTimeout(noneTimes,150)
    }

    nex.onclick = function(){
        
        back.removeAttribute('disabled')
        if(indexItemCard>=itemCard.length-1){
            nex.setAttribute('disabled', '')
            console.log(1)
            return
        }
        
        itemCard.forEach((itm,index)=>indexItemCard===index?itm.style.display = 'flex':itm.style.display = 'none')

    
        itemCard[indexItemCard].style.animation = 'cssload-loading 0.2s 1'
        function noneTimes(){
            itemCard[indexItemCard].style.display = 'none'
            indexItemCard+=1
            itemCard[indexItemCard].style.display = 'flex'
            itemCard[indexItemCard].style.animation =  'show 0.2s 1'
        }
        setTimeout(noneTimes,150)
    }

}else{
    itemCard[0].style.display = 'flex'
    itemCard[1].style.display = 'flex'
    
    let indexItemCard= 0
    
    back.onclick = function(){
        if(indexItemCard<=0){
            back.setAttribute('disabled', '')
            return
        }

    itemCard.forEach((itm,index)=>indexItemCard===index||indexItemCard+1===index?itm.style.display = 'flex':itm.style.display = 'none')
        if(indexItemCard<itemCard.length-1){
            nex.removeAttribute('disabled')
        }
    itemCard[indexItemCard].style.animation = 'cssload-loading 0.2s 1'
    itemCard[indexItemCard+1].style.animation = 'cssload-loading 0.2s 1'
        function noneTimes(){
            itemCard[indexItemCard].style.display = 'none'
            itemCard[indexItemCard+1].style.display = 'none'
            indexItemCard-=1
            itemCard[indexItemCard].style.display = 'flex'
            itemCard[indexItemCard-1].style.display = 'flex'
            itemCard[indexItemCard].style.animation =  'show 0.2s 1'
            itemCard[indexItemCard-1].style.animation =  'show 0.2s 1'
            indexItemCard-=1
        }
        setTimeout(noneTimes,150)  
    }
    nex.onclick = function(){
        back.removeAttribute('disabled')
        if(indexItemCard>=itemCard.length-2){
            nex.setAttribute('disabled', '')
            console.log(1)
            return
        }
        itemCard.forEach((itm,index)=>indexItemCard===index||indexItemCard+1===index?itm.style.display = 'flex':itm.style.display = 'none')

    
        itemCard[indexItemCard].style.animation = 'cssload-loading 0.2s 1'
        itemCard[indexItemCard+1].style.animation = 'cssload-loading 0.2s 1'
            function noneTimes(){
                itemCard[indexItemCard].style.display = 'none'
                itemCard[indexItemCard+1].style.display = 'none'
                indexItemCard+=2
                    if(indexItemCard===itemCard.length-1){
                        indexItemCard-=1
                    }
                itemCard[indexItemCard].style.display = 'flex'
                itemCard[indexItemCard+1].style.display = 'flex'
                itemCard[indexItemCard].style.animation =  'show 0.2s 1'
                itemCard[indexItemCard+1].style.animation =  'show 0.2s 1'
            }
        setTimeout(noneTimes,150)
    }
}
}

track()

window.addEventListener(`resize`, event => {
    track()
  });
