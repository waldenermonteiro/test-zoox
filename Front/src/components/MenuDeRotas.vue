<template>
  <div>
    <b-card-text title="Card Title" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <b-nav-item to="/" exact exact-active-class="active"
            >Início</b-nav-item
          >
          <b-nav-item to="/estados" exact exact-active-class="active"
            >Estados</b-nav-item
          >
          <b-nav-item to="/cidades" exact exact-active-class="active"
            >Cidades</b-nav-item
          >
        </b-nav>
      </b-card-header>

      <b-card-body class="text-center">
        <slot></slot>
      </b-card-body>
    </b-card-text>
  </div>
</template>
<script></script>
