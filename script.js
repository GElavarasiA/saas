let total = 0;
function addSubscription() {
    const name = document.getElementById('serviceName').value;
    const cost = parseFloat(document.getElementById('cost').value);

    if (name && cost) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${name}</span> <span>$${cost}</span>`;
        document.getElementById('subList').appendChild(li);
        
        total += cost;
        document.getElementById('totalCost').innerText = total.toFixed(2);

        // Clear inputs
        document.getElementById('serviceName').value = '';
        document.getElementById('cost').value = '';
    }
}