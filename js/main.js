
	var pictureSource;
	var destinationType;



				//<!--Wait for the phoneGap to load-->
				document.addEventListener("deviceready",onDeviceReady,false);
				
				//<!--PhoneGap is Ready-->
				function onDeviceReady(){
					pictureSource = navigator.camera.PictureSourceType; 
					destinationType = navigator.camera.DestinationType;
				}
				
				//<!--Capture Photo -->
				function takePhoto(){
					navigator.camera.getPicture(onPhotoDataSuccess,onError,{
						quality:50,
						destinationType: destinationType.DATA_URL
					 
					
				}
				
				//iF WE CAPTURE A PHOTO
				function onPhotoDataSuccess(imageData){
					//set the image handler
					var dataImage = document.getElementById('dataImage');
					
					//Unhide
					dataImage.style.display = 'block';
					
					//show photo
					dataImage.src = "data:image/jpeg;base64," +imageData;
										
				}

				//If we get an image
				function onPhotoURISuccess(imageURI){
					 //set the image handler
					var uriImage = document.getElementById('uriImage');
					
					//Unhide
					uriImage.style.display = 'block';
					
					//show photo
					uriImage.src = imageURI;
				
				}
				
				//Handle the error
				function onError(error)
				{
					alert('Error:' + error);
				}
				
				