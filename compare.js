jQuery(document).ready(function($){

	// examine the ULR of the current page to determine what data to display
	var pagename = window.location.pathname;

	// Clean up the URL
	pagename = pagename.replace('/','');
	pagename = pagename.split('-')[0];
	//console.log(pagename);
	//setup var;
	var compareCat;
	var toolsMet; 
	var units = 'met';

	// Display the right html based on the page
	switch(pagename){
		
		case 'category/hydraulische':
		
		// Default text to go inside the banner
		compareCat = '<ul><li><h3>Vergelijking hydraulisch</h3><button type="button" class="btn btn-outline-secondary white">Metric</button><button type="button" class="btn btn-outline-secondary">Imperial</button></li><li>Min. torque</li><li>Max. torque</li><li>Aandrijfvierkant</li><li>Gewicht</li><li>Reactiepal</li><li>Swivel</li><li>Simultorc</li><li>Spline</li></ul>';
		
		// Tools Imperial
		tools = {
			"ice" : '<ul class="ice"><li><h3>ICE</h3></li><li>117 ftÂ·lb</li><li>5360 ftÂ·lb</li><li>Â¾" - 1 Â½"</li><li>6 - 18 lb</li><li>Automatisch</li><li>360x360x180</li><li>Ja</li><li>Ja</li></ul>',
			"avanti" : '<ul class="avanti"><li><h3>Avanti</h3></li><li>117 ftÂ·lb</li><li>138510 ftÂ·lb</li><li>Â¾" - 3 Â½"</li><li>3.1 - 585 lb</li><li>Ja</li><li>360x180</li><li>Ja</li><li>Ja</li></ul>',	
			"mxt" : '<ul class="mxt"><li><h3>MXT</h3></li><li>118 ftÂ·lb</li><li>37099 ftÂ·lb</li><li>Â¾" - 2 Â½"</li><li>2.7 - 77.5 lb</li><li>Ja</li><li>360x180</li><li>Ja</li><li>No</li></ul>',
			"edge" : '<ul class="edge"><li><h3>EDGE</h3></li><li>106 ftÂ·lb</li><li>29650 ftÂ·lb</li><li>Â¾" - 2 Â½"</li><li>3.3 - 64.7 lb</li><li>No</li><li>360x180</li><li>No</li><li>No</li></ul>',		
			"stealth-ringsleutel" : '<ul class="stealth-ringsleutel"><li><h3>Stealth</h3></li><li>278 ftÂ·lb</li><li>34722 ftÂ·lb</li><li>n.a.</li><li>4 - 24.1 lb</li><li>Automatisch</li><li>360x180</li><li>Ja</li><li>n.a.</li></ul>',
			"xlct-ringsleutel" : '<ul class="xlct-ringsleutel"><li><h3>XLCT</h3></li><li>243 ftÂ·lb</li><li>30986 ftÂ·lb</li><li>n.a.</li><li>2.05 - 23.8 lb</li><li>No</li><li>360x360</li><li>No</li><li>n.a.</li></ul>',
			"versa-ringsleutel" : '<ul class="versa-ringsleutel"><li><h3>Versa</h3></li><li>150 ftÂ·lb</li><li>36777 ftÂ·lb</li><li>n.a.</li><li>2.8 - 39.3 lb</li><li>No</li><li>360</li><li>No</li><li>n.a.</li></ul>'
		};

		// Tools Metric
		toolsMet = {
			"ice" : '<ul class="ice"><li><h3>ICE</h3></li><li>158 Nm</li><li>7266 Nm</li><li>Â¾" - 1 Â½"</li><li>2,7 - 8 kg</li><li>Automatisch</li><li>360x360x180</li><li>Ja</li><li>Ja</li></ul>',
			"avanti" : '<ul class="avanti"><li><h3>Avanti</h3></li><li>153 Nm</li><li>187764 Nm</li><li>Â¾" - 3 Â½"</li><li>1,4 - 265 kg</li><li>Ja</li><li>360x180</li><li>Ja</li><li>Ja</li></ul>',
			"mxt" : '<ul class="mxt"><li><h3>MXT</h3></li><li>160 Nm</li><li>50300 Nm</li><li>Â¾" - 2 Â½"</li><li>1,2 - 35,1 kg</li><li>Ja</li><li>360x180</li><li>Ja</li><li>No</li></ul>',
			"edge" : '<ul class="edge"><li><h3>EDGE</h3></li><li>164 Nm</li><li>40200 Nm</li><li>Â¾" - 2 Â½"</li><li>1,5 - 29,4 kg</li><li>No</li><li>360x180</li><li>No</li><li>No</li></ul>',	
			"stealth-ringsleutel" : '<ul class="stealth-ringsleutel"><li><h3>Stealth</h3></li><li>377 Nm</li><li>47077 Nm</li><li>n.a.</li><li>1,81 - 10,93 kg</li><li>Automatisch</li><li>360x180</li><li>Ja</li><li>n.a.</li></ul>',
			"xlct-ringsleutel" : '<ul class="xlct-ringsleutel"><li><h3>XLCT</h3></li><li>329 Nm</li><li>42012 Nm</li><li>n.a.</li><li>0,93 - 10,80 kg</li><li>No</li><li>360x360</li><li>No</li><li>n.a.</li></ul>',
			"versa-ringsleutel" : '<ul class="versa-ringsleutel"><li><h3>Versa</h3></li><li>203 Nm</li><li>49863 Nm</li><li>n.a.</li><li>1,27 - 17,83 kg</li><li>No</li><li>360</li><li>No</li><li>n.a.</li></ul>'
		};
		
		break;
		
		case 'category/pneumatische':
		
		// Default text to go inside the banner
		compareCat = '<ul><li><h3>Vergelijking pneumatisch</h3><button type="button" class="btn btn-outline-secondary white">Metric</button><button type="button" class="btn btn-outline-secondary">Imperial</button></li><li>Min. torque</li><li>Max. torque</li><li>Drive size</li><li>Gewicht</li><li>Max. RPM</li></ul>';
		
		// Tools Imperial
		tools = {
			"digital-jgun-pneumatische-momentsleutel" : '<ul class="digital-jgun"><li><h3>Digital jGun</h3></li><li>85 ftÂ·lb</li><li>2777 ftÂ·lb</li><li>Â¾" - 2 Â½"</li><li>3,26 - 12,02 lb</li><li>5,5 RPM</li></ul>',
			"jgun-single-speed" : '<ul class="jgun-single-speed"><li><h3>jGun Single Speed</h3></li><li>48 ftÂ·lb</li><li>7924 ftÂ·lb</li><li>Â¾" - 2 Â½"</li><li>7.2 - 26.5 lb</li><li>65 RPM</li></ul>',
			"jgun-dual-speed-pneumatische-momentsleutel" : '<ul class="jgun-dual-speed"><li><h3>jGun Dual Speed</h3></li><li>194 ftÂ·lb</li><li>8282 ftÂ·lb</li><li>Â¾" - 1 Â½"</li><li>9.04 - 28.8 lb</li><li>24 RPM</li></ul>',
			"jgun-nutrunner" : '<ul class="jgun-nutrunner"><li><h3>jGun Nutrunner</h3></li><li>263 Nm</li><li>11.229 Nm</li><li>Â¾" - 1 Â½"</li><li>4 - 12,7 kg</li><li>24 RPM</li></ul>'		
		};

		// Tools Metric
		toolsMet = {
			"digital-jgun-pneumatische-momentsleutel" : '<ul class="digital-jgun"><li><h3>Digital jGun</h3></li><li>115 Nm</li><li>3.765 Nm</li><li>Â¾" - 2 Â½"</li><li>3,26 - 12,02 kg</li><li>5,5 RPM</li></ul>',
			"jgun-single-speed" : '<ul class="jgun-single-speed"><li><h3>jGun Single Speed</h3></li><li>115 Nm</li><li>11.253 Nm</li><li>Â¾" - 2 Â½"</li><li>3,26 - 12 kg</li><li>65 RPM</li></ul>',
			"jgun-dual-speed-pneumatische-momentsleutel" : '<ul class="jgun-dual-speed"><li><h3>jGun Dual Speed</h3></li><li>263 Nm</li><li>11.229 Nm</li><li>Â¾" - 1 Â½"</li><li>4 - 12,7 kg</li><li>24 RPM</li></ul>',	
			"jgun-nutrunner" : '<ul class="jgun-nutrunner"><li><h3>jGun Nutrunner</h3></li><li>263 Nm</li><li>11.229 Nm</li><li>Â¾" - 1 Â½"</li><li>4 - 12,7 kg</li><li>24 RPM</li></ul>'		
		};

		break;
		
		case 'category/elektrische':

		// Default text to go inside the banner
		compareCat = '<ul><li><h3>Vergelijking elektrisch</h3><button type="button" class="btn btn-outline-secondary white">Metric</button><button type="button" class="btn btn-outline-secondary">Imperial</button></li><li>Min. torque</li><li>Max. torque</li><li>Drive size</li><li>Weight</li><li>Accu</li><li>Max. RPM</li></ul>';
		
		// Tools Imperial
		tools = {
			"lithium-gun" : '<ul class="lithium-gun"><li><h3>Lithium Gun</h3></li><li>150 ftÂ·lb</li><li>3000 ftÂ·lb</li><li>Â½" - 1"</li><li>10.2 - 15.6 lbs</li><li>36 volt</li><li>17 RPM</li></ul>',
		 	"lion-gun-accu-aangedreven" : '<ul class="lion-gun-accu-aangedreven"><li><h3>LION Gun</h3></li><li>25 ftÂ·lb</li><li>700 ftÂ·lb</li><li>Â½" - Â¾"</li><li>7.3 - 7.8 lbs</li><li>18 volt</li><li>8.7 RPM</li></ul>'
		};

		// Tools Metric
		toolsMet = {
			"lithium-gun" : '<ul class="lithium-gun"><li><h3>Lithium Gun</h3></li><li>441 Nm</li><li>4067 Nm</li><li>Â½" - 1"</li><li>4,32 - 7,07 kg</li><li>36 volt</li><li>17 RPM</li></ul>',
		 	"lion-gun-accu-aangedreven" : '<ul class="lion-gun-accu-aangedreven"><li><h3>LION Gun</h3></li><li>34 Nm</li><li>650 Nm</li><li>Â½" - Â¾"</li><li>3,31 - 3,54 kg</li><li>18 volt</li><li>8,7 RPM</li></ul>'	
		};
		
		break;
		
		case 'category/pompsystemen/':

		// Default text to go inside the banner
		compareCat = '<ul><li><h3>Pompen vergelijking</h3><button type="button" class="btn btn-outline-secondary white">Metric</button><button type="button" class="btn btn-outline-secondary">Imperial</button></li><li>Max flow</li><li>Gewicht</li><li>Trappen</li><li>Reservoir</li><li>Oliekoeler</li><li>Automaat</li><li>Manifold</li><li>Data recording</li></ul>';
		
		// Tools Imperial	
		tools = {
			"vector" : '<ul class="vector"><li><h3>Vector</h3></li><li>620 cu.in/min</li><li>79 lb</li><li>3</li><li>2 gal</li><li>Ja</li><li>Ja</li><li>4</li><li>Ja</li></ul>',
			"hy-115230" : '<ul class="hy-115230"><li><h3>HY Series</h3></li><li>770 cu.in/min</li><li>57 lb</li><li>3</li><li>1 - 2 gal</li><li>Ja</li><li>No</li><li>4</li><li>No</li></ul>',
			"hy-air" : '<ul class="hy-air"><li><h3>HY-Air</h3></li><li>770 cu.in/min</li><li>46 lb</li><li>3</li><li>2 gal</li><li>No</li><li>No</li><li>4</li><li>No</li></ul>',
			"bigjet" : '<ul class="bigjet"><li><h3>BigJet</h3></li><li>1070 cu. in/min</li><li>63 lb</li><li>3</li><li>4 gal</li><li>No</li><li>Ja</li><li>2</li><li>Ja</li></ul>',
			"jetpro-s" : '<ul class="jetpro-s"><li><h3>JetPro-S</h3></li><li>260 cu. in/min</li><li>33 lb</li><li>2</li><li>1 gal</li><li>No</li><li>No</li><li>2</li><li>No</li></ul>',
			"hy-twin" : '<ul class="hy-twin"><li><h3>HY-Twin</h3></li><li>1500 cu.in/min.</li><li>98 lb</li><li>3</li><li>5 gal</li><li>No</li><li>No</li><li>4</li><li>No</li></ul>',
			"jetpro-s-air" : '<ul class="jetpro-s-air"><li><h3>Jetpro-S-Air</h3></li><li>260 cu.in/min.</li><li>33.07 lb</li><li>2</li><li>1 gal</li><li>No</li><li>No</li><li>2</li><li>No</li></ul>',	
		};

		// Tools Metric
		toolsMet = {
			"vector" : '<ul class="vector"><li><h3>Vector</h3></li><li>10,16 l/min</li><li>35,8 kg</li><li>3</li><li>7,57 l</li><li>Ja</li><li>Ja</li><li>4</li><li>Ja</li></ul>',
			"hy-115230" : '<ul class="hy-115230"><li><h3>HY Series</h3></li><li>12,62 l/min</li><li>25,8 kg</li><li>3</li><li>3,78 l / 7,57 l</li><li>Ja</li><li>No</li><li>4</li><li>No</li></ul>',
			"hy-air" : '<ul class="hy-air"><li><h3>HY-Air</h3></li><li>12,62 l/min</li><li>21,0 kg</li><li>3</li><li>7,57 l</li><li>No</li><li>No</li><li>4</li><li>No</li></ul>',
			"bigjet" : '<ul class="bigjet"><li><h3>BigJet</h3></li><li>17,53 l/min</li><li>28,6 kg</li><li>3</li><li>15,14 l</li><li>No</li><li>Ja</li><li>2</li><li>Yes</li></ul>',
			"jetpro-s" : '<ul class="jetpro-s"><li><h3>JetPro-S</h3></li><li>4,26 l/min</li><li>15,0 kg</li><li>2</li><li>3,79 l</li><li>No</li><li>No</li><li>2</li><li>No</li></ul>',
			"hy-twin" : '<ul class="hy-twin"><li><h3>HY-Twin</h3></li><li>24,58 l/min</li><li>44,4 kg</li><li>3</li><li>11,36 l</li><li>No</li><li>No</li><li>4</li><li>No</li></ul>',
			"jetpro-s-air" : '<ul class="jetpro-s-air"><li><h3>Jetpro-S-Air</h3></li><li>4,26 l/min</li><li>15,0 kg</li><li>2</li><li>3,79 l</li><li>No</li><li>No</li><li>2</li><li>No</li></ul>',	
		};
		
		break;
	}
		
	// Setup the banner in the dom then hide on page load
	var banner = '<div class="compareBanner"><i class="fa fa-times close" aria-hidden="true"></i><div class="g-container"><div class="g-content">'+compareCat+'</div></div></div>';
	$(banner).appendTo('#g-page-surround');
	var campareBanner = $('.compareBanner');
	campareBanner.hide();

	// Click on any check box
	$('input[type="checkbox"]').change(function(){
		
		// Check if self is checked or unchecked
		//if($(this).is(":checked")) {
		
		// Check if this is the only checked box
		var checkedboxes = $('input[type="checkbox"]:checked').length;
		
		// Get the clicked element
		var tool = $(this);
		
		switch(checkedboxes){
			case 1:
				// Just one show display bar
				campareBanner.fadeIn('fast');
				
				if($(this).is(":checked")) { 
					switch (units){	
						case 'imp':
							addToBar(tool);
						break;		
						case 'met':
							addToBarMet(tool);
						break;		
					}
				} else {
					removeFromBar(tool);
				}
			break;
			
			case 0:
				// All unchecked hide bar
				//console.log("zero");
				//remove old entries
				removeBar();
			break;
			
			default:
				// More than one add to bar
				//console.log(checkedboxes);
				if($(this).is(":checked")) {
					switch (units){	
						case 'imp':
							addToBar(tool);
						break;	
						case 'met':
							addToBarMet(tool);
						break;	
					}
				} else {
					removeFromBar(tool);
				}
		}		
	});

	function addToBar(tool){
		var toolname = $(tool).attr('name');
		//console.log(toolname);
		var newToolHTML = (tools[toolname]);
		$('.compareBanner .g-container .g-content').append(newToolHTML).children(':last').hide().fadeIn('fast');	
	}

	function addToBarMet(tool){
		var toolname = $(tool).attr('name');
		//console.log(toolname);
		var newToolHTML = (toolsMet[toolname]);
		$('.compareBanner .g-container .g-content').append(newToolHTML).children(':last').hide().fadeIn('fast');	
	}

	function removeFromBar(tool,fade){	
		var toolname = $(tool).attr('name');
		if(fade == '1'){
			$('ul[class="'+toolname+'"]' ).remove();
		}else{
		$('ul[class="'+toolname+'"]' ).fadeOut('fast', function() {
			$(this).remove();
		});	
		}
	}

	function removeBar(){
		campareBanner.fadeOut('fast', function() {
		$('.compareBanner ul:nth-child(n+2)').remove();
		});	
		$('input[type="checkbox"]').removeAttr('checked');
		units = 'imp';
		$('.compareBanner .btn').addClass('white');
		$('.compareBanner .btn:last-child').removeClass('white');
	}

	// Close button
	$('.compareBanner .close').click(function(){
		removeBar();
	});

	// Change units from imperial to metric
	function changeUnits(){
		switch (units){	
			case 'imp':
				units = 'met';
			break;	
			case 'met':
				units = 'imp';
			break;
		}
		//console.log(units);

			// Loop over each tool that is checked and change the tool units
			$('.compareBanner .g-container ul').each(function(){
				var tooltoChange = ($(this).attr('class'));
				if(typeof tooltoChange != "undefined")
				{
					tooltochange = $('input[name="'+tooltoChange+'"]:checked'); 
					removeFromBar(tooltochange,1);
					switch (units){	
						case 'imp':
							addToBar(tooltochange);
						break;					
						case 'met':
							addToBarMet(tooltochange);
						break;
					}
				}
			});
	}

	// Toggle color for imperial or metric box
	$('.compareBanner .btn').click(function(){
		$(this).toggleClass('white');
		$(this).siblings().removeClass('white');
		
		var unitClicked = $(this).html().substring(0, 3).toLowerCase();
		if(unitClicked != units){
		changeUnits();
		}
	});

});