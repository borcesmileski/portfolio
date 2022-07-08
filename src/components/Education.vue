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
    <h4> <i class="text-primary fa fa-briefcase " aria-hidden="true"></i> Experience</h4>
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



    </div>
    <h4> <i class="text-primary fa fa-code pb-2" aria-hidden="true"></i> Skills</h4>
    <div class="row" v-for="skill in skills">
        <div class="col-4 col-lg-3 ps-lg-5">
          {{skill.name}}
        </div>
        <div class="col-6 col-lg-2">
          <span v-for="i in skill.stars">
            <i class="text-primary fa fa-circle" aria-hidden="true"></i>
          </span>
        </div>
    </div>

    <h4> <i class="text-primary fa fa-battery-full pb-3 pt-4" aria-hidden="true"></i> Additional activities</h4>
    <div class="col-lg-9">
      <p>
        <i class="fa fa-bolt text-primary ms-lg-4" aria-hidden="true"></i><span class="ps-lg-2"> Football, basketball</span>
      </p>
      <p>
        <i class="fa fa-bolt text-primary ms-lg-4" aria-hidden="true"></i><span class="ps-lg-2"> Volunteering at FoodBank</span>
      </p>
      <p>
        <i class="fa fa-bolt text-primary ms-lg-4" aria-hidden="true"></i><span class="ps-lg-2"> Going places or a specific interest in
         culture  of particular countries</span>
      </p>
      <p>
        <i class="fa fa-bolt text-primary ms-lg-4" aria-hidden="true"></i><span class="ps-lg-2"> Cinema, literature, art and music</span>
      </p>
    </div>

    <h4> <i class="text-primary fa fa-trophy pb-3 pt-4" aria-hidden="true"></i>Achievements</h4>
    <div>
      <p>
        <i class="fa fa-certificate text-primary ms-lg-4" aria-hidden="true"></i><span class="ps-lg-2"> Third place in Game Design How to? 2020</span>
      </p>
      <p>
        <i class="fa fa-certificate text-primary ms-lg-4" aria-hidden="true"></i><span class="ps-lg-2"> Certificate for participation in Young Men's Leadership Project - YMLP - 2017</span>
      </p>
      <p>
        <i class="fa fa-certificate text-primary ms-lg-4" aria-hidden="true"></i><span class="ps-lg-2"> Third place on regional competition in Mathematics 2015</span>
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      color:'ff',
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
      ],
      skills:[
        {
          name:'Python',
          stars:5
        },
        {
          name:'Java',
          stars:5
        },
        {
          name:'C',
          stars:5
        },
        {
          name:'C++',
          stars:5
        },
        {
          name:'Git',
          stars:5
        },
        {
          name:'C#',
          stars:4
        }
      ],
      activities:[
        {
          activity:'Football, basketball'
        },{
          activity:'Volunteering at FoodBank'
        },{
          activity:'Going places or a specific interest in the language and culture of particular countries'
        },{
          activity:'Cinema, literature, art and music'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>