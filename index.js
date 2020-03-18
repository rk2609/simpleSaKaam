let faqList = [
{
	q: 'For which all destinations are the discounted prices available?',
	a: 'You can avail the discounted prices for trips going to Meghalaya, Spiti, Ladakh & Bhutan Group Departures.'
},{
	q: 'If I want to bring my own group of friends and customise my trip, would the discounted prices still be applicable?',
	a: 'The discounted prices are valid only for group departures and not for customised Trips. However, you can purchase multiple vouchers for your friends too and can join our scheduled group departures with your them.'
},{
	q: 'The trips entitled for the offer should be departing during which timeframe?',
	a: 'The offer can be availed on batches offered by WanderOn from 1 Jan 2021 - 31 Dec 2021.'
},{
	q: 'Can I transfer my booking to someone else?',
	a: 'Yes you can!This offer is transferable. Trip can be availed by any relatives, friends etc.'
},{
	q: 'How many people can travel using a single voucher?',
	a: 'One voucher is valid for one Pax booking for one batch only.'
},{
	q: 'Suppose I have purchased the voucher and would like to avail that on any other trip, would that be possible?',
	a: 'If you wish to use the Voucher for trips to destinations other than the ones mentioned, it is possible to avail it at regular prices of those trips.'
},{
	q: 'Before what time should I finalise my dates or batch in which I would like to join?',
	a: 'Availing a Trip is subject to availability of seats in a batch, hence, we recommend you to inform at least a month prior to departure date.'
},{
	q: 'Is there a minimum count on the total no. of people for any particular batch?',
	a: 'The conducting of trips is subject to a requirement of min 5 Pax in a batch.'
},{
	q: 'What if I fail to utilise my voucher within the offer period?',
	a: 'If the amount is not utilised within the offer period, it can be utilised for WanderOn Group Departures Jan 2022 onwards at regular prices as updated on the WanderOn website regularly.'
},{
	q: 'What if I have selected my destination and batch but would like to cancel for the trip?',
	a: 'Once the voucher has been applied to book a seat for any batch selected by the person, cancellation policy will be applicable as per actual.'
},{
	q: 'How many vouchers are available in total?',
	a: 'The number of Vouchers are limited to 100 only.'
}];

let faqs = document.querySelector('.faq_container');
for(let i=0; i<faqList.length; i++) {
	let s = '';
	s += '<div class="faq_item"><div class="faq_item_que"><div class="faq_item_que_mark">Q</div><div class="faq_item_que_text">'
	s += faqList[i].q;
	s += '</div><div class="faq_item_que_sign"><img src="./plus.svg" class="faq_item_que_image"></div></div><div class="faq_item_ans"><div class="faq_item_ans_text">'
	s += faqList[i].a;
	s += '</div></div>'
	faqs.innerHTML += s;
}

let currentFaq = -1;
function faqClick() {
let que = document.querySelectorAll('.faq_item_que');
let ans = document.querySelectorAll('.faq_item_ans');
let signs = document.querySelectorAll('.faq_item_que_sign');
for (let i=0; i<que.length; i++) {
	que[i].addEventListener('click', () => {
		if(currentFaq === -1) {
			ans[i].style.height = "auto";
			ans[i].style.color = "#ffffff";
			ans[i].style.marginBottom = "20px";
			que[i].style.marginTop = "25px";
			ans[i].classList.add("faq_item_ans_active");
			que[i].classList.add("faq_item_que_active");
			signs[i].innerHTML = '<img src="./minus.svg" class="faq_item_que_image"></div>';
			currentFaq = i;
		} else if(currentFaq === i) {
			ans[currentFaq].style.height = "0px";
			ans[currentFaq].style.color = "#00000000";
			ans[i].style.marginBottom = "0px";
			que[i].style.marginTop = "5px";
			ans[currentFaq].classList.remove("faq_item_ans_active");
			que[currentFaq].classList.remove("faq_item_que_active");
			signs[currentFaq].innerHTML = '<img src="./plus.svg" class="faq_item_que_image"></div>';
			currentFaq = -1;
		} else {
			ans[currentFaq].style.height = "0px";
			ans[currentFaq].style.color = "#00000000";
			ans[currentFaq].style.marginBottom = "0px";
			que[currentFaq].style.marginTop = "5px";
			ans[currentFaq].classList.remove("faq_item_ans_active");
			que[currentFaq].classList.remove("faq_item_que_active");
			signs[currentFaq].innerHTML = '<img src="./plus.svg" class="faq_item_que_image"></div>';

			ans[i].style.height = "auto";
			ans[i].style.color = "#ffffff";
			ans[i].style.marginBottom = "20px";
			que[i].style.marginTop = "25px";
			ans[i].classList.add("faq_item_ans_active");
			que[i].classList.add("faq_item_que_active");
			signs[i].innerHTML = '<img src="./minus.svg" class="faq_item_que_image"></div>';
			currentFaq = i;
		}
	})
}
}

faqClick();