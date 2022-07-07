<template>
  <div class="pt-2">
    <h4> <i class="text-primary fa fa-university pb-3" aria-hidden="true"></i> Education</h4>
    <div>
      <div v-for="edu in education" class="row">
        <div class="col-12 col-lg-4 align-self-center">
          <i class="fa fa-arrow-right text-primary" aria-hidden="true"></i>
          <span class="text-primary "> {{edu.date}}</span>
        </div>
        <div class="col-12 col-lg-6 text-start py-2">
          <span><b>{{edu.name}}</b></span>
          <br/>
          <span>{{edu.description}}</span>
        </div>

      </div>

      <br/>

    </div>
    <h4> <i class="text-primary fa fa-briefcase pb-3" aria-hidden="true"></i> Experience</h4>
    <div>
      <div v-for="exp in experience" class="row">
        <div class="col-12 col-lg-4 align-self-center">
          <i class="fa fa-arrow-right text-primary" aria-hidden="true"></i>
          <span class="text-primary "> {{exp.date}}</span>
        </div>
        <div class="col-12 col-lg-7 text-start py-2">
          <span><b>{{exp.name}}</b></span>
          <br/>
          <pre>{{exp.description}}</pre>
        </div>

      </div>

      <br/>

    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      education:[
        {
          date: 'September 2019-2023',
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
      ],
      experience:[
        {
          date:'April 2022 - June 2022',
          name:'Simplify-ERP',
          description: 'Python Odoo Developer, Skopje \n• Developing ERP solutions \n• Creating responsive frontend views \n• Providing support to maintain existing solutions'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>