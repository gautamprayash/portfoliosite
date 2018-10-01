<template>
	<div>
  
	    
	    <div id="fh5co-page">
			<header id="fh5co-header" role="banner" class="fh5co-project js-fh5co-waypoint no-border" data-colorbg="#222222" data-next="yes">
				<div class="container">
					<div class="fh5co-text-wrap ">
						<div class="fh5co-intro-text">
							<h1>404</h1>
							<h2>Page Not Found</h2>
						</div>
					</div>
				</div>
			</header>
		</div>
	</div>
</template>
<script>
	export default{
		created(){
				console.log('home');	
				$("body").css("display", "block");
			    $("body").fadeIn(2000);
			    $("body").stop().animate({
			    	opacity: 1
			    });
		}
	}
</script>
<style></style>