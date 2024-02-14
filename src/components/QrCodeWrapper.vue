<template>
  <div class="content">
    <div class="qrcode">
      <slot name="qrcode"></slot>
    </div>
    <div>
      <h1>
        <slot name="header"></slot>
      </h1>
      <p>
        <slot name="text"></slot>
      </p>
    </div>
  </div>
</template>
<style scoped>
div.content {
  background-color: white;
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 320px;
}

div.qrcode {
  display: flex;
  justify-content: center;
}

div.content h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  padding: 0 16px;
  margin: 16px 0;
}

div.content p {
  font-family: 'Open Sans', sans-serif;
  color: #3c3c3c;
  text-align: center;
}
</style>
