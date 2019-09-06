<template>
  <div class="commentFormContainer">
    <div class="commentForm">
      <div class="logo">
        <img src="../../img/logo2.png">
      </div>
      <div class="form">
        <div class="inputBlock">
          <label
            for="inputName"
            class="inputLabel"
          >
            Имя <span class="labelStar">
              *
            </span>
          </label>
          <input
            id="inputName"
            v-model="name"
            class="input"
          >

          <label
            for="inputMail"
            class="inputLabel"
          >
            E-Mail <span class="labelStar">
              *
            </span>
          </label>
          <input
            id="inputMail"
            v-model="mail"
            class="input"
          >
        </div>
        <div class="inputBlock">
          <label
            for="inputCommnet"
            class="inputLabel"
          >
            Комментарий <span class="labelStar">
              *
            </span>
          </label>
          <textarea
            id="inputCommnet"
            v-model="comment"
            class="input textarea"
          />
        </div>
      </div>
      <div class="formButton">
        <button
          class="button"
          @click="addCommnet"
        >
          Записать
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState  } from 'vuex';

export default {
    name: 'CommentForm',
    data (){
        return {
            name: '',
            mail: '',
            comment: '',
            errors: []
        };
    },
    methods: {
        ...mapActions({
            submitAddComment: 'commentsList/addNewComment'
        }),
        addCommnet (){
            if (this.name.length < 3 || this.name.length > 16 || !/^[a-zA-ZА-Яа-я]+$/.test(this.name)){
                this.errors.push('Имя должно быть от 3 до 16 символов и содержать только буквы');
            }
            if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this.mail)){
                this.errors.push('Введите корректную почту (name@example.test)');
            }
            if (this.comment.length < 30){
                this.errors.push('комментарий должен быть минимум 30 символов');
            }
            if (this.errors.length){
                this.errors.map((error) => this.$toast.error(error));
                this.errors = [];
            } else {
                this.errors = [];
                const newCommnet = {
                    name: this.name,
                    mail: this.mail,
                    comment: this.comment
                };
                this.submitAddComment(newCommnet);
            }
        }
    }
};
</script>

<style scoped>
    .commentFormContainer {
        width: 100%;
        height: 40vh;
        background-color: #292c32;
        display: flex;
        justify-content: center;
    }
    .commentForm {
      width: 50%;
      margin: 2% 10% 0 10%;
      height: 85%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .logo {
      display: flex;
      justify-content: center;
    }
    .form{
      display: flex;
      justify-content: space-between;
    }
    .inputBlock {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 45%;
    }

  .input {
    height: 30px;
    border: 1px solid #3f4246;
    border-radius: 3%;
    background-color: #2e3035;
    outline:none;
    color: white;
    padding: 0 2%;
  }

  .input.textarea {
    height: 100px;
  }

  .input:focus {
    border-color: #5a3336;
  }
  .inputLabel{
    color: white;
  }
  .labelStar {
    font-size: 20px;
    color: #b3383a;
  }
  .formButton {
    display: flex;
    justify-content: flex-end;
  }
  .button {
    width: 100px;
    height: 30px;
    background-color: #bd383a;
    border-radius: 5%;
    color: white;
    border: none;
    outline:none;
  }
  .button:active {
    background-color: #5a1616;
  }

    @media all and (max-device-width: 1024px){
        .commentForm{
            width: 80%;
        }
    }
    @media all and (max-device-width: 768px){
        .commentForm{
            width: 100%;
            align-items: center;
            margin: 0;
            height: 100%;
        }
        .form{
            flex-direction: column;
            width: 80%;
        }
        .inputBlock {
            width: 100%;
        }
    }
    @media all and (max-device-width: 425px){
        .form{
            width: 90%;
        }
        .input {
            height: 50px;
            font-size: 30px;
            letter-spacing: 1px;
        }
        .input.textarea {
            height: 250px;
        }
        .inputLabel{
            font-size: 30px;
        }
        .formButton {
            justify-content: center;
            width: 90%;
        }
        .button{
            width: 100%;
            height: 50px;
            border-radius: 1%;
            font-size: 35px;
        }
    }
</style>