<template>
	<div>
	    <div id="fh5co-page">
	    	<nav-bar></nav-bar>
			<header id="fh5co-header" role="banner" class="fh5co-project js-fh5co-waypoint no-border" data-colorbg="#222222" data-next="yes">
				<div class="container">
					<div class="fh5co-text-wrap ">
						<div class="fh5co-intro-text">
							<h1>I&acute;m Full Stack Web Developer based <span>in</span> Butwal City</h1>
							<h2>Crafted by <a href="http://axioninfosys.com/" target="_blank">Axion Infosys</a></h2>
						</div>
					</div>
				</div>
				<div class="btn-next  fh5co-learn-more">
					<a href="#" class="scroll-btn">
						<span>See my portfolio</span>
						<i class="icon-chevron-down"></i>
					</a>
				</div>
			</header>
			<!-- data-colorbg="#8cc53e"  -->
			<div class="fh5co-project js-fh5co-waypoint" data-bgcolor="" data-next="yes">
				<div class="container">
					<div class="fh5co-project-inner row">
						<div class="fh5co-imgs col-md-8 ">
							<div class="img-holder-1 ">
								<img src="/static/images/resturant.jpg" alt="">
							</div>
							<div class="img-holder-2 ">
								<img src="/static/images/resturant-mobile.jpg" alt="">
							</div>
						</div>
						<div class="fh5co-text col-md-4 ">
							<h2>Resturant Management System</h2>
							<p>Manage Your Resturant From Single Platform</p>
						</div>
					</div>

				</div>
			</div>
			<!-- data-colorbg="#FF6138" -->
			<div class="fh5co-project js-fh5co-waypoint fh5co-reverse" data-colorbg="" data-next="yes">
				<div class="container">
					<div class="fh5co-project-inner row">
						<div class="fh5co-imgs col-md-8 col-md-push-4 ">
							<div class="img-holder-1 ">
								<img src="/static/images/consultancy.jpg" alt="">
							</div>
							<div class="img-holder-2 ">
								<img src="/static/images/consultancy-mobile.jpg" alt="">
							</div>
						</div>
						<div class="fh5co-text col-md-4 col-md-pull-8 ">
							<h2>School Management System</h2>
							<p>Manage School From A Single System. Notes, SMS, Notification, Student Login, Parent Login,Teacher Login, Result Management</p>
						</div>
					</div>

				</div>
			</div>
			
			<!-- data-colorbg="#2d4059" -->
			<div class="fh5co-project js-fh5co-waypoint" data-colorbg="" data-next="yes">
				<div class="container">
					<div class="fh5co-project-inner row">
						<div class="fh5co-imgs col-md-8 ">
							<div class="img-holder-1 ">
								<img src="/static/images/hotel.jpg" alt="">
							</div>
							<div class="img-holder-2 ">
								<img src="/static/images/hotel-mobile.jpg" alt="">
							</div>
						</div>
						<div class="fh5co-text col-md-4 ">
							<h2>Hotel Management System</h2>
							<p>Room Reservation, Checkout, Online Payment</p>
						</div>
					</div>

				</div>
			</div>
	      <footer id="fh5co-footer" class="js-fh5co-waypoint">
	        <div class="container">
	          <div class="row">
	            <div class="col-md-12 text-center">
	              <p><small>&copy; 2018 Hold. All Rights Reserved. <br> Created by <a href="http://axioninfosys.com/" target="_blank">Axion Infosys</a></small> </p>
	              <ul class="fh5co-social">
	                <li>
	                  <a href="#"><i class="icon-twitter"></i></a>
	                </li>
	                <li>
	                  <a href="https://www.facebook.com/prayash.gautam"><i class="icon-facebook"></i></a>
	                </li>
	                <li>
	                  <a href="https://www.instagram.com/prayashgautam"><i class="icon-instagram"></i></a>
	                </li>
	              </ul>
	            </div>
	          </div>
	        </div>
	      </footer>
		</div>
	</div>
</template>
<script>
	export default{
		created(){	
				$("body").css("display", "block");
			    $("body").fadeIn(2000);
			    $("body").stop().animate({
			    	opacity: 1
			    });
		}
	}
</script>
<style></style>