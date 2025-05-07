//Javascript Function that changes a CSS property -> Mobile Nav which changes the style of the mobile header
//Hamburger menu -> 3 line svg which changes coolor on hover & reveals the navagation links
//A JS function that changes the main page photo everyday
//Javascript Function that changes text -> changes the time live on the website



// Creates a variable to store current hour (0-23)
// With he variable "hour", 0 correlates to 12 am
let hour = new Date().getHours();
let minute = new Date().getMinutes();
let day = new Date().getDay();
console.log("Hours: ", hour, minute);
    

// Creates DOM queries 
// - element with id "timeofhour" -> changes the time in the nav bar
// - element with id "message" -> to update message
// - element with id "homePhoto" -> update the home photo depending on the day of the week
let timeofhour = document.getElementById("timeofhour");
let message = document.getElementById("message");
let homePhoto = document.querySelector("#homePhoto");
let title = document.getElementById("title");

//DOM Queries to update main website content
let heading = document.getElementById("heading");
let blurb = document.getElementById("blurb");
let paragraph = document.getElementById("paragraph");
let scriptures_header = document.getElementById("scriptures_header");
let scriptures = document.getElementById("scriptures");

// Center-align the heading using javascript
message.style.textAlign = "center";

// Write conditional logic
// if daytime (hour is between 6 and 18)
function clock() {
    minute = new Date().getMinutes();
    hour = new Date().getHours();
    
    //allows the time to have a 0:00 format even when the minute number is under 10
    if (minute < 10){
        minute = "0" + minute;
    }


    //making sure that when it's 12 am it shows as 12
    if (hour == 0){
      timeofhour.textContent = "12" + ":" + minute + " am";
    }

    //for every other time that is over 0 but under 12 to account for all the morning times
    else if (hour <= 11 && hour != 0){
        timeofhour.textContent = (hour) + ":" + minute + " am";
    }

    //for all the afternoon times
    else if (hour == 12) {
        timeofhour.textContent = (hour) + ":" + minute + " pm";
    }
    
    else{
        timeofhour.textContent = (hour-12) + ":" + minute + " pm";
    }
}

//changes the main page photo depending on the day of the week
function photoOfTheDay(){
    //Sunday
    if (day == 0){
        homePhoto.src = "./images/me5/me-1500.png";
        homePhoto.srcset = "./images/me5/me-3000.png 2x, ./images/me5/me-4500.png 3x";
    
    }

    //Monday
    if (day == 1){
        homePhoto.src = "./images/me2/me-1500.png";
        homePhoto.srcset = "./images/me2/me-3000.png 2x, ./images/me2/me-4500.png 3x";
    }

    //Tuesday
    if (day == 2){
        homePhoto.src = "./images/me1/me-1500.png";
        homePhoto.srcset = "./images/me1/me1-3000.png 2x, ./images/me1/me1-4500.png 3x";
    }

    //Wednesday
    if (day == 3){
        homePhoto.src = "./images/me3/me-1500.png";
        homePhoto.srcset = "./images/me3/me-3000.png 2x, ./images/me3/me-4500.png 3x";
    }

    //Thursday
    if (day == 4){
        homePhoto.src = "./images/me4/me-1500.png";
        homePhoto.srcset = "./images/me4/me-3000.png 2x, ./images/me4/me-4500.png 3x";
    }

    //Friday
    if (day == 5){
        homePhoto.src = "./images/me6/me-1500.png";
        homePhoto.srcset = "./images/me6/me-3000.png 2x, ./images/me6/me-4500.png 3x";
    }

    //Saturday
    if (day == 6){
        homePhoto.src = "./images/main/me-1500.png";
        homePhoto.srcset = "./images/main/me-3000.png 2x, ./images/main/me-4500.png 3x";
    }

    console.log("changed");
}

//a function that only displays the nav options for mobile when the hamburger menu is pressed & changes the style of the title of the website in mobile view
function mobileNav(){
    var x = document.querySelector(".links");
    title.style.fontStyle = "none";
    if (x.style.display === "block") {
        x.style.display = "none";
        title.style.fontStyle = "normal";
    } else {
        x.style.display = "block";
        title.style.fontStyle = "italic";
    }
  
}
function nav(){
    window.location.assign("content.html");
}

//for the knowledge option on the website
function knowledge() {
    heading.textContent = "Knowledge";
    blurb.textContent = "Knowledge can be considerred the shared confidential information about histories, preferences, feelings, and desire ";
    paragraph.textContent = "God is the ultimate example of someone who knows us completely. Aside from creating us and knowing who we were before we were even born, he knows our thoughts, the good, bad, and ugly. It’s comforting to me, at least to know that even when my closest friends may not understand me, I have a creator who does and may know things about me that I have yet to discover!";
    scriptures_header.textContent = "Scriptures About God's Knowledge";
    scriptures.innerHTML = "<ul><li>Jeremiah 1:5 (NIV) - ‘Before I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations.’</li><li>Psalm 139:1-2 (NIV) - 'You have searched me, Lord, and you know me. You know when I sit and when I rise; you perceive my thoughts from afar.'</li><li>John 10:14 (NIV) - 'I am the good shepherd; I know my sheep and my sheep know me.'</li></ul>"
    paragraph.style.fontSize = "1.2em"
    scriptures.style.fontSize = "0.7em"
}

