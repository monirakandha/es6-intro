document.getElementById("addBorder").addEventListener('click', function(){
    const friendContainer = document.getElementById("friend_container");
    friendContainer.style.border = '3px solid yellow';
    friendContainer.style.padding = '20px';
});


function addBackgroundColor(){
    const friendBg = document.getElementsByClassName('firend');
    for(const friends of friendBg){
        friends.style.backgroundColor = 'green';
        friends.style.color = 'white';
        friends.style.padding = '10px';
        friends.style.margin = '10px';
    }
};

document.getElementById('addFriend').addEventListener('click' , function(){
const addFriend = document.getElementById('friend_container');
const firendList = document.createElement('div');
firendList.classList.add('firend');
firendList.innerHTML = `
<h3 class="friend-name">New Friend Added</h3>
<p>Lorem ipsum dolor sit amet.</p>
`
addFriend.appendChild(firendList);

});


