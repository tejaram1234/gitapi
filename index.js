const searchInput = document.getElementById("searchBox")
const profileContainer = document.getElementById("profileContainer")

async function func(){
    const SearchValue = searchInput.value
    const  Response = await fetch(`https://api.github.com/search/users?q=${SearchValue}`)
    const data = await Response.json()
    console.log(data.items);
    profileContainer.innerHTML +=""
    data.items.map((ele)=>{
        const username = ele.login
        const avatar = ele.avatar_url
        const profile = ele.html_url 
        console.log(username ,avatar,  profile,profileContainer);
        profileContainer.innerHTML += `
        <div class="innerdiv">
        <img src = ${avatar} />
        <div>
        <h3>${username}</h3>
        <a href=${profile}>view profile</a>
        </div>
        </div>
        `
    })
}
async function func1(){
    
        profileContainer.innerHTML =""
}