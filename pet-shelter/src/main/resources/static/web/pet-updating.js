var app = new Vue({
  el: '#pets-app',
  data: {
    name: null,
    age: null
  },
  methods: {
        getData: function() {
            var url = new URL (window.location.href);
            var petId = url.searchParams.get("petId");
            $.get("/api/v1/pets/" + petId)
            .done(function(response){
                app.name = response.data.name;
                app.age = response.data.age;
            })
            .fail(function(error) {
                alert("something happened")
            })
        },
        update: function (petId) {
            window.location.replace("pet-updating.html?=" + petId)
        }
    }
})

app.getData();