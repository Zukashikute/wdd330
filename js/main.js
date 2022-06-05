const links = [
   {
      label: "Week 1",
      url: "week1/index.html"
   },

   {
      label: "Week 2",
      url: "week2/index.html"
   },

   {
      label: "Week 3",
      url: "week3/index.html"
   },

   {
      label: "Week 4",
      url: "week4/index.html"
   },

   {
      label: "Week 5",
      url: "week5/index.html"
   },

   {
      label: "Week 6",
      url: "week6/index.html"
   },

   {
      label: "Week 7",
      url: "week7/index.html"
   }
]

// Target Main Element
let linkContainer = document.getElementById("homeworkLinks");

// Created Elements for HTML
let newOlist = document.createElement("ol");

linkContainer.appendChild(newOlist);

function loadLinks() {
   for (link in links) {
      // Create elements according to how many objects in links[].
      let newBulletList = document.createElement("li");
      let newLink = document.createElement("a");
      let textLabel = document.createTextNode(links[link].label);
      
      newOlist.appendChild(newBulletList);
      newBulletList.appendChild(newLink);
      newLink.appendChild(textLabel);
      newLink.href = (links[link].url);
   }

}

loadLinks();