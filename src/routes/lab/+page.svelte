<script lang="ts">
  import Table from "$lib/components/Table.svelte"

  const cols = [{
    name: "name",
    label: "Nombres"
  }, {
    name: "age",
    label: "Edad"
  }, {
    name: "sex",
    label: "Sexo"
  }, {
    name: "email",
    label: "Correo"
  }, {
    name: "phone",
    label: "Teléfono"
  }, {
    name: "lastname",
    label: "Apellido"
  }]

  const rows = [{
    name: "Raul",
    age: 27,
    sex: "male"
  }, {
    name: "Andrea",
    age: 26,
    sex: "female"
  }]
</script>

<div class="overflow-auto w-full h-[100px]">
  <Table {cols} {rows} />
</div>