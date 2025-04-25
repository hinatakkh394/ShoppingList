// IDを取得を取得
const addItem = document.querySelector("#button");
const itemInput = document.querySelector("#itemInput");

// ボタンをクリックするとinputの値を取得して、リストに追加する機能を追加
addItem.addEventListener("click", function () {

    // inputの値を取得(入力欄に実際に入力された文字は何かな？)
    const itemText = itemInput.value;

    // if文を使って、入力欄が空でない場合はリストに追加する,
    // 空の場合はconsole.logで"入力がありません。"と表示する
    if (itemText !== "") {
        console.log(itemText);

        // リストにitemTextを追加するために、li要素を作成
        const listItem = document.createElement("li");
        listItem.textContent = itemText;

        // 作成したli要素をul要素に追加する
        const list = document.querySelector("#shoppingList");
        list.appendChild(listItem);

        itemInput.value = "";}
        else {
        console.log("入力がありません。");
        }

        
});

// リストのアイテムをクリックすると、チェックマークがつく機能を追加
const list = document.querySelector("#shoppingList");

list.addEventListener("click", function (event) {
    // クリックされた要素がli要素かどうかを確認
    if (event.target.tagName === "LI") {
        // クリックされたli要素にチェックマークを追加
        event.target.classList.toggle("checked");
        console.log("Checked: " + event.target.textContent);


        
    }
});
    
    
