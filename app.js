
const btnEl = document.querySelector("button")
const inputEl = document.querySelector("input")
const categoriesEl = document.querySelector("#categories")
const productDiv = document.querySelector(".product")
const containerEl = document.querySelector(".container")
const gallery = document.querySelector(".gallery");


let currentFilter = "shoe";

btnEl.addEventListener("click", (e) => {
    let imgUrl = document.querySelector("#url").value
    let img = document.createElement("img")
    img.src = imgUrl
    currentFilter = categoriesEl.value;

    productDiv.innerHTML += `
<div class="itembox ${currentFilter}">
<img src= "${imgUrl}" data-item ="${currentFilter}" alt="">
<button onClick = deletebtn(this)>Delete</button>
</div>

`

    inputEl.value = ""
})



function deletebtn(e) {
     e.previousElementSibling.remove()
     e.remove()
}




gallery.addEventListener("click", (e) => {
    console.log(e)

    const itemboxes = document.querySelectorAll(".itembox")

    if (e.target.classList.contains("filter")) {
        //
        gallery.querySelector(".active").classList.remove("active");

        e.target.classList.add("active");

        const filterValue = e.target.getAttribute("data-filter");
        console.log(filterValue)

        itemboxes.forEach(item => {

            if (item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.add("show");

                item.classList.remove("hide");

            }
            else {
                item.classList.add("hide")
            }


        })
    }
})

