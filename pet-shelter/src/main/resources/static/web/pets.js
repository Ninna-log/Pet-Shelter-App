var app = new Vue({
  el: '#pets-app',
  data: {
    pets: [],
    name: null,
    age: null
  },
  methods: {
        remove: function(petId) {
            axios.delete("/api/v1/pets/" + petId)
               .then(function(response){
               alert("Your pet was successfully eliminated")
               window.location.reload();
               })
              .catch(function(error){
               alert("Something happened")
            })
        },
        edit: function(petId) {
            window.location.replace("pet-updating.html?="+petId)
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
