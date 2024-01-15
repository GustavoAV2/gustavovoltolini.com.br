<script>
import HeaderComponent from "../../components/shared/Header.vue";
import HackathonInformation from "../../components/shared/HackathonInformation.vue";
import Carrousel from "../../components/shared/Carrousel.vue"

export default {
  data() {
    return {
      name: "HackaConnection Citi",
      repoUrl: "https://github.com/GustavoAV2/ApiShipmentIntegration",
      teamMembers: {
        members: [
          { user: "GustavoAV2", name: "Gustavo Antunes Voltolini" },
          { user: "jplrhae", name: "Joshua Patrick Loesch Alves" },
        ],
      },
      challenge:
        "Receber arquivo de REMESSA da empresa que solicita geração de QR Code para cobrança, formato CNAB 7502 (Layout Febraban). Transformar cada solicitação de geração de QR Code, recebida no arquivo, em mensagens aceitas pelo formato da pix-api. Após o processamento das solicitações de geração de QR Code, transformar cada resposta no formato correspondente ao arquivo de RETORNO, formato CNAB 750.",
    };
  },
  components: { HeaderComponent, HackathonInformation, Carrousel },
};
</script>

<template>
  <HeaderComponent></HeaderComponent>

  <div class="p-5 md:p-20 md:pt-5">
    <HackathonInformation
      :name="name"
      :repoUrl="repoUrl"
      :team="JSON.stringify(this.teamMembers)"
      :challenge="challenge"
      youtubeUrl="Ch7t2-1auOA"
      position="2"
      date="18/06/2023"
    />

    <div
      class="flex flex-col pt-[0.7rem] md:p-40 pb-3 md:pt-[0.7rem] text-center text-xl w-full"
    >
      <dt class="opacity-100 font-bold uppercase tracking-widest text-sm md:text-lg mb-1">
        Processador de arquivos CNAB (Solução apresentada)
      </dt>
      <div class="flex justify-center">
        <img
          src="/images/Citi/SitiSolution-Arquitetura.jpg"
          alt=""
          class="md:w-2/5 shadow-md"
        />
      </div>
      <p class="text-left">
        <strong>API de cobrança:</strong>
        Esta é a API principal para o processamento de Remessa e a criação das
        cobranças e QRCode. A API recebe requisições tanto da Interface FrontEnd
        pelo usuário, quanto do worker que está monitorando o diretório de
        arquivos de remessa. A API tem a responsabilidade de interpretar os
        arquivos, gerar o QRCode de cobrança e criar as respostas
        correspondentes no formato do arquivo de retorno CNAB 750. Após o
        processamento, o arquivo de retorno é salvo em um diretório de saída.
      </p>

      <div class="flex justify-center">
        <img src="/images/Citi/Fluxograma-Api.jpg" alt="" class="md:w-2/5 shadow-md" />
      </div>

      <br />
      <p class="text-left">
        <strong>Monitoramento de diretório de arquivos de remessa</strong>:Este
        projeto consiste em um script Python que utiliza a biblioteca watchdog
        para monitorar um diretório específico em busca de novos arquivos de
        remessa. Quando um novo arquivo é detectado, o arquivo é coletado e
        enviado para a API De Cobrança onde esse arquivo será processado. Este
        processador é responsavel por monitorar e encaminhar os arquivos a API,
        que por sua vez tem a responsabilidade de interpretar os arquivos, gerar
        o QRCode de cobrança e criar as respostas correspondentes no formato do
        arquivo de retorno CNAB 750. Após o processamento, o arquivo de retorno
        é salvo em um diretório de saída.
      </p>

      <div class="flex justify-center">
        <img
          src="/images/Citi/Fluxograma-Process.jpg"
          alt=""
          class="md:w-2/5 shadow-md"
        />
      </div>

      <br />
      <p class="text-left">
        <strong>Interface para o usuário (Frontend):</strong>Repositório
        Frontend Interface frontend desenvolvida com React
      </p>
      
      <div id="media" class="pt-[2rem]">
        <h2 class="opacity-100 font-bold uppercase tracking-widest text-sm md:text-lg mb-1">
          Mídias do dia do evento 
        </h2>
        <Carrousel 
        prefix="Citi/Memories/"
        images="Citi-1.JPEG;Citi-2.JPEG"
        />
      </div>
    </div>
    </div>
</template>
