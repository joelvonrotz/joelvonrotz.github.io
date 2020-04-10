function change(button) {
  var group = document.querySelectorAll("[data-state-group=" + String(button.dataset.stateGroup) + "]");

  group.forEach(element => {

    console.log(element.dataset.state);


    if(element.dataset.state == "inactive")
    {
      element.dataset.state="active";
      return;
    }
    else if(element.dataset.state == "active")
    {
      element.dataset.state="inactive";
    }

    console.log(element.dataset.state);
    console.log("-----------");
  });
}
