<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data(){
    return {
      welcomeScreen:{
        title:"Welcome",
        blogPost:"wleijfsdkjfn",
        welcomeScreen:true,
        photo:"coding"
      },
      simpleBlogPost:[
        {
          title:"Title",
          blogHTML:"This is a filler blog post title",
          blogCoverPhoto:"beautiful-stories"
        },{
          title:"Filler Title",
          blogHTML:"This is a filler blog",
          blogCoverPhoto:"designed for everyone"
        }
      ],
    }
  }
};
</script>
