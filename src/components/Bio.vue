<template>
	<div>
  
	    <!-- Loader -->
	    
	    <div id="fh5co-page">
	    	<nav-bar></nav-bar>
			<header id="fh5co-header" role="banner" class="fh5co-project js-fh5co-waypoint no-border" data-colorbg="#222222" data-next="yes">
				<div class="container">
					<div class="fh5co-text-wrap ">
						<div class="fh5co-intro-text">
							<h1>Who Am I <span>&amp;</span> What I do </h1>
							<h2>Crafted by <a href="http://axioninfosys.com/" target="_blank">Axion Infosys</a></h2>
						</div>
					</div>
				</div>
				<div class="btn-next  fh5co-learn-more">
					<a href="#" class="scroll-btn">
						<span>See the detail</span>
						<i class="icon-chevron-down"></i>
					</a>
				</div>
			</header>

			<div class="js-fh5co-waypoint fh5co-project-detail" id="fh5co-main" data-colorbg="">
				<div class="container">

					
					<div class="row">
						<div class="col-md-12">
							
							<div class="row row-bottom-padded-sm ">
								<div class="col-md-3">
									<h3 class="fh5co-section-heading"><span class="fh5co-number">N<sup>o</sup> 1</span> Who am I</h3>
								</div>
								<div class="col-md-9">
									<p class="fh5co-lead">— I'm Sudhanshu Gautam (Prayash) , a freelance developer & designer.</p>
									<p> My skills are broad: from ux to design, front end to back end development. I enjoy each aspect, and love building sites & mobile apps from start to finish, for clients all over the world.</p>
									<p>I'm available for remote work - if you would like to build something together, get in touch?</p>
								</div>
							</div>

							<div class="row row-bottom-padded-sm ">
								<div class="col-md-2"></div>
								<div class="col-md-8">
									<figure class="fh5co-bio-photo"><img src="/static/images/sudhanshu_gautam.jpg" class="img-responsive" alt="Sudhanshu Gautam"></figure>
								</div>
								<div class="col-md-2"></div>
							</div>


							<div class="row  row-bottom-padded-sm">
								<div class="col-md-3">
									<h3 class="fh5co-section-heading"><span class="fh5co-number">N<sup>o</sup> 2</span> What I Do</h3>
								</div>
								<div class="col-md-9" >
									
									<p class="fh5co-number">Front End</p>
									<h3 class="fh5co-section-heading">CSS3, Javascript,ES6,Vuejs</h3>
									<p class="fh5co-number">Back End</p>
									<h3 class="fh5co-section-heading">PHP, API, Laravel, Python</h3>
									<p class="fh5co-number">CMS</p>
									<h3 class="fh5co-section-heading">Wordpress</h3>
									<p class="fh5co-number">Apps</p>
									<h3 class="fh5co-section-heading">Mobile, Electron, Native</h3>
									<p class="fh5co-number">Cloud</p>
									<h3 class="fh5co-section-heading">AWS, Google, Firebase</h3>
								</div>
							</div>	
							

							<div class="row  row-bottom-padded-sm">
								<div class="col-md-3">
									<h3 class="fh5co-section-heading"><span class="fh5co-number">N<sup>o</sup> 3</span> Connect</h3>
								</div>
								<div class="col-md-9">
									<ul class="fh5co-social fh5co-stack">
										<li>
											<a href="#"><i class="icon-twitter"></i> Twitter</a>
										</li>
										<li>
											<a href="https://facebook.com/prayash.gautam"><i class="icon-facebook"></i> Facebook</a>
										</li>
										<li>
											<a href="https://instagram.com/prayashgautam"><i class="icon-instagram"></i> Instagram</a>
										</li>
										
									</ul>
								</div>
							</div>



							<div class="row ">
								<div class="col-md-3">
									<h3 class="fh5co-section-heading"><span class="fh5co-number">N<sup>o</sup> 4</span> My Location</h3>
								</div>
								<div class="col-md-12">
									<div id="fh5co-map"></div>
								</div>
							</div>

							

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