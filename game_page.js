player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "question turn- " + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn- " + player2_name;
function send()
{
getword = document.getElementById("word").value;
word = getword.toLowerCase();
charat1 = word.charAt(1);
x = Math.floor(word.length/2);
charat2 = word.charAt(x);
y = word.length - 1;
charat3 = word.charAt(y);
a = word.replace(charat1,"_");
b = a.replace(charat2,"_");
newword = b.replace(charat3,"_");
question_word = "<h4 id='word_display'> Q. "+newword+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}