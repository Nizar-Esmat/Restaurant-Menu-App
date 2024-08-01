let alldata = [];

async function fetchAllData(query) {
    try {
        let Api = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
        if (Api.ok) {
            let response = await Api.json();
            alldata = alldata.concat(response.recipes);
            display();
        } else {
            console.log("Failed to fetch data");
        }
    } catch (error) {
        console.error(error);
    }
}

function display() {
    let container = '';
    for (let i = 0; i < alldata.length; i++) {
        container += `
                    <div class="col-md-3 g-3">
                        <div class="card w-100 h-100">
                            <img src="${alldata[i].image_url}" alt="Recipe Image" class="w-100 h-75">
                            <div class="card-body">
                                <h5 class="card_title">${alldata[i].title}</h5>
                            </div>
                        </div>
                    </div>
                `;
    }
    document.getElementById("demo").innerHTML = container;
}

const categories = ['pizza', 'pasta', 'salad', 'carrot', 'onion'];
categories.forEach(category => fetchAllData(category));



async function fetchData(query) {
    try {
        let Api = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
        if (Api.ok) {
            let response = await Api.json();
            alldata = response.recipes;
            display();
        } else {
            console.log("Failed to fetch data");
        }
    } catch (error) {
        console.error(error);
    }
}



let all_a = document.querySelectorAll('li a');
for (let i = 0; i < all_a.length; i++) {
    all_a[i].addEventListener('click', function (e) {
        e.preventDefault();

        fetchData(e.currentTarget.innerText);
    });
}