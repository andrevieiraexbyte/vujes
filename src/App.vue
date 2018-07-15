<template>
    <div id="app" class="container-box">
         
  <div class="box a">
    <img src="./logo-ownee.png" alt="">
  </div>
  <div class="box b"></div>
  <div class="box c"><drag-and-drop></drag-and-drop></div> <!-- cada grid recebe um componente vue-->
  <div class="box d"> <simple-table></simple-table></div>
  <div class="box e"><drag-and-drop></drag-and-drop></div>
      
   </div>
</template>

<script>
import simpleTable from "./SimpleTable.vue";// importando componentes
import dragAndDrop from "./DragAndDrop.vue";

export default {
  name: "app",
  components: { simpleTable, dragAndDrop }, // chamando componentes 
  
};

/* criando grid's, podendo colcoar os componentes vue no grid desejado! */
</script>
<style>

body {
  padding: 10px;
}

.container-box {
  margin: 0 auto;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: auto;
  grid-template-rows: 400px 250px;
  grid-template-areas:
    "a a b b c c"
    "d d d d e e";
}

.box {
  background-color: rgba(204, 204, 204, 0.295);
  border-radius: 5px;
}

.a {
  grid-area: a;
}

.b {
  grid-area: b;
}

.c {
  grid-area: c;
}

.d {
  grid-area: d;
}

.e {
  grid-area: e;
}

.f {
  grid-area: f;
}

.g {
  grid-area: g;
}

.h {
  grid-area: h;
}
</style>
