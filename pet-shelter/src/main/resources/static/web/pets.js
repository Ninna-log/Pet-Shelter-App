var app = new Vue({
  el: '#pets-app',
  data: {
    pets: [],
    name: null,
    age: null
  },
  methods: {
        remove: function(petId) {
            if(confirm("You really wanna delete it?"))
            axios.delete("/api/v1/pets/" + petId)
               .then(function(response){
               alert("Your pet was successfully eliminated")
               window.location.reload();
               })
              .catch(function(error){
               alert("There's been an error")
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
