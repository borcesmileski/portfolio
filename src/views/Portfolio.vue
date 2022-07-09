<template>
  <main class="container mt-4" style=": ">

    <Header/>

    <div class="row mt-5">
      <div class="col-12 col-lg-7 offset-lg-1 ">
        <div class="pe-5">
          <h4 class="pb-2" ><i class="text-primary fa fa-user-circle-o" aria-hidden="true"></i> About me</h4>
          <p>I am a software engineer who likes to upgrade himself constantly with new knowledge and experiences.
            I would describe myself as persistent because whenever I want something I want to achieve it.
            I see myself as a successful web developer in the future. </p>
        </div>

        <Education/>
      </div>

      <RightBar/>

    </div>
  </main>
</template>

<script>
import Header from "@/components/Header";
import RightBar from "@/components/RightBar";
import Education from "@/components/Education";
export default {

  name: 'Portfolio',
  components:{
    Header: Header,RightBar,Education
  },
  methods:{
      changeColor(event){
        $primary: '#000080';
        return console.log( this.key)
      }
  },
  data() {
    return {
      key:'',
      color:'white'
    }
  }
}
</script>