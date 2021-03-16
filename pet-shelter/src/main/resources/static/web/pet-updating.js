var app = new Vue({
  el: '#pets-app',
  data: {
    pets: [],
    name: null,
    age: null,
    petId: null
  },
  methods: {
        getData: function() {
            var url = new URL (window.location.href);
            app.petId = url.searchParams.get("petId");
            $.get("/api/v1/pets/"+app.petId)
            .done(function(response){
                app.name = response.data.name;
                app.age = response.data.age;
            })
            .fail(function(error) {
                alert("something happened")
            })
        },
        update: function (petId) {
            $.put("/api/v1/pets/"+app.petId, {"name": app.name, "age": app.age})
                        .done(function(response){
                            alert("Your pet was successfully updating")
                            window.location.replace("/web/pets.html")
                        })
                        .fail(function(error) {
                            alert("something happened")
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

        app.getData();