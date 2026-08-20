// Welcome Message
function welcomeMessage() {

    alert("🏡 Welcome to DreamHome Estate!");

}


// ======================================
// PROPERTY SEARCH
// ======================================

function searchProperty() {

    let search =
        document.getElementById("propertySearch").value
            .toLowerCase();

    let message =
        document.getElementById("searchResult");

    if (search === "duplex") {

        message.innerHTML =
            "🏠 We found luxury duplexes for you!";

    }

    else if (search === "apartment") {

        message.innerHTML =
            "🏢 We found modern apartments for you!";

    }

    else if (search === "bungalow") {

        message.innerHTML =
            "🏡 We found beautiful bungalows for you!";

    }
        
    else if (search === "villa") {

        message.innerHTML =
            "🏡 We found beautiful villas for you!";

    }


    else {

        message.innerHTML =
            "❌ Sorry, we could not find that property.";

    }

}


// ======================================
// CONTACT FORM
// ======================================

function validateForm() {

    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("email").value;

    let result =
        document.getElementById("formResult");

    if (name === "" || email === "") {

        result.innerHTML =
            "⚠️ Please fill in all required fields.";

        return false;

    }

    result.innerHTML =
        "✅ Thank you, " + name +
        "! We will contact you soon.";

    return false;

}