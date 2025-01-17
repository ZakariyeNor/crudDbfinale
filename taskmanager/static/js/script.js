document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);


    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "select"}
    });

    let select = document.querySelectorAll('select');
    M.FormSelect.init(select);

    let collabsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collabsible);


  });

  
    