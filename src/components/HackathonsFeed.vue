<script>
import HackathonCard from './shared/HackathonCard.vue'

export default {
  components: { HackathonCard },
  methods: {
    isMobile() {
      console.log(screen.width)
      if (screen.width <= 760) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<template>
  <div class="flex flex-col items-center align-middle w-full p-5 pt-2">
    <template v-if="isMobile()">
      <HackathonCard
        name="Hackathon Samba Meets Waltz"
        projectName="Nexus"
        description="Nexus conecta talentos no campo de microeletrônica e semicondutores a empresas em busca de seus talentos,
                 enquanto também oferece uma comunidade ao redor deles. O usuário que procura conhecimento no campo, 
                 exposição a empresas ou contribuir para a comunidade pode acessar o aplicativo por meio de qualquer navegador."
        position="third"
        srcImage="nexus.png"
        date=""
      ></HackathonCard>
      <HackathonCard
        name="HackaConnection Citi"
        projectName="Processador de arquivos CNAB"
        description="Processamento de REMESSA CNAB 750 e criação de cobranças e QRCode"
        position="second"
        srcImage="easyb2b-citi.png"
        date=""
      ></HackathonCard>
      <HackathonCard
        name="Hackathon São Carlos"
        projectName="Aplicação faseada de RPA para Simplificação de tarefas"
        description="Aplicação faseada para simplificar os processos internos da BestCenter, a empresa
                  patrocinadora do Hackathon."
        position="first"
        srcImage="saocarlos.png"
        date=""
      ></HackathonCard>

      <HackathonCard
        name="Hackathon Banco Digio"
        projectName="Aplicação faseada de RPA para Simplificação de tarefas"
        description="Protótipo de script com Machine Learning"
        position="third"
        srcImage="digio-data&analitycs.png"
        date=""
      ></HackathonCard>
    </template>

    <template v-else>
      <div class="flex flex-row">
        <HackathonCard
          name="Hackathon Samba Meets Waltz"
          projectName="Nexus"
          description="Nexus conecta talentos no campo de microeletrônica e semicondutores a empresas em busca de seus talentos,
                 enquanto também oferece uma comunidade ao redor deles. O usuário que procura conhecimento no campo, 
                 exposição a empresas ou contribuir para a comunidade pode acessar o aplicativo por meio de qualquer navegador."
          position="third"
          srcImage="nexus.png"
          date="05/09/2023"
        ></HackathonCard>
        <HackathonCard
          name="HackaConnection Citi"
          projectName="Processador de arquivos CNAB"
          description="Processamento de REMESSA CNAB 750 e criação de cobranças e QRCode"
          position="second"
          srcImage="easyb2b-citi.png"
          date="18/06/2023"
        ></HackathonCard>
      </div>

      <div class="flex flex-row">
        <HackathonCard
          name="Hackathon Banco Digio"
          projectName="Aplicação faseada de RPA para Simplificação de tarefas"
          description="Protótipo de script com Machine Learning"
          position="third"
          srcImage="digio-data&analitycs.png"
          date="11/11/2022"
        ></HackathonCard>

        <HackathonCard
          name="Hackathon São Carlos"
          projectName="Aplicação faseada de RPA para Simplificação de tarefas"
          description="Aplicação faseada para simplificar os processos internos da BestCenter, a empresa
                  patrocinadora do Hackathon."
          position="first"
          srcImage="saocarlos.png"
          date="04/11/2021"
        ></HackathonCard>
      </div>
    </template>
  </div>
</template>
