<template>
  <div>
    <ContactListProps :contactsList='contacts'/>
    <ContactDetails :contact='contact'/>
    
  </div>
</template>

<script>
import ContactListProps from '../components/ContactListProps';
import ContactDetails from '../components/ContactDetails';
export default {
  name: 'Contacts',
  components: {
    ContactListProps,
    ContactDetails
  },
  
  data()
  {
    return {
      contacts: [
         { id: 1, name: 'John Doe', email: 'johndoe@example.com', number: '555-12345' },
         { id: 2, name: 'Pera Peric', email: 'peraperic@example.com', number: '555-54321' },
         { id: 3, name: 'Nenad Vujicic', email: 'nenad.v@example.com', number: '555-67890' }
       ]
    };
  },
  computed:{
    contact()
    {
      let routeParam = this.$route.params.id;
      return this.contacts.find(contact => contact.id == routeParam)
      
    }
  }
  
}
</script>

