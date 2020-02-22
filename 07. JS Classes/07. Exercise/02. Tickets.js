function solve(arr, sortCriteria) {
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];
    for (let i = 0; i < arr.length; i++) {
        let args = arr[i].split('|');
        tickets.push(new Ticket(args[0], Number(args[1]), args[2]));
    }
    let sortTickets = tickets.sort((a,b) => sortCriteria === 'price'
        ? a[sortCriteria] - b[sortCriteria]
        : a[sortCriteria].localeCompare(b[sortCriteria]));
    
    return console.log(sortTickets);
}

solve(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
);

// solve(
//     [
//         'Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'
//     ],
//     'status')