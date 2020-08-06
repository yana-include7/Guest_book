<template lang="pug">
  form.form-horizontal(@submit="submitForm")
    .form-group
      .col-3
        label.form-label Ваше имя
      .col-9
        input.form-input(type="text" v-model="title" minlength=3 maxlength=32 placeholder="Введите ваше имя...")
    .form-group
      .col-3
        label.form-label Текст
      .col-9
        textarea.form-input(v-model="body" rows=8 minlength=16 maxlength=512 placeholder="Введите текст...")
    .form-group
      .col-3
      .col-9
      <input type="file" @change="uploadImage" name="image" id="image"  accept="image/*" >
       button.btn.btn-primary(type="submit") Оставить отзыв
</template>
<script>
import axios from 'axios'
export default {
  name: 'create-note',
  data () {
    return {
      'title': '',
      'body': '',
      'image': ''
    }
  },
  methods: {
    submitForm (event) {
      this.createNote()
      this.title = ''
      this.body = ''
      this.img = ''
    },
    uploadImage (e) {
      this.img = e.target.files[0]
    },
    submit () {
      let data = {
        imagePath: this.imagePath,
        productSpect: this.productSpect
      }
      axios.post('http://localhost:8000/api/v1/notes/', data)
    },
    createNote () {
      let fd = new FormData()
      console.log(this.img)
      if (this.img !== undefined) {
        fd.append('image', this.img)
      }
      fd.append('title', this.title)
      fd.append('body', this.body)
      axios.post('http://localhost:8000/api/v1/notes/', fd)
        .then(resp => {
          this.imagePath = resp.data.path
        })
    }
  }
}
</script>
