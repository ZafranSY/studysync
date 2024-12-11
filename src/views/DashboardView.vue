<template>
  <main class="dashboard">
    <header>
      <h1>Hi, ZAFRAN BIN MUHAMAD SAKOWI! 👋</h1>
    </header>
    <NavbarView />
    <section>
      <h2>Categories</h2>
      <div class="filters">
        <select>
          <option value="all">All</option>
        </select>
        <input type="text" placeholder="Search..." />
        <select>
          <option value="section">Sort by Section name</option>
        </select>
        <select>
          <option value="semester">Semester and Sessions</option>
        </select>
      </div>
      <div class="categories">
        <CategoryCard title="Course Coordination" img="logo.png" />
        <CategoryCard title="Course File" img="logo.png" />
      </div>
    </section>
  </main>
</template>

<script>
import CategoryCard from "@/components/CategoryCard.vue";
import NavbarView from "../components/Navbar.vue"; // relative path

export default {
  name: "DashboardView", // Correctly name your component
  components: {
    CategoryCard,
    NavbarView, // Declare NavbarView component here
  },
};
</script>

<style scoped>
.body {
  width: 10w; /* For 100% screen width */
}
.dashboard {
  flex: 1;
  padding: 20px;
  background: var(--bg-color);
  color: var(--text-color);
  width: 100vw;
}

header h1 {
  font-size: 24px;
}

.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.categories {
  display: grid;
  grid-template-columns: repeat(3, 0.4fr);
  gap: 5px;
}
section {
  position: relative;
  left: 200px;
}
</style>
