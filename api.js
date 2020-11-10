fetch("https://api.github.com/users/saikasagar")
    .then(response => response.json())
    .then(function(data) {
        console.log(data)
        document.getElementById('profileImage').src = data['avatar_url']
        document.getElementById('fullName').textContent = data['name']
        document.getElementById('bio').textContent = data['bio']

        let followersCount = data['followers']
        let followersInfo = `I have been followed by ${followersCount} people.` 
        document.getElementById('followersInformation').textContent = followersInfo
        document.getElementById('githubLink').href = data['html_url']
        
        document.getElementById('mainContainer').hidden = false
        document.getElementById('loading').hidden = true
    })
