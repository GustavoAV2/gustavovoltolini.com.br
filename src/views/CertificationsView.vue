<template>
  <HeaderComponent />
  <div class="flex flex-col min-h-screen">

    <section class="flex flex-col md:flex-row justify-center p-8">
      <CertificationCard
        v-for="(cert, index) in certifications.filter(cert => cert.allow)"
        :key="index"
        :imgUrl="cert.img"
        :title="cert.name"
        :description="cert.description"
      />
    </section>
  </div>
</template>

<script>
import HeaderComponent from "../components/shared/Header.vue";  
import CertificationCard from "../components/CertificationCard.vue";

export default {
  components: { HeaderComponent, CertificationCard },
  data() {
    return {
      certifications: [
        {
          name: "Microsoft Certified: Azure Fundamentals",
          description:
            "Demonstra conhecimento em conceitos de nuvem, serviços principais do Azure e governança.",
          img: "/images/Certifications/azure-fundamentals.png",
          allow: true
        },
        {
          name: "Google Cloud Certified: Cloud Digital Leader",
          description:
            "Valida conhecimentos fundamentais sobre produtos e serviços do Google Cloud.",
          img: "/images/Certifications/google-cloud.png",
          allow: false
        }
      ]
    };
  }
};
</script>
