<script>
import HeaderComponent from "../../components/shared/Header.vue";

export default {
  components: { HeaderComponent },
};
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="p-5 md:p-20 md:pt-5">
    <div class="flex flex-row justify-center text-center">
      <h1
        class="text-2xl md:text-4xl lg:text-4xl font-bold leading-tight md:leading-[1em] mb-10"
      >
        HackaConnection Citi
      </h1>
    </div>

    <div
      class="flex flex-col md:flex-row md:pt-[0.7rem] md:p-40 md:pb-[0.7rem]"
    >
      <div class="mr-4">
        <div class="w-max mb-2">
          <a
            href="https://github.com/GustavoAV2/ApiShipmentIntegration"
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-2 rounded-2xl p-4 m-0 pt-0 pb-0 border border-[#181717] text-[#181717] hover:bg-[#181717] hover:text-[#F6F8FA]"
          >
            Repositorio
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path>
            </svg>
          </a>
        </div>

        <dl class="col-span-6 lg:col-span-4 pt-[0.7rem] w-max">
          <dt class="opacity-100 font-bold uppercase tracking-widest text-xs">
            Quem participou deste projeto?
          </dt>
          <dd class="text-xl">
            <ul class="my-2 space-y-4">
              <li class="flex items-center space-x-2">
                <div
                  class="w-7 h-7 flex-shrink-0 bg-gray-100 rounded-full overflow-hidden"
                >
                  <img
                    class="object-cover"
                    src="https://github.com/GustavoAV2.png"
                    alt="Idan Gazit"
                  />
                </div>
                <a
                  class="hover:underline"
                  target="_blank"
                  href="//github.com/GustavoAV2"
                  >Gustavo Antunes Voltolini</a
                >
              </li>
              <li class="flex items-center space-x-2">
                <div
                  class="w-7 h-7 flex-shrink-0 bg-gray-100 rounded-full overflow-hidden"
                >
                  <img
                    class="object-cover"
                    src="https://github.com/jplrhae.png"
                    alt="Amelia Wattenberger"
                  />
                </div>
                <a
                  class="hover:underline"
                  target="_blank"
                  href="//github.com/jplrhae"
                  >Joshua Patrick Loesch Alves</a
                >
              </li>
            </ul>
          </dd>
        </dl>
      </div>

      <div class="pb-8 leading-relaxed text-2xl pt-[0.7rem]">
        <dt class="opacity-100 font-bold uppercase tracking-widest text-xs">
          Desafio proposto:
        </dt>
        <p>
          Receber arquivo de REMESSA da empresa que solicita geração de QR Code
          para cobrança, formato CNAB 7502 (Layout Febraban). Transformar cada
          solicitação de geração de QR Code, recebida no arquivo, em mensagens
          aceitas pelo formato da pix-api. Após o processamento das solicitações
          de geração de QR Code, transformar cada resposta no formato
          correspondente ao arquivo de RETORNO, formato CNAB 750.
        </p>
      </div>
    </div>

    <div
      class="flex flex-col pt-[0.7rem] md:p-40 md:pt-[0.7rem] text-center text-xl w-full"
    >
      <dt class="opacity-100 font-bold uppercase tracking-widest text-xs mb-1">
        Processador de arquivos CNAB (Solução apresentada)
      </dt>
      <div class="flex justify-center">
        <img
          src="/images/Citi/SitiSolution-Arquitetura.jpg"
          alt=""
          class="md:w-2/5"
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
      <img src="/images/Citi/Fluxograma-Api.jpg" alt="" />

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
      <img src="/images/Citi/Fluxograma-Process.jpg" alt="" />

      <br />
      <p class="text-left">
        <strong>Interface para o usuário (Frontend):</strong>Repositório
        Frontend Interface frontend desenvolvida com React
      </p>
    </div>
  </div>
</template>
