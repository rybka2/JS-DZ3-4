var parent = document.body;
var header = document.createElement("h4");
var wrapper = document.createElement("div");
var questionareList = document.createElement('ol');
var chkbtn = document.createElement('button')
var questItem1 = document.createElement('li');
var questItem2 = document.createElement('li');
var questItem3 = document.createElement('li');
var answerList1 = document.createElement("ul");
var answerList2 = document.createElement("ul");
var answerList3 = document.createElement("ul");
var answerItem11 = document.createElement('li');
var answerItem12 = document.createElement('li');
var answerItem13 = document.createElement('li');
var answerItem21 = document.createElement('li');
var answerItem22 = document.createElement('li');
var answerItem23 = document.createElement('li');
var answerItem31 = document.createElement('li');
var answerItem32 = document.createElement('li');
var answerItem33 = document.createElement('li');
var labelAnswer11 = document.createElement('label');
var labelAnswer12 = document.createElement('label');
var labelAnswer13 = document.createElement('label');
var labelAnswer21 = document.createElement('label');
var labelAnswer22 = document.createElement('label');
var labelAnswer23 = document.createElement('label');
var labelAnswer31 = document.createElement('label');
var labelAnswer32 = document.createElement('label');
var labelAnswer33 = document.createElement('label');
var checkAnswer11 = document.createElement('input');
var checkAnswer12 = document.createElement('input');
var checkAnswer13 = document.createElement('input');
var checkAnswer21 = document.createElement('input');
var checkAnswer22 = document.createElement('input');
var checkAnswer23 = document.createElement('input');
var checkAnswer31 = document.createElement('input');
var checkAnswer32 = document.createElement('input');
var checkAnswer33 = document.createElement('input');

wrapper.setAttribute('class', 'col-xs-4 col-xs-offset-2');

chkbtn.setAttribute('class', 'btn btn-default btn-lg  col-xs-8 col-xs-offset-6');
chkbtn.innerHTML = 'Проверить мои результаты';

header.setAttribute("class", "text-center");
header.innerHTML = 'Тест по программированию';

questItem1.setAttribute('class', 'item');
questItem2.setAttribute('class', 'item');
questItem3.setAttribute('class', 'item');

questItem1.setAttribute('class', 'item');
questItem1.innerHTML = "Вопрос №1";
questItem2.setAttribute('class', 'item');
questItem2.innerHTML = "Вопрос №2";
questItem3.setAttribute('class', 'item');
questItem3.innerHTML = "Вопрос №3";

checkAnswer11.setAttribute('type', 'checkbox');
checkAnswer11.setAttribute('id', 'ca11');
checkAnswer12.setAttribute('type', 'checkbox');
checkAnswer12.setAttribute('id', 'ca12');
checkAnswer13.setAttribute('type', 'checkbox');
checkAnswer13.setAttribute('id', 'ca13');
checkAnswer21.setAttribute('type', 'checkbox');
checkAnswer21.setAttribute('id', 'ca21');
checkAnswer22.setAttribute('type', 'checkbox');
checkAnswer22.setAttribute('id', 'ca22');
checkAnswer23.setAttribute('type', 'checkbox');
checkAnswer23.setAttribute('id', 'ca23');
checkAnswer31.setAttribute('type', 'checkbox');
checkAnswer31.setAttribute('id', 'ca31');
checkAnswer32.setAttribute('type', 'checkbox');
checkAnswer32.setAttribute('id', 'ca32');
checkAnswer33.setAttribute('type', 'checkbox');
checkAnswer33.setAttribute('id', 'ca33');

labelAnswer11.setAttribute('for', 'ca11');
labelAnswer11.innerHTML = "Вариант ответа №1";
labelAnswer12.setAttribute('for', 'ca11');
labelAnswer12.innerHTML = "Вариант ответа №2";
labelAnswer13.setAttribute('for', 'ca11');
labelAnswer13.innerHTML = "Вариант ответа №3";
labelAnswer21.setAttribute('for', 'ca11');
labelAnswer21.innerHTML = "Вариант ответа №1";
labelAnswer22.setAttribute('for', 'ca11');
labelAnswer22.innerHTML = "Вариант ответа №2";
labelAnswer23.setAttribute('for', 'ca11');
labelAnswer23.innerHTML = "Вариант ответа №3";
labelAnswer31.setAttribute('for', 'ca11');
labelAnswer31.innerHTML = "Вариант ответа №1";
labelAnswer32.setAttribute('for', 'ca11');
labelAnswer32.innerHTML = "Вариант ответа №2";
labelAnswer33.setAttribute('for', 'ca11');
labelAnswer33.innerHTML = "Вариант ответа №3";

parent.appendChild(header);
parent.appendChild(wrapper);
wrapper.appendChild(questionareList);

answerItem11.appendChild(checkAnswer11);
answerItem11.appendChild(labelAnswer11);
answerItem12.appendChild(checkAnswer12);
answerItem12.appendChild(labelAnswer12);
answerItem13.appendChild(checkAnswer13);
answerItem13.appendChild(labelAnswer13);

answerItem21.appendChild(checkAnswer21);
answerItem21.appendChild(labelAnswer21);
answerItem22.appendChild(checkAnswer22);
answerItem22.appendChild(labelAnswer22);
answerItem23.appendChild(checkAnswer23);
answerItem23.appendChild(labelAnswer23);

answerItem31.appendChild(checkAnswer31);
answerItem31.appendChild(labelAnswer31);
answerItem32.appendChild(checkAnswer32);
answerItem32.appendChild(labelAnswer32);
answerItem33.appendChild(checkAnswer33);
answerItem33.appendChild(labelAnswer33);

answerList1.appendChild(answerItem11);
answerList1.appendChild(answerItem12);
answerList1.appendChild(answerItem13);

answerList2.appendChild(answerItem21);
answerList2.appendChild(answerItem22);
answerList2.appendChild(answerItem23);

answerList3.appendChild(answerItem31);
answerList3.appendChild(answerItem32);
answerList3.appendChild(answerItem33);

questItem1.appendChild(answerList1);
questItem2.appendChild(answerList2);
questItem3.appendChild(answerList3);

questionareList.appendChild(questItem1);
questionareList.appendChild(questItem2);
questionareList.appendChild(questItem3);

wrapper.appendChild(chkbtn);
