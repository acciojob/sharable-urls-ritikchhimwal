// your code here
document.getElementById("button").addEventListener("click", function() {
            const name = document.getElementById("name").value;
            const year = document.getElementById("year").value;

            // Construct the URL with query parameters
            const baseUrl = "https://localhost:8080/";
            const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
            const fullUrl = baseUrl + queryString;

            // Update the h3 element with the new URL
            document.getElementById("url").textContent = fullUrl;
        });