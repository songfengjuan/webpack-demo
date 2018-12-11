// 操作dom元素，把content显示到网页上
function show(content){
    window.document.getElementById('app').innerText = `hello${content}`;
}

// 通过 C