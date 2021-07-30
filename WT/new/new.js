var form=document.getElementById('form')
var parentDiv=document.getElementById('result')
form.addEventListener('submit',function(event)
{
    event.preventDefault()
    var name=document.getElementById("image").files[0].name 
    console.log(name)
    var reader=new FileReader()
    reader.addEventListener('load',function(){
       if(this.result && localStorage)
       {
           window.localStorage.setItem(name,this.result)
           alert("image stored in localstorage")
           parentDiv.innerHTML=''
           showImages()
       }
})
reader.readAsDataURL(document.getElementById('image').files[0])
function showImages()
{
    for(let i=0;i<window.localStorage.length;i++)
        {
            let res=window.localStorage.getItem(window.localStorage.key(i))
            var image=new Image()
            image.src=res;
            parentDiv.appendChild(image)
        }
        
    }
})
function remove()
{
    window.localStorage.clear()
    parentDiv.innerHTML = ''
    showImages()
}
showImages()

