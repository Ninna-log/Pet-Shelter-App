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

            var baseUrl = (window.location).href;
            var petId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
            axios.get("/api/v1/pets/"+petId)
            .then(function(response){
                app.petId = petId;
                app.name = response.data.name;
                app.age = response.data.age;
            })
            .catch(function(error) {
                alert("something happened")
            })
        },
        update: function () {
            axios.put("/api/v1/pets/"+app.petId, {"name": app.name, "age": app.age})
                .then(function(response){
                alert("Your pet was successfully updating")
                window.location.replace("/web/pets.html")
            })
               .catch(function(error) {
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
        app.getData();
   })
