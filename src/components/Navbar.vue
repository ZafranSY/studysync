<template>
  <aside class="navbar">
    <div class="logo">
      <img src="../assets/utm_logo.png" alt="UTM Logo" />
    </div>
    <nav>
      <ul>
        <li>Main</li>
        <li><a href="#">All</a></li>
        <li><a href="#">Favourite</a></li>
        <li><a href="#">Shared with me</a></li>
        <li><a href="#">New</a></li>
        <li>Settings</li>
        <li><a href="#">Notification</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>
    <div class="theme-toggle">
      <label>
        <input type="checkbox" @change="$emit('toggle-theme')" />
        <span>Toggle Theme</span>
      </label>
    </div>
  </aside>
</template>

<script>
export default {
  name: "NavbarView",
};
</script>

<style scoped>
.navbar {
  width: 200px;
  background: var(--bg-color);
  color: var(--text-color);
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
}

.logo img {
  width: auto;
  height: 150px;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  margin-bottom: 10px;
  font-weight: bold;
}

.theme-toggle {
  margin-top: auto;
}
</style>
