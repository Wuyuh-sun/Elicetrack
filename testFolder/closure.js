function createCard() {
  let title = "";
  let content = "";

  function changeTitle(text) {
    title = text;
  }
  function changeContent(text) {
    content = text;
  }
  function print() {
    console.log("title: " + title);
    console.log("content: " + content);
  }
  return {
    title,
    content,
    changeTitle,
    changeContent,
    print,
  };
}

const card1 = createCard();

card1.changeTitle("card1 title");
card1.changeContent("card1 content");
card1.print();

const card2 = createCard();

card2.print();
