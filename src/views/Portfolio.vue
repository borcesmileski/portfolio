<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12 col-lg-2 offset-lg-1">
        <img class="rounded" src="../assets/img/profile.jpg">
      </div>
      <div class="col-12 col-lg-3  align-self-center">
        <h1>Borche Smileski</h1>
        <h5 style="color: #820f82">Software Engineer</h5>
      </div>
      <div class="col-12 col-lg-3 offset-lg-1 align-self-lg-center">


      </div>
    </div>

    <div class="row mt-5">
      <div class="col-12 col-lg-7 offset-lg-1 ">
        <div class="pe-5">
          <h4 class="pb-2" ><i style="color: #820f82" class="fa fa-user-circle-o" aria-hidden="true"></i> About me</h4>
          <p>I am a software engineer who likes to upgrade himself constantly with new knowledge and experiences.
            I would describe myself as persistent because whenever I want something I want to achieve it.
            I see myself as a successful web developer in the future. </p>
        </div>
        <div class="pt-3">
          <h4> <i style="color: #820f82" class="fa fa-university pb-3" aria-hidden="true"></i> Education</h4>
          <div v-for="edu in education">
            <div>
              <span style="color:#820f82;">{{edu.date}}</span>
              <span  class="d-inline ps-5"> <b>{{edu.name}}</b></span>
              <span style="margin-left: 190px" class="d-block"> {{edu.description}}</span>
            
            </div>

            <br/>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-3 border-start border-1 border-primary">
        <i style="color: #820f82;" class="fa fa-address-book-o fa-2x" aria-hidden="true"></i> Contact:

        <div class="mt-3">
          <p>
            <i style="color: #820f82;" class="fa fa-phone" aria-hidden="true"></i> +389 78268514
            <br/>
            <i style="color: #820f82;" class="fa fa-envelope" aria-hidden="true"></i> borce.smileski@gmail.com
            <br/>
            <i style="color: #820f82;" class="fa fa-home" aria-hidden="true"></i> Makedonski Brod
            <br/>
            <i style="color: #820f82;" class="fa fa-linkedin" aria-hidden="true"></i> borche-smileski
          </p>
        </div>
        <hr style="color: #820f82;">
        <div class="mt-2">
            <h4 style="color: #820f82">Competences</h4>
          <div v-for="comp in competences">
            <p>{{comp.skill}} <i style="color:#820f82 " class="fa fa-check " aria-hidden="true"></i> </p>
          </div>

        </div>

      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      competences: [
        {
          skill: 'Understanding OOP concepts',
          circle: 5,
        },
        {
          skill: 'Understanding Data Structures and Algorithms',
          circle: 5,
        },
        {
          skill: 'Understanding of Enhanced Entity - Relationship diagram',
          circle: 5,
        },
        {
          skill: 'Fast adoption',
          circle: 5,
        },
        {
          skill: 'Problem solving',
          circle: 5,
        },
        {
          skill: ' Great communication skills',
          circle: 5,
        }
      ],
      education:[
        {
          date: 'September2019-2023',
          name: 'Computer Science and Engineering',
          description:'Faculty of Computer Science and Engineering, - Skopje'
        },
        {
          date: 'September 2015 - 2019',
          name: 'Gymnasium High School',
          description:'„Sv. Naum Ohridski“ - Маkedonski Brod'
        },
        {
          date: 'September 2007 - 2015',
          name: 'Elementary school',
          description:'„Sv. Kliment Ohridski “- Мakedonski Brod'
        },
      ]
    }
  }
}
</script>