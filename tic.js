// Function called whenever user tab on any box
let b1, b2, b3, b4, b5, b6, b7, b8, b9;
let arr = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
b1 = document.getElementById("b1").value;
b2 = document.getElementById("b2").value;
b3 = document.getElementById("b3").value;
b4 = document.getElementById("b4").value;
b5 = document.getElementById("b5").value;
b6 = document.getElementById("b6").value;
b7 = document.getElementById("b7").value;
b8 = document.getElementById("b8").value;
b9 = document.getElementById("b9").value;
function myfunc() {
    // Setting DOM to all boxes or input field
    // Checking if Player X won or not and after
    // that disabled all the other fields
    if ((arr[0] == 'X') && (arr[1] == arr[2]) && (arr[0] == arr[2]) || ((arr[0] == 'X') && (arr[3] == arr[0])&& (arr[6] == arr[3])) || ((arr[6] == 'X') && (arr[7] == arr[8])&& (arr[8] == arr[6])) || ((arr[2] == 'X') && (arr[7] == arr[8])&& (arr[8] == arr[2])) || ((arr[0] == 'X') && (arr[4] == arr[8])&& (arr[8] == arr[0])) || ((arr[2] == 'X') && (arr[4] == arr[6])&& (arr[6] == arr[2])) || ((arr[1] == 'X') && (arr[4] == arr[7])&& (arr[7] == arr[1])) || ((arr[3] == 'X') && (arr[4] == arr[5])&& (arr[5] == arr[3]))){
        document.getElementById('print')
            .innerHTML = "Player X won";
        for (let i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).disabled = true;
        }
        window.alert('Player X won');
    }
        // Checking of Player X finsh
        // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if ((arr[0] == '0') && (arr[1] == arr[2]) && (arr[0] == arr[2]) || ((arr[0] == '0') && (arr[3] == arr[0])&& (arr[6] == arr[3])) || ((arr[6] == '0') && (arr[7] == arr[8])&& (arr[8] == arr[6])) || ((arr[2] == '0') && (arr[7] == arr[8])&& (arr[8] == arr[2])) || ((arr[0] == '0') && (arr[4] == arr[8])&& (arr[8] == arr[0])) || ((arr[2] == '0') && (arr[4] == arr[6])&& (arr[6] == arr[2])) || ((arr[1] == '0') && (arr[4] == arr[7])&& (arr[7] == arr[1])) || ((arr[3] == '0') && (arr[4] == arr[5])&& (arr[5] == arr[3]))){
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        for (let i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).disabled = true;
        }
        window.alert('Player 0 won');
    }
        // Checking of Player 0 finish
    // Here, Checking about Tie
    else if ((arr[0] == 'X' || arr[0] == '0') && (arr[1] == 'X'
            || arr[1] == '0') && (arr[2] == 'X' || arr[2] == '0') &&
        (arr[3] == 'X' || arr[3] == '0') && (arr[4] == 'X' ||
            arr[4] == '0') && (arr[5] == 'X' || arr[5] == '0') &&
        (arr[6] == 'X' || arr[6] == '0') && (arr[7] == 'X' ||
            arr[7] == '0') && (arr[8] == 'X' || arr[8] == '0')) {
        document.getElementById('print')
            .innerHTML = "Match Tie";
        window.alert('Match Tie');
    }
    else {
        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
}

// Function to reset game
function myfunc_2() {
    location.reload();
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).value = '';
    }
}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function stepPlayer(elementId) {
    let a = document.getElementById(elementId);
    if (flag == 1) {
        a.value = "X";
        flag = 0;
    } else {
        a.value = "0";
        flag = 1;
    }
    a.disabled = true;
}
