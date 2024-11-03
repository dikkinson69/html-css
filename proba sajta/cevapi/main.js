const view1 = document.querySelectorAll("#view1");
let selectedItems = [];

view1.forEach(section => {
    const header = section.querySelector("header");
    const headerText = header.querySelector(".header__h1");

    headerText.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        event.target.textContent = myText === "Dikijevi Cevapi" ? "MMM CEVAP" : "Dikijevi Cevapi";
        event.target.style.color = myText === "Dikijevi Cevapi" ? "red" : "";
    });

    const table = section.querySelector("table");
    const properties = table.querySelectorAll(".menu__item:not(.menu__header)");

    properties.forEach(property => {
        // Check if the text content of the cell contains a dollar sign ($) and add click event listener
        if (!property.textContent.includes(".")) {
            property.addEventListener("mouseover", () => {
                property.classList.add("yellow");
            });
            property.addEventListener("mouseout", () => {
                property.classList.remove("yellow");
            });

            property.addEventListener("click", () => {
                // Toggle selection style
                property.classList.toggle("selected");

                // Determine if the item is soft or crunchy
                const itemType = property.parentNode.classList.contains("menu__cr") ? "Sarajevski" : "Banjalucki";

                // Get the price from the adjacent cell (assuming price is in the next cell)
                const priceCell = property.nextElementSibling;
                const price = parseFloat(priceCell.textContent.replace("$", ""));

                // Add or remove the item from the selectedItems array
                if (property.classList.contains("selected")) {
                    selectedItems.push({ name: property.textContent.trim(), itemType: itemType, price: price });
                    // Change background color to orange when clicked
                    property.style.backgroundColor = "orange";
                } else {
                    const index = selectedItems.findIndex(item => item.name === property.textContent.trim());
                    if (index !== -1) {
                        selectedItems.splice(index, 1);
                    }
                    // Change background color back to default
                    property.style.backgroundColor = "";
                }
            });
        }
    });

    const submitButton = table.querySelector(".submit");
    submitButton.addEventListener("click", () => {
        // Calculate total price
        const totalPrice = selectedItems.reduce((acc, curr) => acc + curr.price, 0);
        const selectedItemsNames = selectedItems.map(item => `${item.name} (${item.itemType})`).join(", ");

        // Display total price with the list of selected items in alert
        alert(`Total Price: $${totalPrice.toFixed(2)}\nSelected Tacos: ${selectedItemsNames}`);

        // Clear selected items
        selectedItems = [];

        // Reset selection styles
        properties.forEach(property => {
            property.classList.remove("selected");
            property.style.backgroundColor = "";
        });
    });
});
