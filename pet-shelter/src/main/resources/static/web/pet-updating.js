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
            axios.get("/api/v1/pets/" + petId)
            .then(function(res){
                app.pets = res.data;
            })
            .catch(function(error) {
                alert("something happened")
            })
        },
        update: function (petId) {
            window.location.replace("pet-updating.html?=" + petId)
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