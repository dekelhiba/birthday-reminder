const Main = document.getElementById("main");

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((response) => console.log(response))
//   .then((data) => console.log(data))

const Birthdays = [
  {
    name: "Erez",
    date: "16/10/1964",
    color: "#A54545",
  },
  {
    name: "Lea",
    date: "11/11/1967",
    color: "#A54545",
  },
  {
    name: "Shaked",
    date: "18/04/1992",
    color: "#A54545",
  },
  {
    name: "Peleg",
    date: "03/08/1995",
    color: "#A54545",
  },
];
// console.log(Birthdays);
const options = {
  method: "POST",
  header: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(Birthdays),
};

fetch("/", options);

for (let index = 0; index < 6; index++) {
  const newChild = document.createElement("div");
  newChild.innerText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  Main.appendChild(newChild);
}
