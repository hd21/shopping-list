// Variables to be used for later

var $form = $('#js-shopping-list-form');

var $list = $('.js-shopping-list');

// Single state object

var state = {     
	items: [] 
};

// Functions that change state

// Adding items 

function add(value){     
	state.items.push(value); 
}

function remove(state, identifier){}

function validate(value){}

function uid(){     
	return Math.floor(Math.random() * 10000); 
}

// Rendering functions

$form.submit(function(event){     

	event.preventDefault();

	var $template = $('<li><span class="shopping-item"></span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span> </button> </div></li>');

	var input = 
	$(this).find('input').val();

	add({
		uid: uid(),
		name: input
	});

	for(var i = 0; i < state.items.length; i++){

		$template.find('.shopping-item').html(state.items[i].name);
		$template.attr('val', state.items[i].uid);

		$list.append($template);
	}

});

// Event listeners

$list.on('click', '.shopping-item-delete', function(){

	$(this).parents('li').remove();

	for (var i = 0; i < state.items.length; i++) {

		if ($(this).parents('li').attr('val') == state.items[i].uid) {
			state.items.splice(i, 1);
		}
	}

});

$list.on('click', '.shopping-item-toggle', function(){

	$(this).parents('li').find('.shopping-item').toggleClass('shopping-item__checked');

});
