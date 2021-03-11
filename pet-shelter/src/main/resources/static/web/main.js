var app = new Vue({
  el: '#pets-app',
  data: {
    pets: [],
    name: null,
    age: null
  },
  methods: {
        create: function() {
            $.post({
                url:"/api/v1/pets",
                data: JSON.stringify({"name": app.name, "age": app.age}),
                dataType: "text",
                contentType: "application/json",
                })
                .done(function(response){
                alert("Your pet was successfully created")
                window.location.replace("/web/pets.html")
                })
                .fail(function(error){
                alert("Something happened")
                })
        }
    }
})

fetch("/api/v1/pets")
    .then(function (res) {
    if (res.ok) {
        return res.json();
    }
    else {
        throw new error(res.status)
        }
    })
   .then(function (res) {
        app.pets = res;
   })
