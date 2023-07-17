$(() => {
  $("#create").on("submit", function (e) {
    e.preventDefault();
    var value = $(this).find("input").val();

    $("#todo-list").append(
      "<li class='completed'>" +
        "<span>" +
        value +
        "</span>" +
        "<button class='complete'>완료</button> " +
        "<button class='remove'>삭제</button>" +
        "</li>"
    );

    $(this).trigger("reset");
  });

  $("body").on("click", ".complete", function () {
    $(this).parent("li").addClass("completed");
  });
  $("body").on("click", ".remove", function () {
    $(this).parent("li").remove();
  });
});
