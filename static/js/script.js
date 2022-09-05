

function rpsGame(yourChoice){
    var humainChoice, botChoice;
    humainChoice = yourChoice.id;
    botChoice = numberChoice(randToRpsInt());
    result = decideWinner(humainChoice, botChoice);
    message = finalMessage(result);
    rpsFrontEnd(humainChoice, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberChoice(number){
    return ['rock', 'paper', 'Scissors'][number];
}

function decideWinner(humainChoice, botChoice){
    var rpsDataBase = {
        'rock':{'Scissors': 1, 'rock': 0.5, 'paper':0},
        'paper':{'rock': 1, 'paper': 0.5, 'Scissors':0},
        'Scissors':{'paper': 1, 'Scissors': 0.5, 'rock':0}
    };
    var yourScore = rpsDataBase[humainChoice][botChoice];
    var botScore = rpsDataBase[botChoice][humainChoice];
    return [yourScore, botScore];
}

function finalMessage(result){
    switch (result[0]){
        case 0:
            score={'message':'You lost!', 'color':'red'};
            break;
        case 0.5:
            score={'message':'You tied!', 'color':'yellow'};
            break;
        case 1:
            score={'message':'You win!', 'color':'green'};
            break;
    };
    return score;
}

function rpsFrontEnd(humainImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'Scissors': document.getElementById('Scissors').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('Scissors').remove();

    var humainDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humainDiv.innerHTML = "<img src='" + imagesDatabase[humainImageChoice]+"'width=150px height=150px style='box-shadow: 0px 5px 25px rgba(37, 50, 233, 1);'>";
    document.getElementById('flex-box-rps-div').appendChild(humainDiv);

    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 50px; padding: 10px;'>" + finalMessage.message + "</h1>";
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);

    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice]+"'width=150px height=150px style='box-shadow: 0px 5px 25px rgba(245, 35, 25, 1);'>";
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}