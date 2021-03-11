var app = new Vue({
  el: '#pets-app',
  data: {
    pets: [],
    name: null,
    age: null
  },
  methods: {

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

   app.create();