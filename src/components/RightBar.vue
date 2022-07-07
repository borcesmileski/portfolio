<template>
  <div class="col-12 col-lg-3 border-start border-1 border-primary">
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
      <h4 class="text-truncate">Competences</h4>
      <div v-for="comp in competences">
        <p>{{ comp.skill }} <i style="color:#820f82 " class="fa fa-check " aria-hidden="true"></i></p>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "RightBar",
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
    }
  }
}
</script>

<style scoped>

</style>