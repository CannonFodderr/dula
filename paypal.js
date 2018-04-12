paypal.Button.render({
  env: 'sandbox', // Or 'sandbox',
  client: {
    sandbox:    'AU-K2ECdHjbn0fUY4_23VNJnGQdtM15HTz8KCZI9AKwyrlhN9dymkwvqfdBbXwZk4jYjBApwohoG1-cg',
    production: 'xxxxxxxxx'
},

funding: {
    allowed: [ paypal.FUNDING.CARD ],
    disallowed: [paypal.FUNDING.ELV]
},
  locale: 'he_IL',

  commit: true, // Show a 'Pay Now' button

  style: {
    fundingicons: true,
    color: 'blue',
    size: 'responsive',
    shape: 'rect'
  },




  payment: function(data, actions) {
    return actions.payment.create({
        payment: {
            transactions: [
                {
                    amount: { total: '100.00', currency: 'ILS' }
                }
            ]
        }
    });
  },

  onAuthorize: function(data, actions) {
    return actions.payment.execute().then(function(payment) {
        alert('תודה נתראה בסדנה!');
        // The payment is complete!
        // You can now show a confirmation message to the customer
    });
  },

  onCancel: function(data, actions) {
    /* 
     * Buyer cancelled the payment 
     */
  },

  onError: function(err) {
    /* 
     * An error occurred during the transaction 
     */
  }
}, '#paypal-button');
