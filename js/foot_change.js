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
		"Life is 苦呀西~"
	]
    document.getElementById("footer").textContent = textList[Math.floor(Math.random() * textList.length)];
}