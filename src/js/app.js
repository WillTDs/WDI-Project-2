/* global google */
document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello world');

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
      animation: google.maps.Animation.DROP
    });
  }

  const $form = $('form');
  if($form.length > 0) $form.validate();

});
