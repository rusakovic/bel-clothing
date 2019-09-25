import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/logo.svg';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	// stripe want to see prices in cents. so, we multiply by 100
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_frIEpaKIw7lECFggqwoOaLp900NzRv1FcB';

	const onToken = (token) => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token: token
			}
		})
			.then((response) => {
				alert('payment successful');
			})
			.catch((error) => {
				console.log('Payment error: ', JSON.parse(error));
				alert('there was an issue with your payment. Please sure you use the proviede credit card');
			});
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Belarusian Clothes"
			billingAddress
			shippingAddress
			image={logo}
			description={`Your total is $${price}`}
			amout={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
