console.log("Hello World!");

$("test1").on("click", function () {
    console.log("test1 clicked!");
});

document.getElementById("test2").addEventListener("click", () => {
    console.log("test2 clicked!");
})
