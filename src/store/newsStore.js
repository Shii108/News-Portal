import { defineStore } from "pinia";
export const useNewsStore = defineStore("news", {
  state: () => ({
    articles: [],
    loading: false,
  }),
  actions: {
    async fetchNews() {
      this.loading = true;
      try {
        const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2025-03-18&sortBy=publishedAt&apiKey=9e2e92b80cd644d5872e01992c6543c1")
        const data= await response.json();
        this.articles = data.articles;
        console.log(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
