"use strict";

let size = prompt("How many bottle are on the stall?")

for (let i = size; i > 0; i--) {
    alert(`${i} bottles are on the stall, one fell down ${i - 1} left`);
    if (i == 1) {
        alert("None!");
    }

}