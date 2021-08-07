var issues=[];       // main issues array where we will be inserting all the issues when add button is clicked
var issue,issueID,issueDesc,issueSeverity,issueAssigned,issueStatus;        // Global variable declaration for using theese variable in all functions
function saveIssue(e)
{
   issueID = Math.floor(Math.random()*1000000000000000);
   event.preventDefault();       //to prevent the page refreshing

   issueDesc=document.getElementById("issueDescInput").value;
   issueSeverity=document.getElementById("issueSeverityInput").value;
   issueAssigned=document.getElementById("issueAssignedToInput").value;
   issueStatus="Open";
   issue=                          //issue object
    {
      id:issueID,
      description:issueDesc,
      severity:issueSeverity,
      assigned:issueAssigned,
      status:issueStatus
    };
issues.push(issue);      //inserting all the issue information into our issues array.
console.log(issues);

fetchIssues();         //fetching all our datas from issues array
}

function fetchIssues() {
  var list=document.getElementById("issuesList");
  list.innerHTML="";

for (var i = 0; i < issues.length; i++) {

var id = issues[i].id;
var desc = issues[i].description;
var severity = issues[i].severity;
var assignedTo = issues[i].assigned;
var status = issues[i].status;  //to pass arguments here for a function see this setStatusClosed
list.innerHTML += '<div class="well">'+'<h6>Issue ID: ' + id + '</h6>'+'<span style="background-color: green" class="badge badge-primary">' +status + '</span>'+'<h3>' + desc + '</h3>'+'<p><i class="fas fa-clock"></i>'+'  '+ severity + '&nbsp ' +'<i class="fas fa-user"></i>'+'  '+ assignedTo + '</p>'+ '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\'' +id+'\')">Close</a> '+ '<a href="#" class="btn btn-danger" onclick="deleteIssue(\'' +id+'\')">Delete<a>'+'</div>';
  // displaying details in issues array
}
}
function setStatusClosed(id){                       //changing issue status
  for(var i=0; i<issues.length ;i++)
{
    if(issues[i].id == id)
           issues[i].status="Closed";

  }
  fetchIssues();  //again displaying issues arry
}

function deleteIssue(id){
  for (var i = 0; i < issues.length; i++)
   {
    if(issues[i].id == id)
    {
      issues.splice(i,1);          //deleting specific issue by retrieving their is  from issues array using splice
    }
  }
fetchIssues();
}
