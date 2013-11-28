//inserts header on each page
$(function(){
	$("#header").load("header.html"); 
});

// Mobile menu slider
function toggle_menu() {
	$(".menu").toggleClass('open');
}
      
// general modal show/hide	
function show_modal() {
	$('.modal').fadeIn();
}

function hide_modal(){
	$('.modal').attr('style','display:none');
}		    

function send_message() {
	hide_modal();
	$('#top_banner').show(200).delay(2000).hide(200);
}


//Search page
$('.advisor_entry').attr('onclick', "location.href='advisor.html'");

function multi_message(target) {												//sets each advisor entry to add the advisor's name to the recipients list per 'onclick'
	$('#top_banner').show(200);
	//alert('To write multiple recipients simultaneously, select them and press OK to begin composing');
	//alert($(target).attr('id'))
	$('.advisor_entry').attr('onclick', "add_recipient(this)");	
}


window.recipients=['Jim', 'Bob'];									//object array with names of all recipients to receive this message

function add_recipient(target) {									//
	var name= $(target).select('.name_block .cell').attr('class');
	$(target).getElementsByClassName('numbers').remove();
}

function multi_message_confirm() {
	show_modal();
	for (var i=0; i<recipients.length; i++) {		//populates the 'To' field with the names of all advisors receiving this message
		$('#advisor_name').append(recipients[i])
		
		if (i!=recipients.length-1){				//adds comma after each name except the last advisor's name
		$('#advisor_name').append(', ')
		}	
	}

}

function multi_message_cancel() {
	$('#top_banner').hide(200);
	$('.advisor_entry').attr('onclick', "location.href='advisor.html'");

}
//Question page

//Upvote functionality
$('.upvote').click(function(){
	$(this).toggleClass('voted')})

// New answer
function reply() {
	$('.new_comment').attr('style','display:block');
	$('#reply_button').attr('style','display:none');	
	$('.new_comment textarea').focus();
	$(window).scrollTop($(document).height());

}

function cancel_reply() {
	$('.new_comment').attr('style','display:none');
	$('#reply_button').attr('style','');	
	
}
function confirm_reply() {
	var comment= $('.new_comment textarea').val();

	if (comment.length==0) 
		{$('.new_comment textarea').attr('placeholder','Reply cannot be blank');}
	else {	
	$('#reply_button').attr('style','');	
	$('.new_comment .comment_body').prepend('p').text(comment);	
	}
}

function followup() {
	$('.followup_button').attr('style','display:none');
	$('.followup_entry').attr('style','display:inline');	
	$('.followup_section').append("<div class='comment_reply footnote new'></div>");	
	$('.new').append("<textarea class='seamless' placeholder='Type your comment here'></textarea>");
	$('.seamless').toggleClass('open');
	$('.new textarea').focus();
}

function cancel_followup() {
	$('.followup_button').attr('style','display:inline');
	$('.followup_entry').attr('style','display:none');
	$('.new').remove();
}

function confirm_followup() {
	var followup=$('.new textarea').val();

	if (followup.length==0) 
		{$('.new textarea').attr('placeholder','Comment cannot be blank');}
		
	else {	
		$('.followup_button').attr('style','display:inline');
		$('.followup_entry').attr('style','display:none');
		
		$('.new').append(followup);
		$('.new textarea').remove();
		$('.new').removeClass('new');
	}
}

// Inbox functionality

function reply_message() {
	$('.followup_button').attr('style','display:none');
	$('.followup_entry').attr('style','display:inline');	
	$('.followup_section').append("<div class='comment_reply new'></div>");	
	$('.new').append("<textarea class='seamless' placeholder='Type your comment here'></textarea>");
	$('.seamless').toggleClass('open');
	$('.new textarea').focus();
}

//Populates list of niches where necessary
var niches= ['Baby boomers','Business owners','Independent women','Inheritors','LGBT community','Married couples','Parents','Retirees','Young professionals']

for (var i=0; i<niches.length; i++) 
	{	$('#niche').append('<span class="ck-button choices"><label><input type="checkbox" value="1"><span>'+niches[i]+'</span></label></span>');
	} 
	
var specialties= ['Investments', 'Financial Planning', 'Retirement Plans', 'Budget/Debt Management', '401(K)/403(B)/IRAS', 'Taxes And Accounting', 'Real Estate', 'Insurance', 'Estate Planning', 'Choosing An Advisor']
for (var i=0; i<specialties.length; i++) console.log('specialty')
	{	$('#specialty').append('<span class="ck-button choices"><label><input type="checkbox" value="1"><span>'+specialties[i]+'</span></label></span>');
	} 
// Search page questionnaire
var questions=['Are you seeking ongoing financial guidance, or one-time help with a specific life event?',
    				'Are you looking for help in any specific areas? We can match you with experts who are highly rated in these specialties.',
    				'Do you self-identify with any of the following? How important is it that your advisor be highly rated by people who are similar to you?',
    				"Some advisors require minimum account sizes (although we know lots of awesome ones who don't). To show you the most relevant results, roughly what amount of assets do you need help with?",
    				'How financially savvy do you consider yourself?',
    				'Do you trade stocks, and if so how frequently?',
    				'If your retirement portfolio lost 20% of its value during a one month market slide, what would you be inclined to do?',
    				'If Jim Cramer from Mad Money recommends a stock, are you more or less likely to consider buying it?',
    				'To what extent is "beating the market" important to you?',
    				'Ideally, how often do you want to catch up with your advisor over the long term?'		
    					]
$(function(){
		      $("#header").load("header.html"); 
		    });
		   
		 var question_number=-1;
		 var sequence=['question1','question2','question3','question4','question5','question6','question7','question8','question9','question10'];
		  
		 function next_question() {
		 if (question_number==9){$('.question_box').remove();
			 					 $('#main').attr('style','display:none');	
			 					 $('.after').attr('style','display:inline');	

		 }
		 $('#'+sequence[question_number]).attr('style','display:none');		 	
		 	question_number=question_number+1;
		 $('#'+sequence[question_number]).attr('style','display:inline');
			 $('#question').text(questions[question_number]);
		 }
        next_question();