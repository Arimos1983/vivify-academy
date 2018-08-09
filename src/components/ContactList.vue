<template>
  <div >
    <h1>{{title}}</h1>
    <form @submit.prevent>
      <label>Name</label>
      <input v-model="newContact.name" type="text" placeholder="name"> <br>
      <label>Email</label>
      <input v-model="newContact.email" type="text" placeholder="email"> <br>
      <button @click="addContact" type="submit">Add Contact</button>
    </form>
    <!-- <table>
      <thead>
        <th>Name</th>
        <th>Email</th>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact.id">
          <td v-if="contact.name == 'Jhon'">{{'mark'}}</td>
          <td v-else>{{contact.name}}</td>
          <td>{{contact.email}}</td>
          <td>
            <button @click="deleteContact(contact)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table> -->
    <button @click="callParentMethod()">Call parent</button><br>
    <router-link to="/contacts">Contacts</router-link><br>
    <router-link to="/add-contact">AddContacts</router-link>
  </div>
</template>

<script>
export default {
  name: 'ContactList',
  props: ['title'],

  data(){
    return { 
      newContact: {},
      contacts: [
        {id: 1, name: "Jhon", email: "jhon@gmail.com"},
        {id: 2, name: "Jack", email: "jack@gmail.com"},
        {id: 3, name: "Susan", email: "susan@gmail.com"},
        {id: 4, name: "Jasmin", email: "jasmin@gmail.com"}
      ]

      
    };
  },

  methods: {

    callParentMethod(){
      this.$emit('parentMtd', 'Aleksandar');
    },
    addContact()
    {
      
      this.contacts.push(this.newContact);
      this.newContact = {};
    },
    deleteContact(contact)
    {
      let indexOfContactToDelete = this.contacts.indexOf(contact);
      this.contacts.splice(indexOfContactToDelete, 1);
    }
  }
  
}
</script>

