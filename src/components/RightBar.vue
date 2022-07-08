<template>
  <div class="col-12 col-lg-3 border-1 border-primary" style="border-left-style: dashed">
    <i style="color: #820f82;" class="fa fa-address-book-o fa-2x" aria-hidden="true"></i> Contact:

    <div class="mt-3">
      <p>
        <i class="text-primary fa fa-phone" aria-hidden="true"></i> +389 78268514
        <br/>
        <i class="text-primary fa fa-envelope" aria-hidden="true"></i> borce.smileski@gmail.com
        <br/>
        <i class="text-primary fa fa-home" aria-hidden="true"></i> Makedonski Brod
        <br/>
        <i class="text-primary fa fa-linkedin" aria-hidden="true"></i> borche-smileski
      </p>
    </div>
    <hr style="color: #820f82;">
    <div class="mt-2">
      <h4 class="pb-2 text-truncate">Competences <i class="fa fa-arrow-down text-primary" v-on:click="slipDown" aria-hidden="true"></i></h4>
      <div v-for="comp in competences">
        <p>{{ comp.skill }} <i style="color:#820f82 " class="fa fa-check " aria-hidden="true"></i></p>
      </div>

    </div>
    <h4>Soft skills</h4>
    <div class="row" v-for="skill in skills">
      <div class="col-4 col-lg-6 pt-2">
        {{skill.name}}
      </div>
      <div class="col-6 col-lg-4">
          <span v-for="i in skill.stars">
            <i class="text-primary fa fa-circle" aria-hidden="true"></i>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightBar",
  methods:{
    slipDown(){
      console.log('d')
    }
  },
  data() {
    return {
      competences: [
        {
          skill: 'Understanding OOP concepts',
        },
        {
          skill: 'Understanding Data Structures and Algorithms',
        },
        {
          skill: 'Understanding of Enhanced Entity - Relationship diagram',
        },
        {
          skill: 'Fast adoption',
        },
        {
          skill: 'Problem solving',
        },
        {
          skill: ' Great communication skills',
        }
      ],
      skills:[
        {
          name:'Adaptability and flexibility',
          stars:5
        },
        {
          name:'Accepting and giving feedback',
          stars:5
        },
        {
          name:'Logical thinking',
          stars:5
        },
        {
          name:'Teamwork',
          stars:5
        },
        {
          name:'Curiosity',
          stars:5
        },
        {
          name:'Willingness to learn',
          stars:5
        },
        {
          name:'Communication',
          stars:5
        },
        {
          name:'Problem Solving',
          stars:5
        },
        {
          name:'TimeManagement',
          stars:5
        },
        {
          name:'Working well under pressure',
          stars:5
        },
        {
          name:'Leadership',
          stars:5
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>