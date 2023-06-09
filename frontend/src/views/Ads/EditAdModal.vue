<template>
    <v-dialog v-model="modal" width="400px">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="warning">
                Edit</v-btn></template>
        <v-card class="pa-3">
            <v-row justify="center">
                <v-col cols="12">
                    <v-card-title>
                        <h1 class="text--primary">Edit Ad</h1>
                    </v-card-title>
                </v-col>
            </v-row>

            <v-row justify="center">
                <v-col cols="12">
                    <v-card-text>
                        Lorem ipsum.
                    </v-card-text>
                </v-col>
            </v-row>

            <v-row justify="center">
                <v-col cols="12">
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <modal-dialog></modal-dialog>
                        <v-btn class="success">Buy</v-btn>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>
    
<script>
import EditAdModal from '../EditAdModal'
export default {
    props: ['id'],
    computed: {
        ad() {
            const id = this.id
            return this.$store.getters.adById(id)
        }
    },
    components: {
        'modal-dialog': EditAdModal
    }
} 
</script>


    