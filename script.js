// Selectors
const userForm = document.getElementById("userForm");
const userTable = document.getElementById("userTable");

// Array to store user data
let users = [];

// Function to render users in the table
function renderUsers() {
    userTable.innerHTML = ""; // Clear the table
    users.forEach((user, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button class="edit" onclick="editUser(${index})">Edit</button>
                <button class="delete" onclick="deleteUser(${index})">Delete</button>
            </td>
        `;

        userTable.appendChild(row);
    });
}

// Add user
userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    users.push({ name, email });
    renderUsers();

    // Reset form
    userForm.reset();
});

// Edit user
function editUser(index) {
    const user = users[index];

    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;

    // Remove the user being edited
    deleteUser(index);
}

// Delete user
function deleteUser(index) {
    users.splice(index, 1); // Remove user from array
    renderUsers();
}

// Initial render
renderUsers();
