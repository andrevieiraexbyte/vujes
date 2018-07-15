
<template>
 <div class="container row meu-stilo ">
   <p>{{titulo}}</p>
            <button @click.stop.prevent="getApi()" class="btn-table btn btn-primary">Pesquisar</button>
          
        <table class="table table-success">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Username</th>
                    <th>E-mail</th>  
                </tr>
            </thead>
            
            <tbody>
                <tr v-bind:key="dado" v-for="dado in dados"> <!-- listando dados no html com diretiva v-for-->
                    <td>{{ dado.id }}</td>
                    <td>{{ dado.name }}</td>
                    <td>{{ dado.username }}</td>
                    <td>{{ dado.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: "app",
  name: "SimpleTable",
  data() {
    return {
      titulo: "Ordens de serviço",
      dados: [], //array para montar lista da api na view
     
    };
  },//metodo que busca dados json - api
  methods: {
    getApi() {
      var url = "http://jsonplaceholder.typicode.com/users"; 
      this.$http.get(url).then(function(response) {
        this.dados = response.body;
      });
    }
  }
};
</script>

<style>

.table  {
    
    font-size: 10px;
    align-items: center;
}


</style>
