alert("ようこそ")

function omikuji() {

    //ランダムな数を生成
    let a = Math.floor(Math.random() * 6 + 1);
    console.log(a);

    //おみくじの画像
    document.getElementsByClassName("omikuji")[0].setAttribute('src', `omikuji/kuji${a}.png`);　

    //もう一回
    document.querySelectorAll("button")[0].innerHTML = "もう一度ひく";

}