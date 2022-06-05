<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
* {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
    overflow-y: scroll;
}
::-webkit-scrollbar {
  display: none;
}
body {
  background-color: #030e1b;
  color: #FFF;
}
a {
  color: #2aeb74;
  text-decoration: none;
}
button {
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
  background-color: #2aeb74;
  font-size: 1rem;
  color: #030e1b;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 900;
}
</style>
