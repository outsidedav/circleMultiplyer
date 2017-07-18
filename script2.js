function setFace(){
    var user=document.getElementById('user').value
    const endpoint=`https://api.github.com/users/${user}`
    fetch(endpoint)
    .then(
        
        function(data){
            console.log(data.json)
            return data.json()
        })
    .then(
        function(json){
           
            console.log(json)  
            var imageURL=json.avatar_url
            var boxTexture=document.createElement("img")
            var asset=document.createElement("img")
            asset.setAttribute("id", "boxPic")
            asset.setAttribute("src", json.avatar_url)
            
            document.getElementById('person').setAttribute("src", json.avatar_url)
            
        })
    .catch(
        err => {console.log(err)})  
}