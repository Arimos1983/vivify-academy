<template>
  <div >
    <h1>Contact List</h1>
    <table>
      <thead>
        <th>Name</th>
        <th>Email</th>
      </thead>
      <tbody>
        <tr v-for="(contact, key) in contacts" :key="key">
          <td>{{contact.name}}</td>
          <td>{{contact.email}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ContactList',
  data(){
    return {
      contacts: [
        {name: "Jhon", email: "jhon@gmail.com"},
        {name: "Jack", email: "jack@gmail.com"},
        {name: "Susan", email: "susan@gmail.com"},
        {name: "Jasmin", email: "jasmin@gmail.com"}
      ]
    };
  }
  
}
</script>

