<template>
<v-container fluid>
<v-layout align-space-around justify-space-around row wrap d-flex>
<v-flex xs3>
  <v-card raised height="150px">
  	<v-card-text>
  		<div class="al">
  		   <v-icon color="primary" x-large>access_alarm </v-icon>
  	    </div>
  	    <p class="alt"> Pending Orders </p>
  	    <h4 class="alh primary--text"> 14 </h4>
  	</v-card-text>
  </v-card>
  </v-flex>
  <v-flex xs3>
  	<v-card raised height="150px">
  	<v-card-text>
  		<div class="al">
  		   <v-icon color="error" x-large>access_alarm </v-icon>
  	    </div>
  	    <p class="alt">Invoices Overdue </p>
  	    <h4 class="alh primary--text"> 14 </h4>
  	</v-card-text>
  </v-card>
  </v-flex>
  <v-flex xs3>
  	<v-card raised height="150px">
  	<v-card-text>
  		<div class="al">
  		   <v-icon color="green" x-large>access_alarm </v-icon>
  	    </div>
  	    <p class="alt">Orders Processed </p>
  	    <h4 class="alh primary--text"> 3 </h4>
  	</v-card-text>
  </v-card>
  </v-flex>
 </v-layout>
 <v-layout row wrap pt-4>
 	<v-flex xs12>
 	 <v-card flat>
 	 	<v-card-title>
 	 		<h3 class="[rimary--text"> Notifications </h3>
 	 	</v-card-title>
 	 	<v-card-text>
	 		<v-card>
	 			<v-card-text mb-2>
	 				<div class="text primary--text not"> James Buyers </div> 
	 				<div class="not" style="text-align:center"> 20000 USD </div>
	 				<div class="not "><v-btn depressed round small color="warning"> Due </v-btn> </div> 
	 				<div class="not font-weight-light font-italic" style="text-align:right"> 2 hours ago </div>
	 			</v-card-text>
	 		</v-card>
	 		<v-card>
	 			<v-card-text>
	 				<div class="text primary--text not text-truncate"> Brandon Company </div> 
	 				<div class="not text-truncate" style="text-align:center"> 3000 USD </div>
	 				<div class="not"><v-btn depressed round small color="green"> PAID </v-btn> </div> 
	 				<div class="not font-weight-light font-italic text-truncate" style="text-align:right"> 4 hours ago </div>
	 			</v-card-text>
	 		</v-card>
 	    </v-card-text>
 	 </v-card>
    </v-flex>
</v-layout>
</v-container>
</template>

<script>
  export default {
  }
</script>
<style>
.al {
	margin: auto;
	width: 40px;

}

.alt {
	text-align: center;
	margin: auto;
	width: 120px;
	padding-top: 10px;
	padding-bottom: 10px;
}

.alh {
	text-align: center;
	width: 10px;
	margin: auto;
}

.text {
	width: 200px;
}
.not {
	display:inline-block; 
	width: 200px
}
</style>
