Vue.transition('fade', {
  enterClass: 'fadeInLeft',
  leaveClass: 'fadeOutRight'
});

new Vue ({
  el: "#content",
  data: {
    showHome:true,
    showAbout:false,
    showStaff:false,
    showContact:false
  },
  methods:{
    clickShowHome: function () {
      this.showHome=true;
      this.showAbout=false;
      this.showStaff=false;
      this.showContact=false;
    },
    clickShowAbout: function () {
      this.showAbout=true;
      this.showHome=false;
      this.showStaff=false;
      this.showContact=false;
    },
    clickShowStaff: function () {
      this.showHome=false;
      this.showAbout=false;
      this.showContact=false;
      this.showStaff=true;
    },
    clickShowContact: function () {
      this.showHome=false;
      this.showAbout=false;
      this.showStaff=false;
      this.showContact=true;
    }
  },
  components: {
    home: {
      template: '#home-template'
    },
    about: {
      template: '#about-template',
      data: function () {
        return { locations: "" }
        //   [
        //   { location: "Seismic", directions: "Going west on Hwy 71 on the southside of Austin, you will come to a light just before intersecting with Hwy 360. There will be a business park on the right(north) side. Turn into this busines park and make your way towards the wooded area on the west side, park either in the dirt parking lot or business park and hike along the trails. You will see that wall across the creek bed. There are several ways to get here by hiking along the creek also."},
        //   { location: "Gus Fruh", directions: "The closest entrance is located at the Gus Fruh entry point for the Greenbelt. Heading west from Lamar on Barton Springs Rd., take a left onto Barton Hills Dr. Follow this road south until you reach the sign for Gus Fruh entry point. Park on the street and take the trail down to Barton creek. Cross the creek and take a right on the trail on the far side."},
        //   { location: "New Wall", directions: "Spyglass: Go down Mopac until the Barton Skyway exit. Turn east and go to the end of that road. Get out of your car and hike down the chickenwire to the main trail. Hike south until the little fence that keeps the bikes out. Go a little past that and you're there."}
        // ]
      },
      methods : {
        seismicClick: function () {
          this.locations = "<br><div><h2>3923 South Capital of Texas Highway, Austin, TX 78704</h2></div><p>Starting at the address of the business park above, make your way towards the left of the parking lot after the entrance. Park along the left side of the parking lot and you will come across the trail head. Follow the trail head until you get to the river. Seismic will be right after you cross the river.</p><img src='photos/seismicMap.png'>";
        },
        gusFruhClick: function () {
          this.locations = "<br><div><h2>2633 Barton Hills Drive, Austin, TX 78704</h2></div><p>Across the street from the address above, you will enter the trail head. After following the trail for a couple of minutes, you will come across a river. Cross the river, take a right turn and follow the trail. Gus Fruh will be located on your left side.</p><img src='photos/gusFruhMap.png'>";
        },
        newWallClick: function () {
          this.locations = "<br><div><h2>1500 Spyglass Dr, Austin, TX 78746</h2></div><p>Starting at the address of the Tacodeli above, make your way across the street and enter the trail head. Follow the trail head until you reach a three-way junction and take a right. Continue following the trail for the next 10-15 minutes and New Wall will be located on your right side.</p><img src='photos/newWallMap.png'>";
        }
      }
    },
    climbs: {
      template: '#climbs-template',
      data: function() {
        return{ climbInfos: [
// Seimic Climbs
          {climb: "Hoovering", grade: "5.8", subGrade: "n/a", location: "Seismic"},
          {climb: "Bird Dog", grade: "5.8", subGrade: "n/a", location: "Seismic"},
          {climb: "Butt Scratch", grade: "5.8", subGrade: "n/a", location: "Seismic"},
          {climb: "Captain Morgan", grade: "5.10", subGrade: "c", location: "Seismic"},
          {climb: "Cuttin' Cards for a Poke", grade: "5.12", subGrade: "b", location: "Seismic"},
          {climb: "Die Easy", grade: "5.6", subGrade: "n/a", location: "Seismic"},
          {climb: "Diving for Rocks", grade: "5.10", subGrade: "d", location: "Seismic"},
          {climb: "Hollywood", grade: "5.7", subGrade: "n/a", location: "Seismic"},
          {climb: "Hoover Head", grade: "5.9", subGrade: "n/a", location: "Seismic"},
          {climb: "ACK!", grade: "5.11", subGrade: "b", location: "Seismic"},
          {climb: "It's a Wiggle Butt", grade: "5.8", subGrade: "n/a", location: "Seismic"},
          {climb: "Just for the Fun of It", grade: "5.10", subGrade: "a", location: "Seismic"},
          {climb: "Lick the Window", grade: "5.10", subGrade: "c", location: "Seismic"},
          {climb: "Lonesome Dove", grade: "5.11", subGrade: "a", location: "Seismic"},
          {climb: "Angel of Poets", grade: "5.10", subGrade: "a", location: "Seismic"},
          {climb: "Maggy Needs New Shoes", grade: "5.9", subGrade: "n/a", location: "Seismic"},
          {climb: "Magster", grade: "5.10", subGrade: "a", location: "Seismic"},
          {climb: "Man Hands", grade: "5.11", subGrade: "n/a", location: "Seismic"},
          {climb: "Matter of honer", grade: "5.10", subGrade: "a", location: "Seismic"},
          {climb: "Mister Blister", grade: "5.10", subGrade: "a", location: "Seismic"},
          {climb: "The Mongrel", grade: "5.9", subGrade: "n/a", location: "Seismic"},
          {climb: "Nose Print on the Windshield", grade: "5.11", subGrade: "c", location: "Seismic"},
          {climb: "Over Easy", grade: "5.9", subGrade: "n/a", location: "Seismic"},
          {climb: "Rock Dog", grade: "5.11", subGrade: "b", location: "Seismic"},
          {climb: "Roo Dog", grade: "5.8", subGrade: "n/a", location: "Seismic"},
          {climb: "Seismic Step", grade: "5.8", subGrade: "n/a", location: "Seismic"},
          {climb: "She's No Dog, She's my Wife", grade: "5.11", subGrade: "b", location: "Seismic"},
          {climb: "Short People", grade: "5.9", subGrade: "n/a", location: "Seismic"},
          {climb: "Slimy Crack", grade: "5.10", subGrade: "a", location: "Seismic"},
          {climb: "Torpedoes Away", grade: "5.9", subGrade: "n/a", location: "Seismic"},
          {climb: "Luminaire Noir", grade: "5.11", subGrade: "n/a", location: "Seismic"},
// Gus Fruh Climbs
          {climb: "Betwixt", grade: "5.11", subGrade: "b", location: "Gus Fruh"},
          {climb: "Birdland", grade: "5.10", subGrade: "d", location: "Gus Fruh"},
          {climb: "Chicken Supreme", grade: "5.10", subGrade: "a", location: "Gus Fruh"},
          {climb: "Egg Salad Sandwich", grade: "5.10", subGrade: "a", location: "Gus Fruh"},
          {climb: "Fern Bar", grade: "5.9", subGrade: "n/a", location: "Gus Fruh"},
          {climb: "Gros Ventre", grade: "5.11", subGrade: "a", location: "Gus Fruh"},
          {climb: "Hier Apparent", grade: "5.9", subGrade: "n/a", location: "Gus Fruh"},
          {climb: "Iranian Arms Deal", grade: "5.8", subGrade: "n/a", location: "Gus Fruh"},
          {climb: "Rock Retard", grade: "5.11", subGrade: "a", location: "Gus Fruh"},
          {climb: "Thumb Dance", grade: "5.10", subGrade: "b", location: "Gus Fruh"},
          {climb: "Charlie Don't Surf", grade: "5.10", subGrade: "d", location: "Gus Fruh"},
          {climb: "Gray Streak", grade: "5.10", subGrade: "c", location: "Gus Fruh"},
          {climb: "Jerry's Kids", grade: "5.11", subGrade: "b", location: "Gus Fruh"},
          {climb: "King of Ging", grade: "5.10", subGrade: "b", location: "Gus Fruh"},
// New Wall Climbs
          {climb: "Check the Monkey", grade: "5.12", subGrade: "c", location: "New Wall"},
          {climb: "Power Monkey", grade: "5.12", subGrade: "c", location: "New Wall"},
          {climb: "Sunshine Boys", grade: "5.11", subGrade: "a", location: "New Wall"},
          {climb: "Rock and Roll High School", grade: "5.11", subGrade: "a", location: "New Wall"},
          {climb: "Cedar Fever", grade: "5.10", subGrade: "c", location: "New Wall"},
          {climb: "Hank's Route", grade: "5.9", subGrade: "n/a", location: "New Wall"},
          {climb: "PeeWee's Big Adventure", grade: "5.11", subGrade: "c", location: "New Wall"},
          {climb: "Space Cowboy", grade: "5.12", subGrade: "b", location: "New Wall"},
          {climb: "Iron Man", grade: "5.12", subGrade: "a", location: "New Wall"},
          {climb: "Through the Looking Glass", grade: "5.11", subGrade: "a", location: "New Wall"},
          {climb: "Tunnel Vision", grade: "5.12", subGrade: "a", location: "New Wall"},
          {climb: "Save A Bolt for Me", grade: "5.10", subGrade: "d", location: "New Wall"},
          {climb: "Buddha", grade: "5.12", subGrade: "a", location: "New Wall"},
          {climb: "Cloud Nine", grade: "5.11", subGrade: "d", location: "New Wall"},
          {climb: "Hysteria", grade: "5.11", subGrade: "b", location: "New Wall"},
          {climb: "Meet the Flintstones", grade: "5.9", subGrade: "n/a", location: "New Wall"},
          {climb: "Mr. Slate", grade: "5.11", subGrade: "a", location: "New Wall"},
          {climb: "School Boys Indirect", grade: "5.9", subGrade: "n/a", location: "New Wall"},
          {climb: "Gunsmoke", grade: "5.9", subGrade: "n/a", location: "New Wall"}
        ],
      filteredClimbInfos: [],
      tableShow: true}
      },
      methods: {
        // function used to sort table
        updateTable: function () {
          var locationSelect = document.getElementById('locationSelect').value;
          var gradeSelect = document.getElementById('gradeSelect').value;
          this.filteredClimbInfos.length = 0;

          if (locationSelect == "all" && gradeSelect == "all") {
            // return all objects in array
            for(var i=0; i<this.climbInfos.length; i++){
              this.filteredClimbInfos.push({climb: this.climbInfos[i].climb,
                                            grade: this.climbInfos[i].grade,
                                            subGrade: this.climbInfos[i].subGrade,
                                            location: this.climbInfos[i].location
                                           });
            }
          } else if (locationSelect == "all" && gradeSelect != "all"){
            for(var i=0; i<this.climbInfos.length; i++){
              if (gradeSelect == this.climbInfos[i].grade) {
                // return all objects with selected grade
                this.filteredClimbInfos.push({climb: this.climbInfos[i].climb,
                                              grade: this.climbInfos[i].grade,
                                              subGrade: this.climbInfos[i].subGrade,
                                              location: this.climbInfos[i].location
                                             });
              }
            }
          } else if (locationSelect != "all" && gradeSelect == "all"){
            for(var i=0; i<this.climbInfos.length; i++){
              if (locationSelect == this.climbInfos[i].location) {
                // return all objects with selected location
                this.filteredClimbInfos.push({climb: this.climbInfos[i].climb,
                                              grade: this.climbInfos[i].grade,
                                              subGrade: this.climbInfos[i].subGrade,
                                              location: this.climbInfos[i].location
                                             });
              }
            }
          } else {
            for(var i=0; i<this.climbInfos.length; i++){
              if (locationSelect == this.climbInfos[i].location && gradeSelect == this.climbInfos[i].grade) {
                // return all objects with selected location and grade
                this.filteredClimbInfos.push({climb: this.climbInfos[i].climb,
                                              grade: this.climbInfos[i].grade,
                                              subGrade: this.climbInfos[i].subGrade,
                                              location: this.climbInfos[i].location
                                             });
                // Aaron note: I wanted to put an else statement here that alerts
                // that there are no climbs with the selected fields (i.e "gus fruh" and "5.12")
                // but this results in the alert popping up multiple times due to
                // it being within the for loop statement's scope above. Do you have
                // any ideas?
              }
            }
          }
          //  NOT APPLICABLE CODE! **PLEASE  IGNORE!!!**
          
          // for(var i=0; i<this.climbInfos.length; i++){
          //   if (locationSelect == this.climbInfos[i].location && gradeSelect == this.climbInfos[i].grade) {
          //     // return all objects with selected location and grade
          //     this.filteredClimbInfos.push({climb: this.climbInfos[i].climb,
          //                                   grade: this.climbInfos[i].grade,
          //                                   subGrade: this.climbInfos[i].subGrade,
          //                                   location: this.climbInfos[i].location
          //                                  });
          //   }
          // }
          // for (var i=0; i<this.climbInfos.length; i++) {
          //   var gradeSelect = document.getElementById("gradeSelect").value;
          //   var locationSelect = document.getElementById('locationSelect').value;
          //   if (this.climbInfos[i].grade == gradeSelect) {
          //     if (this.climbInfos[i].location == locationSelect) {
          //       alert("sworking?")
          //     }
          //   } else if (gradeSelect == "all" && locationSelect == "all"){
          //     // return whole array
          //   }
          // }
        }
      }
    },
    contact: {
      template: '#contact-template'
    }
  }
});
