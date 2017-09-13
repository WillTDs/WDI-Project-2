/* global google */
document.addEventListener('DOMContentLoaded', () => {

  const mapDiv = document.getElementById('map');
  console.log(mapDiv);
  if(mapDiv) {
    // google map code goes here..
    const venueData = JSON.parse(mapDiv.dataset.venue);
    const map = new google.maps.Map(mapDiv, {
      center: venueData.location,
      zoom: 14
    });

    new google.maps.Marker({
      position: venueData.location,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: {
        url: '/assets/images/marker.png',
        scaledSize: new google.maps.Size(30,40)
      }
    });
  }

  const $form = $('form');
  if($form.length > 0) $form.validate();

});