function interdependence() {
    heading.textContent = "Interdependence";
    blurb.textContent = "Interdependence can be considerred the ways in which you need & influence one another (in strong, frequent, diverse, and enduring ways)";
    paragraph.textContent = "God doesn’t need us, but wants us. He has all the power in the world, yet decided to make you and m,e and consider us as his children and not pawns to be ruled over, which makes a relationship with God fairly special. Although we can’t necessarily influence God, we can rely on God’s divine insight/power in ways that surpass human capability";
    scriptures_header.textContent = "Scriptures About Interdependence With God";
    scriptures.innerHTML = "<ul><li>Acts 17:25 NIV - ‘And he is not served by human hands, as if he needed anything. Rather, he himself gives everyone life and breath and everything else.’ </li><li>Psalm 121:1–2 (NIV) - ‘I lift up my eyes to the mountains— where does my help come from? My help comes from the Lord, the Maker of heaven and earth.’</li><li>Philippians 4:13 (NIV) -'I can do all this through him who gives me strength.'</li> </ul>"
    paragraph.style.fontSize = "1.2em"
    scriptures.style.fontSize = "0.7em"
}

function caring() {
    heading.textContent = "Caring";
    blurb.textContent = "Caring can be defined as feeling more affection towards each other compared to others";
    paragraph.textContent = "There are countless scriptures regarding trusting God and more specifically God’s just nature. Knowing that justice is a priority to God makes it easier for me to trust him.";
    scriptures_header.textContent = "Scriptures About Trusting God";
    scriptures.innerHTML = "<ul><li>Matthew 6:30 NIV - ‘If that is how God clothes the grass of the field, which is here today and tomorrow is thrown into the fire, will he not much more clothe you—you of little faith?’ </li><li> 1 Peter 5:7 (NIV) - 'Cast all your anxiety on him because he cares for you.'</li><li> Psalm 34:17-18 (NIV)- 'The righteous cry out, and the Lord hears them; he delivers them from all their troubles. The Lord is close to the brokenhearted and saves those who are crushed in spirit.'</li><li>Isaiah 49:15-16 (NIV) - 'Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands; your walls are ever before me.'</li></ul>"
    paragraph.style.fontSize = "1.2em"
    scriptures.style.fontSize = "0.7em"
}

function trust() {
    heading.textContent = "Trust";
    blurb.textContent = "Trust is the expectation to be treated fairly & honorably and that no harm will come from relationship";
    paragraph.textContent = "There are countless scriptures regarding trusting God and more specifically God’s just nature. Knowing that justice is a priority to God makes it easier for me to trust him.";
    scriptures_header.textContent = "Scriptures About Trusting God";
    scriptures.innerHTML = "<ul><li> Isaiah 61:8 (NIV) - ‘For I, the Lord, love justice; I hate robbery and wrongdoing. In my faithfulness I will reward my people and make an everlasting covenant with them.’ </li><li>Micah 6:8 (NIV) - ‘He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.’</li><li>Psalm 89:14 (NIV) - ‘Righteousness and justice are the foundation of your throne; love and faithfulness go before you.’ </li> </ul>"
    paragraph.style.fontSize = "1.2em"
    scriptures.style.fontSize = "0.7em"
}

function responsiveness() {
    heading.textContent = "Responsiveness";
    blurb.textContent = "Responsiveness can be defined as the ability to recognize, understand, and support wishes";
    paragraph.textContent = "Since God has a deeper knowledge of who we are, it is easier for God to respond and understand our needs. God might not always respond in the ways we expect, but he still understands our needs.";
    scriptures_header.textContent = "Scriptures About God's Responsiveness";
    scriptures.innerHTML = "<ul><li>Psalm 37:4 (NIV): 'Take delight in the Lord, and he will give you the desires of your heart.'</li><li>Matthew 6:8 (NIV): 'Do not be like them, for your Father knows what you need before you ask him.'</li><li>Romans 8:27 (NIV): 'And he who searches our hearts knows the mind of the Spirit, because the Spirit intercedes for God’s people in accordance with the will of God.'</li><ul>"
    paragraph.style.fontSize = "1.2em"
    scriptures.style.fontSize = "0.7em"
}

function mutuality() {
    heading.textContent = "Mutuality";
    blurb.textContent = "Mutuality can be defined as thinking of things as “us” and “we” instead of “me” and “him/her/them";
    paragraph.textContent = "The greatest example of mutuality that God displays is through the human and physical embodiment of his power through Jesus. One of the main reasons God created Jesus, a human being with divine powers, is to have an example of someone who knows what we, the everyday person, deal with. ";
    scriptures_header.textContent = "Scriptures About God's Mutuality";
    scriptures.innerHTML = "<ul><li>Ephesians 2:18 (NIV): 'For through him we both have access to the Father by one Spirit.'</li><li>Romans 5:1 (NIV): 'Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ.'</li><li>Hebrews 4:14 (NIV): 'Therefore, since we have a great high priest who has ascended into heaven, Jesus the Son of God, let us hold firmly to the faith we profess.'</li><ul>"
    paragraph.style.fontSize = "1.2em"
    scriptures.style.fontSize = "0.7em"
}

function commitment() {
    heading.textContent = "Commitment";
    blurb.textContent = "Commitment can be defined as the want and expect relationship to continue & invest effort into maintaining relationships";
    paragraph.textContent = "God definitely wants us to have a relationship with him and wants us to invest in a relationship with him, yet whether we choose to reciprocate is up to us because we have free will. God put in effort to give us the Bible as a toolkit on how to have a relationship with him and others!";
    scriptures_header.textContent = "Scriptures About God's Commitment to Us";
    scriptures.innerHTML = "<ul> <li>Deuteronomy 31:6 (NIV): 'Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.'</li><li>Isaiah 46:4 (NIV): 'Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you.'</li><li>John 14:18 (NIV): 'I will not leave you as orphans; I will come to you.'</li><ul>"
    paragraph.style.fontSize = "1.2em"
    scriptures.style.fontSize = "0.7em"
}

//waiting for all DOM content to load before running functions
window.addEventListener('DOMContentLoaded', function () {
    setInterval(clock, 100);
    photoOfTheDay();
});