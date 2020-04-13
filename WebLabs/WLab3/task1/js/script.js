"use strict";

while (true) {


    let lover = prompt('Partner name');
    if (lover == null) {
        break;
    } else if (Number(lover)) {
        alert("Invalid Input!");
        continue;
    }

    let kids = prompt('Number of kids?');
    if (kids == null) {
        break;
    } else if (!Number(kids)) {
        alert("Invalid Input!");
        continue;
    }

    let job = prompt('What is your profession?');
    if (job == null) {
        break;
    } else if (Number(job)) {
        alert("Invalid Input!");
        continue;
    }

    let country = prompt('Country');
    if (country == null) {
        break;
    } else if (Number(country)) {
        alert("Invalid Input!");
        continue;
    }

    while (true) {
        let choise = prompt('Predict marriage or profession', 'Marriage/Profession');
        if (choise == null) {
            break;
        }
        switch (choise) {
            case 'Marriage':
                if (kids == 1) {
                    alert(`You will marry ${lover} and you will have ${kids} a child`);
                } else {
                    alert(`You will marry ${lover} and you will have ${kids} kids `);
                }
                break;

            case 'Profession':
                alert(`You will move to ${country} and will work as ${job}`);
                break;

            default:
                alert('You can choose only ONE option');

        }
    }
}

alert("bye!");