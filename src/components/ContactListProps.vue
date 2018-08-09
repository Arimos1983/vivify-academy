<template>
  <div>
      <router-link
      v-for="(contact, index) in contactsList" :key="index" 
      :to="{name: 'contact-details', params: {id: contact.id}}"
      tag="button"
      exact-active-class="active"
      >
      {{contact.name}}
      </router-link>
    <!-- <table>
      <thead>
        <th>Name</th>
        <th>Email</th>
      </thead>
      <tbody>
        <tr v-for="contact in contactsList" :key="contact.id">
          <td v-if="contact.name == 'Jhon'">{{'mark'}}</td>
          <td v-else>{{contact.name}}</td>
          <td>{{contact.email}}</td>
          <td>
            <button @click="deleteContact(contact)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
export default {
  props: ['contactsList']
  
}
</script>

