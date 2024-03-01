function textChange() {
    //var text = document.getElementById("footer").textContent;
    //console.log(text);
	var textList = [
		"布鲁阿开误",
		"实现的代码只有九六和上帝知道，但是九六忘记了。。。",
		"Wahoo!",
		"Copyright 2024 KLONOA9X6",
		"A error occurred during script running. Reason: 九六 is too lazy.",
		"九六这个名字是九六初中的时候来的，不过具体是什么意思九六也不知道",
		"Life is 苦呀西~",
		"Ja ,Treffer!",
		"九六的代码是九六写的，但是九六看不懂自己写了什么",
		"特别是其搭载 690 战术核显卡的改进版本，一发就可摧毁一个航母战斗群。",
		"INTERNET YAMERO!"
	]
    document.getElementById("footer").textContent = textList[Math.floor(Math.random() * textList.length)];
}