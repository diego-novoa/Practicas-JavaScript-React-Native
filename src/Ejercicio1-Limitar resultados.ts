interface user {
    id: number;
    name: string;
    email: string;
    [key: string]: any
}
async function loadUsers(): Promise<void>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: user[] = await response.json();
    const firstFiveUsers = users.slice(0, 5);
    renderUsers(firstFiveUsers);
    function renderUsers(users: user[]): void {
        const container = document.getElementById('user-container');
        if (!container) return;
        container.innerHTML = users
          .map(user => `
           <div>
            <h3>${user.name}</h3>
            <p>${user.email}</p>
           </div>`)
          .join('');

    }
    loadUsers();

}