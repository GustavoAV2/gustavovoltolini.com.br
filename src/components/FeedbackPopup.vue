<script>
import axios from 'axios';

export default {
  data() {
    return {
      feedbackSent: false,
      showPopup: false,
      visitor: {
        name: "",
        contact: "",
        message: "",
      },
    };
  },
  methods: {
    toThank() {
      this.feedbackSent = true;
    },
    closePopup() {
      this.showPopup = false;
    },
    async postNewVisitor() {
      try {
        let subject = `${this.visitor.contact}\n enviou uma mensagem (Gv Site)`;
        let message = `${this.visitor.name}\n ${this.visitor.contact}\n ${this.visitor.message}`;

        let response = await axios.post("http://localhost:3000/api/visitor", { 'subject': subject, 'message': message });
        
        if (response.status === 200) {
          this.toThank();
          setTimeout(() => {
            this.closePopup();
          }, 2000);
        } else {
          this.handleError();
        }
      } catch (err) {
        console.error(err);
        this.handleError();
      }
    },

    handleError() {
      this.toThank();
      setTimeout(() => {
        this.closePopup();
      }, 2000);
    },
  },
  created() {
    let feedbackRequested = localStorage.getItem("feedbackRequested", false);
    if (feedbackRequested) {
      setTimeout(() => {
        this.showPopup = true;
        localStorage.setItem("feedbackRequested", true);
      }, 100000);
    }
  },
};
</script>

<template>
  <div
    v-if="showPopup"
    data-te-backdrop="false"
    class="fade-in-image fixed left-0 top-12 z-50 h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="popup"
    aria-hidden="true"
  >
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative w-auto opacity-100 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:my-7 min-[576px]:max-w-[500px]"
    >
      <div
        class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600"
      >
        <template v-if="feedbackSent">
          <div
            class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
          >
            <h5
              class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
              id="exampleModalComponentsLabel"
            >
              Obrigado pela mensagem!
            </h5>
          </div>
        </template>
        <template v-else>
          <div
            class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
          >
            <h5
              class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
              id="exampleModalComponentsLabel"
            >
              Deseja enviar um feedback ou mensagem?
            </h5>
            <button
              @click="closePopup()"
              type="button"
              class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              data-te-modal-dismiss
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="relative flex-auto p-4" data-te-modal-body-ref>
            <label
              for="name"
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >Nome</label
            >
            <input
              v-model="visitor.name"
              type="text"
              name="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Seu nome..."
              required
            />

            <label
              for="name"
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >Contato</label
            >
            <input
              v-model="visitor.contact"
              type="text"
              name="contact"
              id="contact"
              class="bg-gray-50 bemail ou telefoner border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Seu email ou telefone..."
              required
            />

            <label
              for="description"
              class="block mt-2 mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >Mensagem</label
            >
            <textarea
              v-model="visitor.description"
              name="description"
              id="description"
              cols="30"
              rows="10"
              placeholder="Sua mensagem..."
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            ></textarea>
          </div>
          <div
            class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
          >
            <button
              @click="closePopup()"
              type="button"
              class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
              data-te-modal-dismiss
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Não, obrigado!
            </button>
            <button
              @click="postNewVisitor()"
              type="button"
              class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700"
              data-te-ripple-color="dark"
            >
              Enviar
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style>
.fade-in-image {
  animation: fadeIn 0.7s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.popup {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}
</style>
