
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem(player1_score, player1_score)//Set "player1_name" using localStorage.setItem() function
	  localStorage.setItem(player2_score, player2_score)//Set "player2_name" using localStorage.setItem() function

    window.location = "game_page.html";
}

