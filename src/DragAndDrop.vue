<template>
  <div>
    
	   <div class="meu-input">

	  	<input type="file" @change="onFileSelected">
     </div>
	  

  </div>
   
</template>

<script>
import axios from "axios"; // lib axios auxilia em requisições
export default {
  name: "app",
  name: "dragAndDrop",
  methods: {
    // metodo para enviar arquivos a um endpoint
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      console.log(event);
    },
    onUpload() {
      const fd = new FormData();
      fd.append("image", this.selectedFile, this.selectedFile.name);
      axios
        .post(
          "https://console.firebase.google.com/project/estagio-ownee/overview/uploadFile",fd
        )
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style>
.btn-drag {
  margin-left: auto;
}
.meu-stilo p {
  font-size: 25px;
  margin: auto;
}
.meu-input{
color: green;

}
</style>
