
const URL = "http://localhost:3000/users"
    function submitData(name, email) {
      
        // let reqPackage = {}
        // reqPackage.headers = { "Content-Type": "application/json" }
        // reqPackage.method = "POST"
        // reqPackage.body = JSON.stringify()

        fetch(URL, {
            headers: { 
                "Content-Type": "application/json", 
                "Accept": "application/json"
            },
                
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email 
            })
        })
            .then(res => res.json())
            .then(newUser => {
                // console.log(newUser.id)
                document.body.innerHTML = newUser.id 
            })
             
        }
        submitData()
